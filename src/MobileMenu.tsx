import { useContext } from "react";
import { MenuContext } from "./MenuContext";
import { ConfigContext } from "./ConfigContext";
import { Link } from "react-router-dom";

export default function MobileMenu() {
    const menuContext = useContext(MenuContext);
    const configContext = useContext(ConfigContext);

    let mobileMenuClassName = menuContext.mobileMenuVisible ? "" : "hidden";
    mobileMenuClassName += " md:hidden absolute top-0 left-0 h-svh w-svw z-[2001] bg-white";
    return (
        <div className={mobileMenuClassName}>
            <button onClick={() => { menuContext.setMobileMenuVisible(false) }}><img src="/icons/close.svg" alt="Close Menu" className="w-8 h-8 ml-8 mt-8" /></button>
            <menu className="text-lg">
                <ul>
                    {configContext.menuLinks.map((menuLink) => {
                        return (
                            <li>
                                <Link to={menuLink.targetPath} onClick={() => { menuContext.setMobileMenuVisible(false) }} className="flex flex-row my-4">
                                    <img src={menuLink.iconURL} className="w-12 ml-8 mr-4" alt="" />
                                    <p className="mt-2">{menuLink.label}</p>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </menu >
        </div>
    )
}