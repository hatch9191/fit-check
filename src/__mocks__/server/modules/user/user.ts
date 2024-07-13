import { User } from "@prisma/client";

export const user: User = {
  firstName: "Harry",
  lastName: "Evans",
  email: "harry.evans@fit-check.com",
  id: "test-uuid",
  password: null,
  bio: null,
  profileName: null,
  profileImageId: null,
  createdAt: new Date("2024-07-13T13:03:59.572Z"),
  updatedAt: new Date("2024-07-13T13:03:59.572Z"),
};
