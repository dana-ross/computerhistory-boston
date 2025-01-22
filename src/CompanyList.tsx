import { Helmet } from "react-helmet";
import Footer from "./Footer";
import ReturnToMap from "./ReturnToMap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { getCompanies } from "./ConfigContext";
import { Link } from "react-router-dom";

export default function CompanyList() {
    return (
        <div className="company-container flex">
            <Helmet
                title={`Companies : Boston's Computer History`}
            >
                <link
                    rel="canonical"
                    href={`https://www.computerhistory.boston/companies/`}
                />
            </Helmet>
            <Sidebar />
            <main className="w-full">
                <Header className="w-full mb-4" />
                <div>
                    <main className="ml-4 max-w-2xl">
                        <div className="flex flex-row"><img src="/icons/briefcase.svg" className="w-6 mr-2" alt="" /><h1 className="text-xl text-black my-4">Companies</h1></div>
                        <p className="mb-4">With esteemed institues of higher learning in our backyard, Eastern Massachusetts has been home to an impressive number of technology companies over the years. The Boston area has produced not only some of the first digital computers, but the parts used to build them. Even today, we see innovation on a scale rarely found outside Silicon Valley.</p>
                        <ul>
                            {getCompanies().sort((a, b) => { return a.name.localeCompare(b.name) }).map((company) => {
                                return (
                                    <li className="mb-4" key={company.key()}>
                                        <Link to={"/company/" + company.slug + "/"} className="text-blue-500 visited:text-blue-500">
                                            <h1 className="text-md">{company.name}</h1>
                                        </Link>
                                        <p className="text-sm">{company.description}</p>
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