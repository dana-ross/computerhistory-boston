import Footer from "./Footer";
import Header from "./Header";

export default function FourOhFour() {
  return (
    <div className="company-container">
      <Header></Header>
      <main>
        <h1>Not Found</h1>
        <p>This page couldn't be found.</p>
        <p>
          <a href="/">Return to the home screen and begin a new adventure!</a>
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
}
