import { Request, Response } from "express";

class UserController {
  create(request: Request, response: Response) {
    return response.json({ message: "ok" })
  }

  index(request: Request, response: Response ) {}

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export { UserController }