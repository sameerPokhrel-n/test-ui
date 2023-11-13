import { Client } from "@/app/data/makeData";

export enum ActionType {
  ADD_CLIENT,
}

export type Action = {
  type: ActionType.ADD_CLIENT;
  payload: {
    data: Client;
  };
};

export const ClientReducer = (state: Client[], action: Action): Client[] => {
  switch (action.type) {
    case ActionType.ADD_CLIENT: {
      const { data } = action.payload;
      return [...state, data];
    }
  }
};
