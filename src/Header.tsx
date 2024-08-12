import { PropsWithChildren } from "react";
import "./Header.css";

interface HeaderProps {
  className?: string;
}

function Header(props: PropsWithChildren<HeaderProps>) {
  return (
    <header id="about" className={props.className || ""}>
      <a href="/">
        <h1>Boston's Computer History</h1>
      </a>
      {props.children}
    </header>
  );
}

export default Header;
