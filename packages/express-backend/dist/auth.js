"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentials_1 = __importDefault(require("./services/credentials"));
function generateAccessToken(username) {
    console.log("Generating token for", username);
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({ username: username }, process.env.TOKEN_SECRET || "", { expiresIn: "1d" }, (error, token) => {
            if (error)
                reject(error);
            else
                resolve(token);
        });
    });
}
function registerUser(req, res) {
    const { username, pwd } = req.body; // from form
    // console.log("Registering user", username);
    // console.log("associated password", pwd);
    if (!username || !pwd) {
        res.status(400).send("Bad request: Invalid input data.");
    }
    else {
        credentials_1.default
            .create(username, pwd)
            .then((creds) => generateAccessToken(creds.username))
            .then((token) => {
            console.log("User registered. Session info:", req.session);
            res.status(201).send({ token: token });
        });
    }
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    const { username, pwd } = req.body; // from form
    if (!username || !pwd) {
        res.status(400).send("Bad request: Invalid input data.");
    }
    else {
        credentials_1.default
            .verify(username, pwd)
            .then((goodUser) => generateAccessToken(goodUser))
            .then((token) => res.status(200).send({ token: token }))
            .catch((error) => res.status(401).send("Unauthorized"));
    }
}
exports.loginUser = loginUser;
function authenticateUser(req, res, next) {
    const authHeader = req.headers["authorization"];
    //Getting the 2nd part of the auth header (the token)
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.status(401).end();
    }
    else {
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || "", (error, decoded) => {
            if (decoded) {
                console.log("Decoded token", decoded);
                next();
            }
            else {
                res.status(401).end();
            }
        });
    }
}
exports.authenticateUser = authenticateUser;
