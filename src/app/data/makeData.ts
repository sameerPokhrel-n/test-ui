import { faker } from "@faker-js/faker";

export interface Client {
  name: string;
  role: "Interlace Studies pty";
  email_address: string;
  added_from: "System";
  tags: "-";
  client_id: string;
  internal_id: string;
  phone: string;
  client_portal: "Deactivated" | "Activated";
  followers:
    | "Allison"
    | "Maria"
    | "Makenna"
    | "Ashlynn"
    | "Glana"
    | "Marcus"
    | "Marcus"
    | "Livia"
    | "Kaylynn";
  status: "Completed" | "In Progress";
  applications: number;
  last_updated: string;
}

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newClient = (): Client => {
  return {
    name: faker.person.fullName(),
    email_address: faker.internet.email(),
    role: faker.helpers.arrayElement(["Interlace Studies pty"]),
    added_from: faker.helpers.arrayElement(["System"]),
    tags: "-",
    internal_id: "ID296",
    phone: "+9779867****",
    last_updated: faker.date.past().toLocaleDateString(),
    client_portal: faker.helpers.arrayElement(["Deactivated", "Activated"]),
    followers: faker.helpers.arrayElement([
      "Allison",
      "Maria",
      "Makenna",
      "Ashlynn",
      "Glana",
      "Marcus",
      "Marcus",
      "Livia",
      "Kaylynn",
    ]),
    applications: faker.number.int({ min: 1, max: 10 }),
    status: faker.helpers.arrayElement(["Completed", "In Progress"]),
    client_id: "-",
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Client[] => {
    const len = lens[depth]!;
    return range(len).map((_): Client => {
      return {
        ...newClient(),
      };
    });
  };

  return makeDataLevel();
}
