"use client";
import { query } from "@/utils/mysql";
import { NextResponse } from "next/server";

export function GET({ params }) {
    try {
        const url = params.url;
        if (!url) return NextResponse.json({ message: "Invalid Short Url Directing to home page.", url: "https://localhost:3000" }, { status: 400, statusText: "Invalid Short URL" });
        const row = query(`select url_Orginal from urls where id=${url}`);
        if (row.length !== 1) return NextResponse.json({ message: "Error in database Query" }, { status: 400, statusText: "Error in database query, row length is invalid" });
        return NextResponse.json({ message: "Sucess", url: row[0].url_Original }, { status: 200, statusText: "Sucess" });
    } catch (e) {
        return NextResponse.json({ message: "Error in GET Request", url: "/" }, { status: 500, statusText: "Internal server error" });
    }
}
