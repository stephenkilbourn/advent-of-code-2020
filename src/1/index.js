import fs from "fs";
import path from "path";

import { productOf2020Elements } from "./main";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .map(Number);

console.log(
  "Product of values in input.txt that equaled 2020: ",
  productOf2020Elements(input)
);
