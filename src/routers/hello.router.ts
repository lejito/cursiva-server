import { Router } from "express";
import { HelloController } from "@controllers/hello.controller";

const helloRouter = Router();
const helloController = new HelloController();

helloRouter.get("/", helloController.greet);

export default helloRouter;
