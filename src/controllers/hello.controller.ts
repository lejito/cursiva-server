import { Request, Response } from "express";

export class HelloController {
	greet(_req: Request, res: Response): void {
		res.status(200).json({ message: "Hello World!" });
	}
}
