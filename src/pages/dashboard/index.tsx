import { AddClient } from "@/app/components/client/AddClient";
import { Filters } from "@/app/components/client/Filters";
import { ClientTable } from "@/app/components/table/ClientTable";

export const Dashboard = () => {
  return (
    <div className="flex flex-col  gap-2 px-6">
      <Filters />
      <AddClient />
      <ClientTable />
    </div>
  );
};
