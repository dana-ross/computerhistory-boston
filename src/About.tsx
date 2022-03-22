import "./About.css";
import Search from "./Search";

function About() {
    return (
        <div id="about" className="hover-box">
            <h1>Boston Computer History</h1>
            <p>Made with ❤️ in Boston by <a href="https://danaross.dev" target="_blank" rel="noreferrer">Dana Ross</a></p>
            <Search></Search>
        </div>
    );
}

export default About;