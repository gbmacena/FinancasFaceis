import { User } from "@prisma/client";

export const userDto = (user: User) => {
  return {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
  };
};
