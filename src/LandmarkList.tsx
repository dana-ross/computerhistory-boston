import Footer from "./Footer";
import ReturnToMap from "./ReturnToMap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { getLandmarks } from "./ConfigContext";
import { Link } from "react-router-dom";

export default function LandmarkList() {
    return (
        <div className="company-container flex">
            <title>Landmarks : Boston's Computer History</title>
            <link
                rel="canonical"
                href={`https://www.computerhistory.boston/landmarks/`}
            />
            <Sidebar />
            <main className="w-full h-svh overflow-y-scroll">
                <Header className="w-full mb-4" />
                <div>
                    <main className="mx-4 w-auto md:max-w-2xl">
                        <div className="flex flex-row"><img src="/icons/map-pin.svg" className="w-6 mr-2" alt="" /><h1 className="text-xl text-black my-4">Landmarks</h1></div>
                        <p className="mb-4">Eastern Massachusetts is no stranger to technological innovation. We've played a big role in the history of digital technology. And as The Computer Museum's first home, we played a big role in the history of the history of the computer revolution as well!</p>
                        <ul>
                            {getLandmarks().sort((a, b) => { return a.name.localeCompare(b.name) }).map((landmark) => {
                                return (
                                    <li className="mb-4" key={landmark.key()}>
                                        <Link to={"/landmark/" + landmark.slug + "/"} className="text-blue-500 visited:text-blue-500">
                                            <h1 className="text-md">{landmark.name}</h1>
                                        </Link>
                                        <p className="text-sm">{landmark.description}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </main>
                </div>
                <ReturnToMap />
                <Footer></Footer>
            </main>
        </div>
    );
}