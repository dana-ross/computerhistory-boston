import React, { useState } from "react";

const menuContextValues = {
    mobileMenuVisible: false,
    setMobileMenuVisible: (visibility: boolean) => { },
}

export const MenuContext = React.createContext(menuContextValues);

interface MenuContextProps {
    children: any;
}

export function MenuContextProvider({ children }: MenuContextProps) {

    const setMobileMenuVisible = (visibility: boolean) => {
        setMenuContextValuesState({ ...menuContextValuesState, mobileMenuVisible: visibility })
    }

    const initialMenuContextState = {
        mobileMenuVisible: false,
        setMobileMenuVisible,
    };

    const [menuContextValuesState, setMenuContextValuesState] = useState(initialMenuContextState);
    return (
        <MenuContext.Provider value={menuContextValuesState}>
            {children}
        </MenuContext.Provider>
    );
}