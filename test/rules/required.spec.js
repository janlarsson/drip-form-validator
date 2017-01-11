/* eslint-disable no-undefined */
import assert from "power-assert";
import { makeRuleTester } from "../../src/";

const tester = makeRuleTester(assert, "required");


describe("Rules#required", () => {
  it("Should be return true", () => {
    tester([
      "test",
      ["hoge"],
      { key: "value" },
      1.2,
      0,
      0.0,
      -90.2,
      "0",
      new Date()
    ], true);
  });

  it("Should be return false", () => {
    tester([
      null,
      undefined,
      {},
      [[], true],
      ""
    ], false);
  });
});