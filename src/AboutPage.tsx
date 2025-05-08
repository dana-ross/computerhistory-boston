import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import ReturnToMap from "./ReturnToMap";
import Sidebar from "./Sidebar";

export default function AboutPage() {
    return (
        <div className="company-container flex">

            <title>About : Boston's Computer History</title>

            <link
                rel="canonical"
                href={`https://www.computerhistory.boston/about/`}
            />

            <Sidebar />
            <main className="w-full h-svh overflow-y-scroll">
                <Header className="w-full mb-4" />
                <div>
                    <main className="mx-4 w-auto md:max-w-2xl">
                        <div className="flex flex-row"><img src="/icons/building-library.svg" className="w-6 mr-2" alt="" /><h1 className="text-xl text-black my-4">About</h1></div>
                        <p>This web site is a labor of love.</p>
                    </main>
                </div>
                <ReturnToMap />
                <Footer></Footer>
            </main>
        </div>

    )
}