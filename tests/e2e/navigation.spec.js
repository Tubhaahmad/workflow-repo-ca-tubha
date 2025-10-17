import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("user can navigate from home page to venue details", async ({
    page,
  }) => {
    await page.route("**/venues*", async (route) => {
      const mockVenues = [
        {
          id: "mock-1",
          name: "Mock Venue One",
          media: ["https://example.com/venue1.jpg"],
        },
        {
          id: "mock-2",
          name: "Mock Venue Two",
          media: ["https://example.com/venue2.jpg"],
        },
      ];
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockVenues),
      });
    });

    await page.route("**/venues/mock-1*", async (route) => {
      const mockVenueDetails = {
        id: "mock-1",
        name: "Mock Venue One",
        description: "This is a test venue",
      };
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockVenueDetails),
      });
    });

    await page.goto("/");
    await page.waitForSelector("#venue-container > *", { timeout: 10000 });
    const firstVenue = page.locator("#venue-container a").first();
    await expect(firstVenue).toBeVisible();
    await firstVenue.click();
    await expect(page.locator("h1, h2, h3")).toHaveText(/venue details/i, {
      timeout: 8000,
    });
  });
});
