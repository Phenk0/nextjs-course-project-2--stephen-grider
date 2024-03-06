import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import { signOut } from "@/actions";
import BtnSubmitForm from "@/components/BtnSubmitForm";

type Props = {
  name: string;
  image: string;
};
export default function PopoverUserMenu({ name, image }: Props) {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Avatar
          isBordered
          as="div"
          className="transition-transform"
          color="secondary"
          name={name || "GUEST"}
          size="md"
          radius="md"
          src={image || ""}
        />
      </PopoverTrigger>

      <PopoverContent aria-label="logout">
        <div className="p-4">
          <form action={signOut}>
            <BtnSubmitForm variant="ghost" color="danger" label="Sign Out" />
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
