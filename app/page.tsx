import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 ">
        <h1 className="text-2xl m-2 font-bold uppercase">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="my-4 rounded-lg shadow py-3 px-2  border-3 border-primary">
        <TopicCreateForm />

        <Divider className="my-2" />

        <h3 className="mb-4 text-xl uppercase underline">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
