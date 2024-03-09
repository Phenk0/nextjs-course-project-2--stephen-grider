"use client";
import { useFormState } from "react-dom";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from "@nextui-org/react";
import { createPost } from "@/actions";
import BtnSubmitForm from "@/components/common/BtnSubmitForm";

type Props = {
  slug: string;
};
export default function PostCreateForm({ slug }: Props) {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {}
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={Boolean(formState.errors.title)}
              errorMessage={formState.errors.title?.join(", ")}
              autoFocus
              autoComplete="off"
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Write your post"
              isInvalid={Boolean(formState.errors.content)}
              errorMessage={formState.errors.content?.join(", ")}
            />

            {formState.errors._form && (
              <div className="rounded-lg px-1 py-2 text-center font-bold bg-danger-100 text-small text-danger-800">
                {formState.errors._form?.join(", ")}
              </div>
            )}

            <BtnSubmitForm label="Submit" />
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
