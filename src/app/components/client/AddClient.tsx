import { useState } from "react";
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
} from "@/core/components/modal";
import { CheveronDownWhite } from "@/assets/images";
import { useClient } from "@/app/context/client/Provider";
import { Client } from "@/app/data/makeData";

const ClientForm = ({
  handleInputChange,
  formValue,
}: {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formValue: Client;
}) => {
  return (
    <div className="bg-white  rounded p-4 px-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-4">
          <div>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 pt-4">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Enter Client Details</p>
                <p className="text-gray-400">
                  Enter details required for client
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-4 gap-2">
                    <div>
                      <label htmlFor="full_name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="full_name"
                        onChange={handleInputChange}
                        value={formValue?.name ?? ""}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Email Address</label>
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.email_address ?? ""}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Phone</label>
                      <input
                        type="number"
                        name="phone"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.phone ?? ""}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Role</label>
                      <input
                        type="text"
                        name="role"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.role ?? ""}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-4 gap-2">
                    <div>
                      <label htmlFor="full_name">Added From</label>
                      <input
                        type="text"
                        name="added_from"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.added_from ?? ""}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Tags</label>
                      <input
                        type="text"
                        name="tags"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.tags ?? ""}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Client Id</label>
                      <input
                        type="text"
                        name="client_id"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.client_id ?? ""}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Internal Id</label>
                      <input
                        type="text"
                        name="internal_id"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                        onChange={handleInputChange}
                        value={formValue?.internal_id ?? ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 pt-4">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Enter Followers Details</p>
              <p className="text-gray-400">Enter details required for client</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-4 gap-2">
                  <div>
                    <label htmlFor="full_name">Client Portal</label>
                    <input
                      type="text"
                      name="client_portal"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                      onChange={handleInputChange}
                      value={formValue?.client_portal ?? ""}
                    />
                  </div>
                  <div>
                    <label htmlFor="full_name">Status</label>
                    <input
                      type="text"
                      name="status"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                      onChange={handleInputChange}
                      value={formValue?.status ?? ""}
                    />
                  </div>
                  <div>
                    <label htmlFor="full_name">Applications</label>
                    <input
                      type="text"
                      name="applications"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                      onChange={handleInputChange}
                      value={formValue?.applications ?? ""}
                    />
                  </div>
                  <div>
                    <label htmlFor="full_name">Last Updated</label>
                    <input
                      type="text"
                      name="last_updated"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:ring-0"
                      onChange={handleInputChange}
                      value={formValue?.last_updated ?? ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddClient = () => {
  const [formValue, setFormValue] = useState<Client | null>(null);
  const { addClient } = useClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value } as Client));
  };
  return (
    <>
      <div className="h-14 py-3 w-[calc(100vw-240px)]  justify-between items-center inline-flex">
        <div className="px-3 cursor-pointer py-2 bg-primaryBlue rounded justify-start items-center gap-1.5 flex">
          <button
            onClick={showModal}
            className=" text-white whitespace-nowrap text-xs font-medium font-inter leading-none "
          >
            New Client
          </button>
          <div className="w-5 h-5 relative">
            <img src={CheveronDownWhite} />
          </div>
        </div>
        <div className="justify-center items-center flex mr-9">
          <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-sm font-normal font-inter leading-none">
              Prospects(18)
            </div>
          </div>
          <div className="px-3 py-1 border-b border-green justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-sm font-normal font-inter leading-none">
              Clients(10)
            </div>
          </div>
          <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-sm font-normal font-inter leading-none">
              Archived(0)
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeButton={true}
        onClose={hideModal}
        size={`max-w-[1200px] max-h-[400px]`}
      >
        <ModalTitle className="px-8 py-4">Add Client</ModalTitle>
        <ModalContent className="text-sm text-center">
          <ClientForm
            handleInputChange={handleInputChange}
            formValue={formValue as Client}
          />
        </ModalContent>
        <ModalFooter className="">
          <div className="flex gap-4 items-center justify-end">
            <button
              onClick={hideModal}
              className="px-4 py-1.5 bg-lightBlue hover:bg-blue-400 text-white rounded-md "
            >
              Cancel
            </button>
            <button
              className="px-4 py-1.5 bg-secondary text-white rounded-md hover:bg-violet-300"
              onClick={() => {
                addClient(formValue as Client);
                hideModal();
                setFormValue(null);
              }}
            >
              Save
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};
