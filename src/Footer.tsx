import "./Footer.css";

interface FooterProps {
  children?: Node;
}

function Footer(props: FooterProps) {
  return (
    <footer className="font-mono text-md text-white [text-shadow:_1px_1px_3px_#116] m-0 pb-2">
      <p>
        Made with ❤️ in Boston by{" "}
        <a href="https://hiredanatoday.com" target="_blank" rel="noreferrer" className="text-white visited:text-white">
          Dana Ross
        </a>{" "}
        &bull;{" "}
        <a
          href="https://github.com/dana-ross/computerhistory-boston"
          target="_blank"
          rel="noreferrer"
          className="text-white visited:text-white"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
