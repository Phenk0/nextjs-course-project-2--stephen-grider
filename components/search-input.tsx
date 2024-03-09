"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { search } from "@/actions";
import { SearchIcon } from "@nextui-org/shared-icons";

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={search}>
      <Input
        name="term"
        defaultValue={searchParams.get("term") || ""}
        type="search"
        startContent={<SearchIcon />}
      />
    </form>
  );
}
