import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "./getUserName.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Alice" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUserName();
    expect(result).toBe("Alice");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUserName();
    expect(result).toBeNull();
  });
});
