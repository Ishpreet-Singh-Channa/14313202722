import { NextResponse } from "next/server";

export function GET() {
    // console.log(req);
    return NextResponse.json({ message: "HEllo" }, { status: 200 });
}
