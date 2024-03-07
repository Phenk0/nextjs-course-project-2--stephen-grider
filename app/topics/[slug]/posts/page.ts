import { redirect } from "next/navigation";
import paths from "@/paths";

export default function PostsPage({ params }: { params: { slug: string } }) {
  redirect(paths.topicShow(params.slug));
}
