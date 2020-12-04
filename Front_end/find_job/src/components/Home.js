import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
    const history = useHistory();

    const handleSignInClick = () => {
        history.push("/auth/sign-in")
    }
    
}