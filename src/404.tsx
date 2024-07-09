import Footer from "./Footer";
import Header from "./Header";
import ReturnToMap from "./ReturnToMap";

export default function FourOhFour() {
  return (
    <div className="company-container">
      <Header></Header>
      <main>
        <h1>Not Found</h1>
        <p>This page couldn't be found.</p>
        <ReturnToMap />
      </main>
      <Footer></Footer>
    </div>
  );
}
