import { NextRequest, NextResponse } from "next/server";

// Tried using session storage but it won't work on page refreshes or when leaving the webside
const sessionStorage = [];

export function GET() {
    // Dummy
    const url = "https://google.com";
    return NextResponse.json({ message: url }, { status: 200, statusText: "Sucess" });
}

export async function POST(req) {
    try {
        const request = await req.json();
        sessionStorage.push(request.url);
        return NextResponse.json({ message: "ok" }, { status: 200, statusText: "Sucess" });
    } catch (e) {
        return NextResponse.json({ message: "Error no body" }, { status: 400, statusText: "Invalid or no body" });
    }
}
