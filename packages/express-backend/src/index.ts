import express, { Request, Response } from "express";
import * as path from "path";
import { PathLike } from "node:fs";
import fs from "node:fs/promises";
import { connect } from "./mongoConnect";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";
import websockets from "./websockets";

connect("cluster0");

const app = express();
const port = process.env.PORT || 3000;

const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}

console.log(`Serving ${frontend} from`, dist);

if (dist) app.use(express.static(dist.toString()));


app.use(express.raw({ type: "image/*", limit: "32Mb" }));
app.use(express.json({ limit: "500kb" }));

app.post("/login", loginUser);
app.post("/signup", registerUser);

app.use("/api", apiRouter);

app.use("/stats", (req, res) => {
  res.send(
    `<h1>App is Up!</h1>
      <dl><dt>Working Directory</dt><dd>${cwd}</dd>
      <dt>Frontend dist</dt><dd>${dist}</dd>
      <dt>HTML served</dt><dd>${indexHtml}</dd></dl>
    `
  );
});

// SPA route; always returns index.html
app.use("/app", (req, res) => {
  if (!indexHtml) {
    res
      .status(404)
      .send(
        `Not found; ${frontend} not available, running in ${cwd}`
      );
  } else {
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
      res.send(html)
    );
  }
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

websockets(server);

// // gets all profiles
// app.get("/api/profiles", (req: Request, res: Response) => {
//   profiles
//     .index()
//     .then((profiles: Profile[]) => res.json(profiles))
//     .catch((err) => res.status(404).send(err));
// });


// // gets specific profile
// app.get("/api/profiles/:userid", (req: Request, res: Response) => {
//   const { userid } = req.params;

//   profiles
//     .get(userid)
//     .then((profile: Profile) => res.json(profile))
//     .catch((err) => res.status(404).end());
// });

// app.post("/api/profiles", (req: Request, res: Response) => {
//   const newProfile = req.body;

//   profiles
//     .create(newProfile)
//     .then((profile: Profile) => res.status(201).send(profile))
//     .catch((err) => res.status(500).send(err));
// });

// app.put("/api/profiles/:userid", (req: Request, res: Response) => {
//   const { userid } = req.params;
//   const newProfile = req.body;

//   profiles
//     .update(userid, newProfile)
//     .then((profile: Profile) => res.json(profile))
//     .catch((err) => res.status(404).end());
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });