import { Client } from "@/app/data/makeData";
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { Action, ActionType, ClientReducer } from "./reducer";
import { DefaultClientContext } from "./domain";

export const ClientContext = createContext(DefaultClientContext);

export const Provider = ({ children }: { children?: ReactNode }) => {
  const initialState = DefaultClientContext.clientInitialState;
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [clientInitialState, dispatch] = useReducer<
    React.Reducer<Client[], Action>
  >(ClientReducer, initialState);

  const addClient = (data: Client) => {
    dispatch({
      type: ActionType.ADD_CLIENT,
      payload: { data },
    });
  };

  return (
    <ClientContext.Provider
      value={{
        clientInitialState,
        addClient,
        globalFilter,
        setGlobalFilter,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export function useClient() {
  return useContext(ClientContext);
}

export default Provider;
