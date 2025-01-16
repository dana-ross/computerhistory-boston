import { PropsWithChildren } from "react";
import "./Header.css";

interface HeaderProps {
  className?: string;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  return (
    <header id="about" className={props.className || ""}>
      <a href="/" className="">
        <h1 className="font-mono text-2xl text-white [text-shadow:_1px_1px_3px_#116] mb-4">Boston's Computer History</h1>
      </a>
      {props.children}
    </header>
  );
}

export default Header;
