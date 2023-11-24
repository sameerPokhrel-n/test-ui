import { useState } from "react";
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
} from "@/core/components/modal";
import { CheveronDownWhite } from "@/assets/images";
import { useClient } from "@/app/context/client/Provider";
import { Client } from "@/app/data/makeData";
import {
  useForm,
  UseFormRegister,
  FieldErrors,
  Controller,
  Control,
} from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
const ClientPortal = [
  { label: "Activated", value: "activated" },
  { label: "Deactivated", value: "Deactivated" },
];

const Status = [
  { value: "completed", label: "Completed" },
  { value: "inProgress", label: "In Progress" },
];

const ClientForm = ({
  register,
  errors,
  control,
}: {
  register: UseFormRegister<Client>;
  errors: FieldErrors<Client>;
  control: Control<Client, any>;
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
                  <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="full_name">Name</label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                      />
                      <span
                        className={`${
                          errors.name ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        Field is required
                      </span>
                    </div>
                    <div>
                      <label htmlFor="full_name">Email Address</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("email_address", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      <span
                        className={`${
                          errors.email_address ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        {errors.email_address?.message || "Field is required"}
                      </span>
                    </div>
                    <div>
                      <label htmlFor="full_name">Phone</label>
                      <input
                        type="text"
                        pattern="\d*"
                        maxLength={10}
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("phone", {
                          required: true,
                          minLength: {
                            value: 6,
                            message: "Phone number must be minimum of 6 digits",
                          },
                        })}
                      />
                      <span
                        className={`${
                          errors.phone ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        {errors.phone?.message || "Field is required"}
                      </span>
                    </div>
                    <div>
                      <label htmlFor="full_name">Role</label>
                      <input
                        type="text"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("role", { required: true })}
                      />
                      <span
                        className={`${
                          errors.role ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        Field is required
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="full_name">Added From</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("added_from", { required: true })}
                      />
                      <span
                        className={`${
                          errors.added_from ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        Field is required
                      </span>
                    </div>
                    <div>
                      <label htmlFor="full_name">Tags</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("tags", { required: false })}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Client Id</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("client_id", { required: false })}
                      />
                    </div>
                    <div>
                      <label htmlFor="full_name">Internal Id</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                        {...register("internal_id", { required: true })}
                      />
                      <span
                        className={`${
                          errors.internal_id ? "visible" : "invisible"
                        } text-xs text-red-500`}
                      >
                        Field is required
                      </span>
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
                <div className="md:col-span-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="full_name mb-1">Client Portal</label>

                    <Controller
                      control={control}
                      name="client_portal"
                      rules={{ required: true }}
                      render={({ field: { onChange, value, ref } }) => (
                        <Select
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused
                                ? "#7474C9 !important"
                                : "",
                              boxShadow: state.isFocused
                                ? "0 0 0 1px #7474C9 !important "
                                : "",
                              height: "2.5rem",
                              marginTop: "0.25rem",
                            }),
                          }}
                          value={
                            ClientPortal?.find(
                              (el) => el.label === value?.label
                            ) ?? ""
                          }
                          isClearable={true}
                          options={ClientPortal}
                          onChange={(selectedOption) => {
                            onChange(selectedOption);
                          }}
                        />
                      )}
                    />
                    <span
                      className={`${
                        errors.client_portal ? "visible" : "invisible"
                      } text-xs text-red-500`}
                    >
                      Field is required
                    </span>
                  </div>
                  <div>
                    <label htmlFor="full_name">Status</label>
                    <Controller
                      control={control}
                      name="status"
                      rules={{ required: true }}
                      render={({ field: { onChange, value, ref } }) => (
                        <Select
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused
                                ? "#7474C9 !important"
                                : "",
                              boxShadow: state.isFocused
                                ? "0 0 0 1px #7474C9 !important "
                                : "",
                              height: "2.5rem",
                              marginTop: "0.25rem",
                            }),
                          }}
                          value={
                            Status?.find((el) => el.label === value?.label) ??
                            ""
                          }
                          isClearable={true}
                          options={Status}
                          onChange={(selectedOption) => {
                            onChange(selectedOption);
                          }}
                        />
                      )}
                    />

                    <span
                      className={`${
                        errors.status ? "visible" : "invisible"
                      } text-xs text-red-500`}
                    >
                      Field is required
                    </span>
                  </div>
                  <div>
                    <label htmlFor="full_name">Applications</label>
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                      {...register("applications", { required: true })}
                    />
                    <span
                      className={`${
                        errors.applications ? "visible" : "invisible"
                      } text-xs text-red-500`}
                    >
                      Field is required
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="full_name">Last Updated</label>

                    <Controller
                      control={control}
                      name="last_updated"
                      rules={{ required: true }}
                      render={({ field: { onChange, value, ref } }) => (
                        <DatePicker
                          className="h-10 border mt-1 mb-1 rounded px-4 w-full bg-white focus:outline-none focus:ring-0 focus:!border-secondary focus:border-2 focus:rounded-[0.45rem] focus:shadow"
                          placeholderText="Select date"
                          onChange={(date) => onChange(date)}
                          selected={value}
                          onKeyDown={(e) => {
                            e.preventDefault();
                          }}
                          dateFormat="MM/dd/yyyy"
                        />
                      )}
                    />
                    <span
                      className={`${
                        errors.last_updated ? "visible" : "invisible"
                      } text-xs text-red-500`}
                    >
                      Field is required
                    </span>
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
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Client>();

  const { addClient } = useClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };

  const onFormSubmit = (data: Client) => {
    const { last_updated, status, client_portal, ...remData } = data;

    const date =
      new Date(data.last_updated).getMonth() +
      1 +
      "/" +
      new Date(data.last_updated).getDate() +
      "/" +
      new Date(data.last_updated).getFullYear();
    const reqData = {
      ...remData,
      last_updated: date,
      status: status?.label,
      client_portal: client_portal?.label,
    };
    addClient(reqData as Client);
    hideModal();
    reset();
  };

  return (
    <>
      <div className="h-14 py-3 w-[calc(100vw-240px)]  justify-between items-center inline-flex">
        <div
          onClick={showModal}
          className="px-3 cursor-pointer py-2 bg-primaryBlue rounded justify-start items-center gap-1.5 flex"
        >
          <button className=" text-white whitespace-nowrap text-xs font-medium font-inter leading-none ">
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
        size={`max-w-[1200px] max-h-[750px]`}
      >
        <ModalTitle className="px-8 py-4">Add Client</ModalTitle>
        <ModalContent className="text-sm text-center">
          <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
            <ClientForm register={register} errors={errors} control={control} />
            <div className="">
              <ModalFooter className="">
                <div className="flex  gap-4 items-center justify-end">
                  <button
                    onClick={hideModal}
                    className="px-4 py-1.5 bg-lightBlue hover:bg-blue-400 text-white rounded-md "
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-1.5 bg-secondary text-white rounded-md hover:bg-violet-400"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </ModalFooter>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
