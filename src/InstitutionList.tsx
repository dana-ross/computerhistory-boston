import { Helmet } from "react-helmet";
import Footer from "./Footer";
import ReturnToMap from "./ReturnToMap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { getInstitutions } from "./ConfigContext";
import { Link } from "react-router-dom";
import LandmarkLogo from "./LandmarkLogo";

export default function InstitutionList() {
    return (
        <div className="company-container flex">
            <Helmet
                title={`Institutions : Boston's Computer History`}
            >
                <link
                    rel="canonical"
                    href={`https://www.computerhistory.boston/institutions/`}
                />
            </Helmet>
            <Sidebar />
            <main className="w-full">
                <Header className="w-full mb-4" />
                <div>
                    <main className="ml-4 max-w-2xl">
                        <div className="flex flex-row"><img src="/icons/building-library.svg" className="w-6 mr-2" /><h1 className="text-xl text-black my-4">Institutions</h1></div>
                        <p className="mb-4">Innovation doesn't just happen in offices. Government and academic labs in Eastern Massachusetts played big roles in the development of the computer as well as putting human footprints on the moon! There's even a pretty famous dorm room or two.</p>
                        <ul>
                            {getInstitutions().map((institution) => {
                                return (
                                    <li className="mb-4" key={institution.key()}>
                                        <Link to={"/institution/" + institution.slug + "/"} className="text-blue-500 visited:text-blue-500">
                                            <h1 className="text-md">{institution.name}</h1>
                                        </Link>
                                        <p className="text-sm">{institution.description}</p>
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