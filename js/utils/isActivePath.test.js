import { expect, describe, it } from "vitest";
import { isActivePath } from "./isActivePath.js";

describe("isActivePath", () => {
  const testCases = [
    {
      currentPath: "/about",
      href: "/about",
      expected: true,
      description: 'returns true for rooth path "/"',
    },
    {
      currentPath: "/",
      href: "/",
      expected: true,
      description: 'returns true for rooth path "/"',
    },
    {
      currentPath: "/index.html",
      href: "/",
      expected: true,
      description: 'returns true when path is "/index.html" for root href',
    },
    {
      currentPath: "products/item1",
      href: "/products",
      expected: true,
      description: "returns true when current Path includes the href",
    },
    {
      currentPath: "/contact",
      href: "/about",
      expected: false,
      description: "returns false when paths dont match",
    },
  ];

  testCases.forEach(({ currentPath, href, expected, description }) => {
    it(description, () => {
      const result = isActivePath(currentPath, href);
      expect(result).toBe(expected);
    });
  });
});
