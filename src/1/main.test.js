import {
  valuesWithSumTo2020,
  productOfArrayEntries,
  productOf2020Elements,
} from "./main";

const sampleNumbers = [1721, 979, 366, 299, 675, 1456];
const sampleNumbersProduct = 514579;
it("return the two entries that sum to 2020", () => {
  expect(valuesWithSumTo2020(sampleNumbers).sort()).toEqual([1721, 299].sort());
});

it("return the product of the array entries", () => {
  expect(productOfArrayEntries([2, 3])).toEqual(6);
  expect(productOfArrayEntries([2, 3, 4])).toEqual(24);
});

it("return corrrect product of sample array", () => {
  expect(productOf2020Elements(sampleNumbers)).toEqual(sampleNumbersProduct);
});
