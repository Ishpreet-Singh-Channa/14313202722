"use client";
import { useState } from "react";

export default function Home() {
    const [url, setUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const handleSubmit = async () => {
        if (url.length === 0) return setErrorMessage("Enter a valid Url");
        const res = await fetch("/api/urlShortner", { method: "POST", body: JSON.stringify({ url: url }) });
        if (res.status !== 200) return setErrorMessage("Error in processing request");
        setErrorMessage("");
        const body = await res.json();
        setShortUrl("Short URL: " + body.url);
    };
    return (
        <div className="flex flex-col ">
            <input
                type="text"
                value={url}
                placeholder="Enter Url"
                onChange={(e) => {
                    setErrorMessage("");
                    setUrl(e.target.value);
                }}
            />
            <p className="text-red">{errorMessage}</p>
            <button onClick={() => handleSubmit()}>Submit</button>
            <p>{shortUrl}</p>
        </div>
    );
}
