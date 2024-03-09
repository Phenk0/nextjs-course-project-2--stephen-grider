import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import CommentSkeleton from "@/components/comments/comment-skeleton";

interface CommentListProps {
  postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <Suspense fallback={<CommentSkeleton />} key={comment.id}>
        <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
      </Suspense>
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
