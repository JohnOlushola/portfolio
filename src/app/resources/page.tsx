import PageHead from "@/components/PageHead";

export default function ResourcesPage() {
  return (
    <>
      <PageHead
        title="Resources"
        description="A collection of resources I find interesting."
      />

      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
        <iframe
          className="border-0 w-full h-screen rounded-none"
          src="https://raindrop.io/jtolushola/all-44362671/embed/sort=-created"
        />
      </section>
    </>
  );
}
