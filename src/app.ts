import express, { Application } from "express";
import cors from "cors";
import router from "./routers/app.router";
import "dotenv/config";

const app: Application = express();

const whiteList = process.env.WHITELIST
	? process.env.WHITELIST.split(",")
	: ["*"];

const corsOptions = {
	origin: function (origin: string | undefined, callback: Function) {
		if (whiteList.includes("*")) return callback(null, true);
		if (origin && whiteList.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	methods: ["GET", "POST", "PUT", "DELETE"],
	optionsSuccessStatus: 200,
};

app.set("trust proxy", true);
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
export default app;
