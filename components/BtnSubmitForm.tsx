"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface Props {
  label: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
}
export default function BtnSubmitForm({ label, color, variant }: Props) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" color={color} variant={variant} isLoading={pending}>
      {label}
    </Button>
  );
}
