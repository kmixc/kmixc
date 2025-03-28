import { useEffect } from "react";

export default function Redirect() {
    useEffect(() => {
        window.location.href = "https://www.kmixc.com";
        //window.location.href = "https://3aju11d6inwh8bvy.vistaprintdigital.com/";
    }, []);

    return <div>Redirecting...</div>;
};
