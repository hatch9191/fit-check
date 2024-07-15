import { vi } from "vitest";

import { createMockContext } from "@/__mocks__/server/context/createMockContext";
import { user } from "@/__mocks__/server/modules/user";
import { IMutationCreateUserArgs } from "@/graphql/codegen/codegen_rq";

import { createUser } from "./createUser";

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("test-uuid"),
}));

describe(createUser.name, () => {
  const { prisma } = createMockContext();
  const args: IMutationCreateUserArgs = {
    email: user.email,
    password: user.password as string,
  };

  it("should call the prisma query with the right args", async () => {
    vi.mocked(prisma.user.create).mockResolvedValue(user);

    const result = await createUser(prisma, args);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        id: "test-uuid",
        ...args,
      },
    });
    expect(result).toEqual(user);
  });

  it("should handle an error", async () => {
    const errorMessage = "Something went wrong";

    vi.mocked(prisma.user.create).mockRejectedValue(new Error(errorMessage));

    await expect(createUser(prisma, args)).rejects.toThrow(
      `Could not create user - ${errorMessage}`
    );

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        id: "test-uuid",
        ...args,
      },
    });
  });
});
