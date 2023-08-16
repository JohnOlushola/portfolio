import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  page?: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="flex mb-4">
      <Link href="/" className="group flex items-center">
        <Image
          src="/images/avatar.jpeg"
          width={32}
          height={32}
          alt="John Olushola Temiloluwa"
          className="rounded-full mr-2.5"
        />

        <div className="border-y w-fit inline-flex items-center">
          <p className="text-xl group-hover:hidden">
            JTO
            {page && <span>&nbsp;&mdash;&nbsp; {page}</span>}
          </p>
          <p className="text-xl text-opacity-50 sr-only group-hover:not-sr-only">
            John Temiloluwa Olushola
          </p>
        </div>
      </Link>

      <p className="underline ml-auto">work in progress!</p>
    </div>
  );
};

export default Header;
