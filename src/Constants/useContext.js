import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [userCredential, setUserCredential] = useState("");
    const [carList, setCarList] = useState("");

    const context = {
        userCredential,
        setUserCredential,
        carList,
        setCarList
    };
    return (
        <MyContext.Provider value={context}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
