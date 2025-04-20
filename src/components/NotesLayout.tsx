import router from "next/router";

interface NoteLayoutProps {
  children: React.ReactNode;
}

export default function NoteLayout({ children }: NoteLayoutProps) {
  // const isNotesRoute = router.pathname.startsWith("/notes");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <article className="prose">{children}</article>
    </div>
  );
}
