export const ensureString = (key: string, string?: string): string => {
  if (!string) {
    throw new Error(`${key} does not exist or is empty`);
  }

  return string;
};
