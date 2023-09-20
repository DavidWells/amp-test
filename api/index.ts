import { http } from "@ampt/sdk";
import express, { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const api = express();

const router = Router();

router.get(
  "/healthcheck",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.json({ status: "ok" });
  })
);

api.use("/api", router);

api.use(async (req, res) => {
  if (req.accepts("html")) {
    // Single-page-app support: return index.html for all other HTML requests
    // this returns the app for any path that does not have a defined route
    const stream = await http.node.readStaticFile("index.html");
    res.status(200).type("html");
    stream?.pipe(res);
  } else if (req.accepts("json")) {
    res.status(404).json({ message: "Not found" });
  } else if (req.accepts("txt")) {
    res.status(404).type("txt").send("Not found");
  } else {
    res.status(404).end();
  }
});

http.node.use(api);
