type Props = {
  params: {
    slug: string;
  };
};
export default function TopicShowPage({ params }: Props) {
  return (
    <>
      <h1 className="uppercase">{params.slug.split("-").join(" ")}</h1>
    </>
  );
}
