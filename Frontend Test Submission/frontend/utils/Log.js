export default async function Log(stack, level, _package, message) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJpc2hwcmVldDc1MjFAZ21haWwuY29tIiwiZXhwIjoxNzUxOTU0NDg0LCJpYXQiOjE3NTE5NTM1ODQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjOTMwMDY0MC05MzZhLTQxZmItYWNlZi02YWY5NTIyNmFkMDUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJpc2hwcmVldCBzaW5naCIsInN1YiI6Ijc1MzAwMGNmLTJmODItNGIyNy04MDc0LWU2YjczNTdmY2QyNiJ9LCJlbWFpbCI6ImlzaHByZWV0NzUyMUBnbWFpbC5jb20iLCJuYW1lIjoiaXNocHJlZXQgc2luZ2giLCJyb2xsTm8iOiIxNDMxMzIwMjcyMiIsImFjY2Vzc0NvZGUiOiJWUHBzbVQiLCJjbGllbnRJRCI6Ijc1MzAwMGNmLTJmODItNGIyNy04MDc0LWU2YjczNTdmY2QyNiIsImNsaWVudFNlY3JldCI6IkVwV0Jja3FRTlRZV1BaVU4ifQ.nloxE8uk6yfm6Rk8I0uHpeT0CGyVO_hcJ9dXKAoj8T4";

    if (!stack || !level || !_package || !message) return console.log("");
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            stack: stack.toLower(),
            level: level.toLower(),
            package: _package.toLower(),
            message: message.toLower(),
        }),
    });
    console.log("response status: ", response.status);
}
