"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { z } from "zod";

import { auth } from "@/auth";
import paths from "@/paths";
import { db } from "@/db";

import type { Topic } from "@prisma/client";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Must be at least 3 characters long" })
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes with no spaces"
    }),
  description: z
    .string()
    .min(10, { message: "Must be at least 10 characters long" })
});

type CreateTopicFormState = {
  errors: { name?: string[]; description?: string[]; _form?: string[] };
};
export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description")
  });
  if (!result.success) return { errors: result.error.flatten().fieldErrors };

  const session = await auth();
  if (!session?.user) {
    return {
      errors: {
        _form: ["You must be signed in to create a topic"]
      }
    };
  }

  try {
    const topic: Topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description
      }
    });
    revalidatePath(paths.home());
    redirect(paths.topicShow(topic.slug));
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
          _form: ["Something went wrong"]
        }
      };
    }
  }
}
