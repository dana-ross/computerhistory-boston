import { PropsWithChildren } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  return (
    <header id="about" className={props.className || ""}>
      <div className="flex flex-row">
        <img src="/icons/hamburger-menu.svg" className="w-8 ml-4 mr-2 md:hidden" alt="" />
        <Link to="/" className="">
          <h1 className="font-mono text-lg md:text-2xl text-white [text-shadow:_1px_1px_3px_#116] pr-4 md:px-4 py-4">Boston's Computer History</h1>
        </Link>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
