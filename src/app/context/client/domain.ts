import { Client, makeData } from "@/app/data/makeData";

export const clientData = makeData(50);

type ClientContext = {
  addClient: (data: Client) => void;
  clientInitialState: Client[];
};

export const DefaultClientContext: ClientContext = {
  clientInitialState: clientData,
  addClient(): void {},
};
