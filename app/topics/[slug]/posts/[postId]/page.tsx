type Props = {
  params: {
    slug: string;
    postId: string;
  };
};
export default function PostShowPage({ params }: Props) {
  const { slug, postId } = params;
  return (
    <>
      <h1 className="uppercase">{slug.split("-").join(" ")}</h1>
      <h2>Post {postId}</h2>
    </>
  );
}
