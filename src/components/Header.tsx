import User from "./ui/User";

export function Header() {
  return (
    <header>
      <nav className="border-b py-3 mb-10 lg:mb-12">
        <User
          url="/"
          fallback="JT"
          username="jtolushola"
          image="/images/avatar.jpeg"
        />
      </nav>
    </header>
  );
}

export default Header;
