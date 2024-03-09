"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { z } from "zod";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

import type { Post } from "@prisma/client";

const createPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long" })
});

type CreatePostFormState = {
  errors: { title?: string[]; content?: string[]; _form?: string[] };
};
export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content")
  });
  if (!result.success) return { errors: result.error.flatten().fieldErrors };

  // Check if user is signed in
  const session = await auth();
  if (!session?.user?.id) {
    return {
      errors: {
        _form: ["You must be signed in to create a post"]
      }
    };
  }

  try {
    const topic = await db.topic.findUnique({ where: { slug } });
    if (!topic) {
      return {
        errors: {
          _form: ["Topic not found"]
        }
      };
    }

    const post: Post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id
      }
    });
    revalidatePath(paths.topicShow(slug));
    redirect(paths.postShow(slug, post.id));
  } catch (err: unknown) {
    if (isRedirectError(err)) throw err;

    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message]
        }
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create post"]
        }
      };
    }
  }
}
