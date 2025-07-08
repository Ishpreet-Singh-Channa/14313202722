import mysql from "mysql2/promise";

async function connect() {
    const connection = await mysql.createConnection({
        host: "localhost",
        port: "",
        database: "Url_Shortner",
        user: "root",
        password: "",
    });
    return connection;
}

async function query(sql, values) {
    const connection = await connect();
    try {
        const [rows] = await connection.execute(sql, values);
        return rows;
    } finally {
        await connection.end();
    }
}

export { query };
