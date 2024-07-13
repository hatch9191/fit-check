import { defineConfig } from "vitest/config";

import path from "path";

const testConfig = defineConfig({
  resolve: {
    alias: [
      {
        find: "@/atoms",
        replacement: path.resolve(__dirname, "./src/components/_atoms"),
      },
      {
        find: "@/molecules",
        replacement: path.resolve(__dirname, "./src/components/_molecules"),
      },
      {
        find: "@/organisms",
        replacement: path.resolve(__dirname, "./src/components/_organisms"),
      },
      {
        find: "@/shared",
        replacement: path.resolve(__dirname, "./src/components/_shared"),
      },
      {
        find: "@/constants",
        replacement: path.resolve(__dirname, "./src/constants"),
      },
      {
        find: "@/hooks",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
      {
        find: "@/helpers",
        replacement: path.resolve(__dirname, "./src/helpers"),
      },
      {
        find: "@/utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
      {
        find: "@/types",
        replacement: path.resolve(__dirname, "./src/types"),
      },
      {
        find: "@/graphql",
        replacement: path.resolve(__dirname, "./src/graphql"),
      },
      {
        find: "@/styles",
        replacement: path.resolve(__dirname, "./src/styles"),
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@/server",
        replacement: path.resolve(__dirname, "./src/server"),
      },
      {
        find: "@/__mocks__",
        replacement: path.resolve(__dirname, "./src/__mocks__"),
      },
    ],
  },
  test: {
    globals: true,
    clearMocks: true,
    include: ["**/*.test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: [
      "./configs/vitest/setupTests.ts",
      "./configs/vitest/setupMsw.ts",
    ],
    coverage: {
      provider: "istanbul",
      enabled: false,
      reportsDirectory: "testCoverage",
      reporter: ["json", "text", "lcov", "clover"],
      include: [
        "src/**/*.{ts,tsx,}",
        "server/**/*.{ts,}",
        "!**/stories.{tsx,}",
        "!**/*.stories.{tsx,}",
        "!**/*.d.{ts,}",
        "!**/test.{ts,tsx,}",
        "!**/spec.{ts,tsx,}",
        "!**/*.test.{ts,tsx,}",
        "!**/*.spec.{ts,tsx,}",
        "!src/**/__test__/**/*",
        "!src/**/__test__/*",
        "!src/**/__tests__/**/*",
        "!src/**/__tests__/*",
        "!src/**/__mock__/**/*",
        "!src/**/__mock__/*",
        "!src/**/__mocks__/*",
        "!src/**/__mocks__/**/*",
        "!scripts/**/*",
      ],
      exclude: ["/node_modules/", "./configs/vitest/setupTests.ts"],
    },
  },
});

export default testConfig;
