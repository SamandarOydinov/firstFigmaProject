import React from "react";
import { useContext } from "react";
import { AuthContext, ThemeContext } from "../App";

function BComponent() {
    const { theme } = useContext(ThemeContext);
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div>
            <h1 className={theme === "dark" ? "text-4xl text-white bg-slate-700" : "text-4xl text-slate-700 bg-white"}>B Component</h1>
            <p>{isLoggedIn ? "Logged in" : "Not logged in"}</p>
        </div>
    )
}

export default BComponent;