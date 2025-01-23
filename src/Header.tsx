import { PropsWithChildren } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  return (
    <header id="about" className={props.className || ""}>
      <Link to="/" className="">
        <h1 className="font-mono text-lg md:text-2xl text-white [text-shadow:_1px_1px_3px_#116] p-4">Boston's Computer History</h1>
      </Link>
      {props.children}
    </header>
  );
}

export default Header;
