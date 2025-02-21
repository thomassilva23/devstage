import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />

        <InputField
          readOnly
          defaultValue={"http://localhos:3000/invite/239213"}
        />

        <IconButton className="-mr-2">
          <Copy className="size-5" />
        </IconButton>
      </InputIcon>
    </InputRoot>
  );
}
