import { vi } from "vitest";

import { createMockContext } from "@/__mocks__/server/context/createMockContext";
import { user } from "@/__mocks__/server/modules/user";
import { IGetUserByEmailQueryVariables } from "@/graphql/codegen/codegen_rq";

import { getUserByEmail } from "./getUserByEmail";

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("test-uuid"),
}));

describe(getUserByEmail.name, () => {
  const { prisma } = createMockContext();
  const args: IGetUserByEmailQueryVariables = {
    email: user.email,
  };

  it("should call the prisma query with the right args", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValue(user);

    const result = await getUserByEmail(prisma, args);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: {
        email: args.email,
      },
    });
    expect(result).toEqual(user);
  });

  it("should handle an error", async () => {
    const errorMessage = "Something went wrong";

    vi.mocked(prisma.user.findUnique).mockRejectedValue(
      new Error(errorMessage)
    );

    await expect(getUserByEmail(prisma, args)).rejects.toThrow(
      `Could not get user - ${errorMessage}`
    );
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: {
        email: args.email,
      },
    });
  });
});
