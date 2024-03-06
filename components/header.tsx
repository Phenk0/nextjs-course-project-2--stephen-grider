"use server";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import { auth } from "@/auth";
import Link from "next/link";
import BtnSubmitForm from "@/components/BtnSubmitForm";
import { signIn } from "@/actions";
import PopoverUserMenu from "@/components/PopoverUserMenu";

export default async function Header() {
  const session = await auth();

  return (
    <Navbar isBordered className="mb-6 shadow">
      <NavbarBrand>
        <Link href="/" className="text-3xl font-bold uppercase">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>{" "}
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <NavbarItem>
          {!session?.user ? (
            <div className="flex gap-4">
              <form action={signIn}>
                <BtnSubmitForm
                  label="Sign In"
                  color="secondary"
                  variant="bordered"
                />
              </form>
              <form action={signIn}>
                <BtnSubmitForm label="Sign Un" color="primary" variant="flat" />
              </form>
            </div>
          ) : (
            <PopoverUserMenu
              name={session.user.name as string}
              image={session.user.image as string}
            />
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
