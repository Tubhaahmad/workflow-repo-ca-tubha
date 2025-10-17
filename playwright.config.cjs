import { defineConfig, devices } from "@playwright/test";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  testDir: path.join(process.cwd(), "tests", "e2e"),
  timeout: 30 * 1000,
  use: {
    baseURL: "http://localhost:3000", // ✅ changed from 5173 → 3000
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "npx serve . --listen 3000",
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
