"use client";
import Image from "next/image";

export default function Home() {
    const click = async () => {
        const res = await fetch("/api/urlShortner", { method: "POST", body: JSON.stringify({ url: "Ishpreet" }) });
    };
    const clickGet = async () => {
        const res = await fetch("/api/urlShortner", { method: "GET" });
        console.log("Status: ", res.status);
    };
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <button onClick={() => click()}>click me</button>
            <button onClick={() => clickGet()}>\adsfakfaofnoa</button>
        </div>
    );
}
