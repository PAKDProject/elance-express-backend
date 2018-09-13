import { Router } from "express";
export interface BaseRouter {
    basePath: string;
    returnRouter(): Router;
}
