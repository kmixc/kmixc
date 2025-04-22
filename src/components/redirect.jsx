import { useEffect } from "react";

export default function Redirect() {
    useEffect(() => {
        window.location.href = "https://www.kmixc.com/contactcard/";
        //window.location.href = "www.kmixc.com/";
    }, []);

    return <div>Redirecting...</div>;
};
