import { query } from "@/utils/mysql";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        if (!body.url) return NextResponse.json({ message: "No url" }, { status: 400, statusText: "Invalid body Body" });
        const exist = await query(`SELECT id from urls where url_Original = '${body.url}'`);
        if (exist.length > 0) return NextResponse.json({ message: "Error url already exists: ", url: `http://localhost:3000/${exist[0].id}` }, { status: 200, statusText: "URl Alrady shortned" });
        const row = await query(`INSERT INTO urls (id, url_Original, valid_Till) VALUES (NULL, '${body.url}', '2025-07-09')`);
        return NextResponse.json({ message: "ok", url: `https://localhost:3000/${row.insertId}` }, { status: 200, statusText: "Sucess" });
    } catch (e) {
        return NextResponse.json({ message: `Error: ${e}` }, { status: 400, statusText: "Internal servwer error" });
    }
}
