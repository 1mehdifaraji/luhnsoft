import { it, describe, expect } from "vitest";
import validate from "../dist/index";

describe("Testing all input formats", () => {
  it("Number", () => expect(validate(350925373330384)).toBe(true));
  it("String", () => expect(validate("4556737586899855")).toBe(true));
  it("Arabic or Persian string", () =>
    expect(validate("۴۵۵۶۷۳۷۵۸۶۸۹۹۸۵۵")).toBe(true));
  it("String with extra characters", () =>
    expect(validate("۴۵ ۵۶^%$۷۳۷۵*۸۶۸۹-۹۸۵.۵   ")).toBe(true));
});

describe("Testing IMEI serial number", () => {
  it("iPhone 15 pro max IMEI 1", () =>
    expect(validate(356303480230505)).toBe(true));
  it("Galaxy s23 fe IMEI 1 & 2", () => {
    expect(validate(350925373330384)).toBe(true);
    expect(validate(350925374670531)).toBe(true);
    expect(validate(6219861967188722)).toBe(true);
  });
});

describe("Random digits", () => {
  it("Random digits should be false", () => {
    expect(validate(123456789)).toBe(false);
    expect(validate(876324)).toBe(false);
  });
});

describe("Testing credit cards", () => {
  it("Australian credit card", () =>
    expect(validate(5610591081018250)).toBe(true));
  it("MasterCard", () => expect(validate(5105105105105100)).toBe(true));
  it("Visa", () => expect(validate(4111111111111111)).toBe(true));
});
