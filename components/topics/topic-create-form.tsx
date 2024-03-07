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
import { createTopic } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(createTopic, { errors: {} });
  if (Object.keys(formState.errors).length > 0) console.log(formState.errors);
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex w-80 flex-col gap-4 p-4">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={Boolean(formState.errors.name)}
              errorMessage={formState.errors.name?.join(", ")}
              autoFocus
              autoComplete="off"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Desribe your topic"
              isInvalid={Boolean(formState.errors.description)}
              errorMessage={formState.errors.description?.join(", ")}
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
