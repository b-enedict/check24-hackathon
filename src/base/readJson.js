import * as fs from "fs";

/**
 * Read a json file and return the content as an object
 * @param {string} path
 * @returns {any}
 */
export function readJson(path) {
    const fileContent = fs.readFileSync(path, 'utf8');
    return JSON.parse(fileContent);
}