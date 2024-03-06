import { redirect } from "next/navigation";

export default function PostsPage({ params }: { params: { slug: string } }) {
  redirect(`/topics/${params.slug}`);
}
