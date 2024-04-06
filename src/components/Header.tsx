import User from "./ui/User";

export function Header() {
  return (
    <header>
      <nav className="border-b py-4 mb-10 lg:mb-12">
        <User
          image="/images/avatar.jpeg"
          fallback="JT"
          username="jtolushola"
          url="/"
        />
      </nav>
    </header>
  );
}

export default Header;
