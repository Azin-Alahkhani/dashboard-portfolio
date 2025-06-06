import { faker } from "@faker-js/faker";

export const users = Array.from({ length: 20 }).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  date: faker.date.recent().toLocaleDateString(),
  amount: `$${(Number(faker.finance.amount()) * (5000 - 100) + 100).toFixed(
    2
  )}`,
}));
