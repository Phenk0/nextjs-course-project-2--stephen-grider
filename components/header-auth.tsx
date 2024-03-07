"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";
import {
  Avatar,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner
} from "@nextui-org/react";

export default function HeaderAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner color="secondary" />;
  }
  if (session?.user) {
    return (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              isBordered
              as="div"
              className="transition-transform"
              color="secondary"
              name={session.user.name as string}
              size="md"
              radius="md"
              src={session.user.image as string}
            />
          </PopoverTrigger>

          <PopoverContent aria-label="logout">
            <div className="p-4">
              <form action={signOut}>
                <BtnSubmitForm
                  variant="ghost"
                  color="danger"
                  label="Sign Out"
                />
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  }
  if (!session?.user) {
    return (
      <>
        <NavbarItem>
          <form action={signIn}>
            <BtnSubmitForm
              label="Sign In"
              color="secondary"
              variant="bordered"
            />
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            <BtnSubmitForm label="Sign Up" color="primary" variant="flat" />
          </form>
        </NavbarItem>
      </>
    );
  }
  return null;
}
