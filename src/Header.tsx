import "./Header.css";
import Search from "./Search";

interface HeaderProps {
  className?: string;
  children?: Node;
}

function Header(props: HeaderProps) {
  return (
    <header id="about" className={props.className || ""}>
      <a href="/">
        <h1>Boston's Computer History</h1>
      </a>
      <Search></Search>
    </header>
  );
}

export default Header;
