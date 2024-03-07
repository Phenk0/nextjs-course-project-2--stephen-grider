import { redirect } from "next/navigation";
import paths from "@/paths";

export default function TopicsPage() {
  redirect(paths.home());
}
