import { PinkyPromise } from "../src";
import { describe, expect, it } from "vitest";

// Write a test suite for the PinkyPromise (its just a promise)
describe("PinkyPromise", () => {
  it("should resolve", async () => {
    const promise = new PinkyPromise((resolve) => {
      resolve("Hello World");
    });

    const result = await promise;
    expect(result).toBe("Hello World");
  });

  it("should reject", async () => {
    const promise = new PinkyPromise((resolve, reject) => {
      reject("Hello World");
    });

    try {
      await promise;
    } catch (err) {
      expect(err).toBe("Hello World");
    }
  });

  it("should break your pinky if you don't use it", async () => {
    const promise = new PinkyPromise((resolve) => {
      resolve("This promise is legally binding");
    });

    const result = await promise;
    expect(result).toBe("This promise is legally binding");
  });
});
