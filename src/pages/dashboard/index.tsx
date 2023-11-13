import { AddClient } from "@/app/components/client/AddClient";
import { Filters } from "@/app/components/client/Filters";
import { ClientTable } from "@/app/components/table/ClientTable";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 px-6">
      <Filters />
      <div className="border-b-2 border-violet-50 w-full -mt-[2.5]"></div>
      <AddClient />
      <ClientTable />
    </div>
  );
};
