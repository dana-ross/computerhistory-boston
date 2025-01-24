import { useContext } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { ConfigContext } from "./ConfigContext";

export default function Sidebar() {
    const configContext = useContext(ConfigContext);

    return (
        <>
            <MobileMenu />
            <menu className="hidden md:block flex-none left-0 top-0 w-20 h-full z-[2000] bg-white text-center text-xs">
                <ul>
                    {configContext.menuLinks.map((menuLink) => {
                        return (
                            <li>
                                <Link to={menuLink.targetPath} className="block my-4">
                                    <img src={menuLink.iconURL} className="w-8 mx-auto" alt="" />
                                    <p>{menuLink.label}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </menu >
        </>
    );
}