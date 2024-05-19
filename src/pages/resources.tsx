export default function ResourcesPage() {
  return (
    <div>
      <h2 className="mb-1">Resources</h2>
      <p className="mb-6 md:w-2/6">
        A collection of resources I find interesting. I am constantly adding to
        this list. Feel free to explore.
      </p>

      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <iframe
          className="border-0 w-full h-screen rounded-none"
          src="https://raindrop.io/jtolushola/all-44362671/embed/sort=-created"
        />
      </div>
    </div>
  );
}
