import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";

type Props = {
  params: {
    slug: string;
  };
};
export default function TopicShowPage({ params }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="mb-2 text-2xl font-bold uppercase">
          {params.slug.split("-").join(" ")}
        </h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(params.slug)} />
      </div>
      <div>
        <PostCreateForm slug={params.slug} />
      </div>
    </div>
  );
}
