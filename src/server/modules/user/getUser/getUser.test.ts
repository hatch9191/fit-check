import { vi } from "vitest";

import { createMockContext } from "@/__mocks__/server/context/createMockContext";
import { user } from "@/__mocks__/server/modules/user";
import { IGetUserQueryVariables } from "@/graphql/codegen/codegen_rq";

import { getUser } from "./getUser";

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("test-uuid"),
}));

describe(getUser.name, () => {
  const { prisma } = createMockContext();
  const args: IGetUserQueryVariables = {
    id: user.id,
  };

  it("should call the prisma query with the right args", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValue(user);

    const result = await getUser(prisma, args);

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: {
        id: args.id,
      },
    });
    expect(result).toEqual(user);
  });

  it("should handle an error", async () => {
    const errorMessage = "Something went wrong";

    vi.mocked(prisma.user.findUnique).mockRejectedValue(
      new Error(errorMessage)
    );

    await expect(getUser(prisma, args)).rejects.toThrow(
      `Could not get user - ${errorMessage}`
    );
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: {
        id: args.id,
      },
    });
  });
});
