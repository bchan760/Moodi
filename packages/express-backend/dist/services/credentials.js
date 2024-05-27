"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.checkExists = exports.verify = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const credential_1 = __importDefault(require("../mongo/credential"));
function verify(username, password) {
    return new Promise((resolve, reject) => {
        credential_1.default
            .find({ username })
            .then((found) => {
            if (found && found.length === 1)
                return found[0];
            else
                reject("Invalid username or password");
        })
            .then((credsOnFile) => {
            if (credsOnFile)
                bcryptjs_1.default.compare(password, credsOnFile.hashedPassword, (_, result) => {
                    console.log("Verified", result, credsOnFile.username);
                    if (result)
                        resolve(credsOnFile.username);
                    else
                        reject("Invalid username or password");
                });
            else
                reject("Invalid username or password");
        });
    });
}
exports.verify = verify;
function checkExists(username) {
    return new Promise((resolve, reject) => {
        credential_1.default
            .find({ username })
            .then((found) => resolve(found && found.length > 0));
    });
}
exports.checkExists = checkExists;
function create(username, password) {
    return new Promise((resolve, reject) => {
        if (!username || !password) {
            reject("must provide username and password");
        }
        credential_1.default
            .find({ username })
            .then((found) => {
            if (found.length)
                reject("username exists");
        })
            .then(() => bcryptjs_1.default
            .genSalt(10)
            .then((salt) => bcryptjs_1.default.hash(password, salt))
            .then((hashedPassword) => {
            const creds = new credential_1.default({
                username,
                hashedPassword
            });
            creds.save().then((created) => {
                if (created)
                    resolve(created);
            });
        }));
    });
}
exports.create = create;
exports.default = { checkExists, create, verify };
