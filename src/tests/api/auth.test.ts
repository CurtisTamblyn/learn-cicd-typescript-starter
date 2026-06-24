import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../api/auth.js";

const person = {
  isActive: true,
  age: 32,
};

describe("api auth", () => {

    test("Get API Key from headers", () => {
        const headers = { "authorization": "ApiKey test"}
        const result = getAPIKey(headers);

        expect(result).toBe("test");
    });

    test("No API Key from headers to retrieve", () => {
        const headers = {};
        const result = getAPIKey(headers);
        expect(result).toBeNull();
    })
})

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});