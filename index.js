import 'dotenv/config';
import http from "http";
import app from './src/app.js';
import connectDB from "./src/db/connectDB.js";

const server = http.createServer(app);
const port = process.env.PORT || 8080;

async function main () {
    await connectDB();
    server.listen(port, () => {
        console.log(`- Local:        http://localhost:${port}`);
      });
}

main()