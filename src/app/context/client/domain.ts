import { Client, makeData } from "@/app/data/makeData";

export const clientData = makeData(50);

type ClientContext = {
  addClient: (data: Client) => void;
  clientInitialState: Client[];
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const DefaultClientContext: ClientContext = {
  clientInitialState: clientData,
  addClient(): void {},
  globalFilter: "",
  setGlobalFilter(): void {},
};
