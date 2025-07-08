"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const params = useParams();
    const url = params?.url;

    useEffect(() => {
        if (!url) return;

        const redirect = async () => {
            try {
                const res = await fetch(`/api/shorturls/${url}`, { method: "GET" });
                const body = await res.json();
                router.push(body.url);
            } catch (error) {
                router.push("/"); // fallback if something fails
            }
        };

        redirect();
    }, [url]);

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <h2>Redirecting to URL...</h2>
        </div>
    );
}
