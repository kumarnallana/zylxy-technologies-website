export async function generateStaticParams() {
  return [{ slug: "project-one" }, { slug: "project-two" }];
}

export default function Page({ params }) {
  return (
    <div>
      <h1>Case Study</h1>
    </div>
  );
}
