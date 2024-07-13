export function handleError(message: string, error: unknown): never {
  if (error instanceof Error) {
    throw new Error(`${message} - ${error.message}`);
  }

  if (typeof error === "string") {
    throw new Error(`${message} - ${error}`);
  }

  throw new Error(`${message} - An unknown error occurred`);
}
