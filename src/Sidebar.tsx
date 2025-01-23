import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <menu className="hidden md:block flex-none left-0 top-0 w-20 h-full z-[2000] bg-white text-center text-xs">
            <ul>
                <li>
                    <Link to={"/"} className="block my-4">
                        <img src="/icons/map.svg" className="w-8 mx-auto" alt="" />
                        <p>Map</p>
                    </Link>
                </li>
                <li>
                    <Link to="/companies" className="block my-4">
                        <img src="/icons/briefcase.svg" className="w-8 mx-auto" alt="" />
                        <p>Companies</p>
                    </Link>
                </li>
                <li>
                    <Link to="/institutions" className="block my-4">
                        <img src="/icons/building-library.svg" className="w-8 mx-auto" alt="" />
                        <p>Institutions</p>
                    </Link>
                </li>
                <li>
                    <Link to="/landmarks" className="block my-4">
                        <img src="/icons/map-pin.svg" className="w-8 mx-auto" alt="" />
                        <p>Landmarks</p>
                    </Link>
                </li>
            </ul>
        </menu >
    );
}