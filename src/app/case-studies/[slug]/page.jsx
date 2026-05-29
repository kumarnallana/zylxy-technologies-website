export async function generateStaticParams() {
  // Returns an empty array to let the static build pass without errors
  return [];
}

export default function Page({ params }) {
  return (
    <div>
      <h1>Case Study</h1>
    </div>
  );
}
