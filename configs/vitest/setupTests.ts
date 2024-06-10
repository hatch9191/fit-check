import { vi } from "vitest";
import "@testing-library/jest-dom";

process.env = {
  ...process.env,
  NEXT_PUBLIC_GRAPHQL_API_BASE_URI: "http://localhost:3000/api/graphql",
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated but we need for old Safari implementations
    removeListener: vi.fn(), // deprecated but we need for old Safari implementations
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
