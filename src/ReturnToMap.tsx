import { Link } from "react-router-dom";

export default function ReturnToMap() {
  return (
    <p className="my-8 ml-4">
      <Link to="/" className="return rounded-full text-white visited:text-white bg-sky-700 py-2 px-4">
        ⇦ Return to the Map
      </Link>
    </p>
  );
}
