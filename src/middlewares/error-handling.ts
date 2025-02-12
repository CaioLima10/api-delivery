import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/app-error";
import { ZodError } from "zod";

export function errorHandline(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
){
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if(error instanceof ZodError) {
    return response.status(400).json({
      message: "validation error", 
      issues: error.format()
    })
  }

  return response.status(500).json({ message: error.message })
}
