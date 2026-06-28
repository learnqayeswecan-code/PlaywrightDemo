// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is used */
  forbidOnly: !!process.env.CI,

  /* Retry on CI */
  retries: process.env.CI ? 2 : 0,

  /* CI workers */
  workers: process.env.CI ? 1 : undefined,


  /*
   * Generate Jenkins compatible HTML report
   */
  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],


  /*
   * Shared settings
   */
  use: {

    /*
     * Collect trace
     */
    trace: 'on',

    /*
     * Capture screenshot
     */
    screenshot: 'only-on-failure',

    /*
     * Record video
     */
    video: 'retain-on-failure',

  },


  /*
   * Browser projects
   */
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],


});
