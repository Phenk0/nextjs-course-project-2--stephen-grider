import { redirect } from "next/navigation";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import PostList from "@/components/posts/post-list";

interface Props {
  searchParams: {
    term: string;
  };
}
export default async function SearchPage({ searchParams: { term } }: Props) {
  if (!term) redirect("/");
  return <PostList fetchData={() => fetchPostsBySearchTerm(term)} />;
}
