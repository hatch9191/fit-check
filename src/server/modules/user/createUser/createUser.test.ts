import { vi } from "vitest";

import { createMockContext } from "../../../context/createMockContext";
import { createUser } from "./createUser";

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("test-uuid"),
}));

describe(createUser.name, () => {
  const { prisma } = createMockContext();

  it("should call the prisma query with the right args", async () => {
    const userArgs = {
      firstName: "Harry",
      lastName: "Evans",
      email: "harry.evans@fit-check.com",
    };
    const mockCreatedUser = {
      ...userArgs,
      id: "test-uuid",
      password: null,
      bio: null,
      profileName: null,
      profileImageId: null,
      createdAt: null,
      updatedAt: null,
    };

    vi.mocked(prisma.user.create).mockResolvedValue(mockCreatedUser);

    const result = await createUser(prisma, userArgs);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        id: "test-uuid",
        ...userArgs,
      },
    });
    expect(result).toEqual(mockCreatedUser);
  });
});
