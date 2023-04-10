import Link from "next/link";

interface HeaderProps {
  page?: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="flex justify-between mb-4">
      <Link href="/">
        <div className="group border-y border-black w-fit inline-flex items-center">
          <p className="text-xl group-hover:hidden">
            JTO
            {page && <span>&nbsp;&mdash;&nbsp; {page}</span>}
          </p>
          <p className="text-xl text-opacity-50 hidden group-hover:block">
            John Temiloluwa Olushola
          </p>
        </div>
      </Link>

      <p className="underline">work in progress!</p>
    </div>
  );
};

export default Header;
