import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar isBordered className="mb-6 shadow">
      <NavbarBrand>
        <Link href="/" className="text-3xl font-bold uppercase">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>{" "}
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
