import { PropsWithChildren, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MenuContext } from "./MenuContext";

interface HeaderProps {
  className?: string;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  const menuContext = useContext(MenuContext);

  return (
    <header id="about" className={props.className || ""}>
      <div className="flex flex-row">
        <button onClick={() => { menuContext.setMobileMenuVisible(true) }}><img src="/icons/hamburger-menu-white.svg" alt="Open Menu" className="w-8 ml-4 mr-2 md:hidden" /></button>
        <Link to="/" className="">
          <h1 className="font-mono text-lg md:text-2xl text-white [text-shadow:_1px_1px_3px_#116] pr-4 md:px-4 py-4">Boston's Computer History</h1>
        </Link>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
