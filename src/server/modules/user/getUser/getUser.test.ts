import { vi } from "vitest";

import { getUser } from "./getUser";

import { createMockContext } from "../../../context/createMockContext";

vi.mock("uuid", () => ({
  v4: vi.fn().mockReturnValue("test-uuid"),
}));

describe(getUser.name, () => {
  const { prisma } = createMockContext();

  it("should call the prisma query with the right args", async () => {
    const mockUser = {
      firstName: "Harry",
      lastName: "Evans",
      email: "harry.evans@fit-check.com",
      id: "test-uuid",
      password: null,
      bio: null,
      profileName: null,
      profileImageId: null,
      createdAt: null,
      updatedAt: null,
    };

    vi.mocked(prisma.user.findFirst).mockResolvedValue(mockUser);

    const result = await getUser(prisma);

    expect(prisma.user.findFirst).toHaveBeenCalledWith();
    expect(result).toEqual(mockUser);
  });
});
