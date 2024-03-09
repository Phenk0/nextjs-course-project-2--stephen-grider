import { Card, Skeleton } from "@nextui-org/react";

export default function PostSkeleton() {
  return (
    <Card className="w-full p-4 space-y-5" radius="lg">
      <div className="my-2">
        <Skeleton className="h-8 w-1/5 rounded-lg bg-default-200" />
      </div>
      <div className="rounded border p-4 space-y-2">
        <Skeleton className="h-6 w-3/5 rounded-lg bg-default-200" />
        <Skeleton className="h-6 w-4/5 rounded-lg bg-default-200" />
        <Skeleton className="h-6 w-2/5 rounded-lg bg-default-300" />
      </div>
    </Card>
  );
}
