// src/index.ts
import profiles from "./profiles";
import { Profile } from "./models/profile";
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connect("cluster0");

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

// gets all profiles
app.get("/api/profiles", (req: Request, res: Response) => {
  profiles
    .index()
    .then((profiles: Profile[]) => res.json(profiles))
    .catch((err) => res.status(404).send(err));
});


// gets specific profile
app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});