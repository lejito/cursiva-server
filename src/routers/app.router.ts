import { Router } from "express";
import helloRouter from "@routers/hello.router";

const appRouter = Router();

appRouter.use("/", helloRouter);

export default appRouter;
