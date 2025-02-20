import app from "@/app";
import http from "http";
import 'dotenv/config';

const PORT = parseInt(process.env.PORT || "3000");

// Create the HTTP server with the Express API REST app
const server = http.createServer(app);

server
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	})
	.on("error", (err: NodeJS.ErrnoException) => {
		if (err.code === "EADDRINUSE") {
			console.log(`Port ${PORT} is already in use. Please try another port.`);
		} else {
			console.error("An error occurred while trying to start the server", err);
		}
	});
