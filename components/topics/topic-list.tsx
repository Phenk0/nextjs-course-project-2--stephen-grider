import Link from "next/link";
import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/chip";
export default async function TopicList() {
  const topics = await db.topic.findMany();
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {topics.map((topic) => {
        return (
          <Link key={topic.id} href={paths.topicShow(topic.slug)}>
            <Chip color="warning" variant="shadow">
              {topic.slug}
            </Chip>
          </Link>
        );
      })}
    </div>
  );
}
