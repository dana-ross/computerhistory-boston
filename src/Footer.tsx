import "./Footer.css";

interface FooterProps {
  className?: string;
  children?: Node;
}

function Footer(props: FooterProps) {
  return (
    <footer className={props.className || ""}>
      <p>
        Made with ❤️ in Boston by{" "}
        <a href="https://danaross.dev" target="_blank" rel="noreferrer">
          Dana Ross
        </a>{" "}
        &bull;{" "}
        <a
          href="https://github.com/dana-ross/computerhistory-boston"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
