import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Icons from "../assets/svg";

import { QueryClient } from "react-query";

export default function MyModal({
  file,
  isOpen,
  closeModal,
  inputRef,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
  handleInputChange,
  handleUploadClick,
}: any) {
  const queryClient = new QueryClient();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex items-center justify-between'>
                    <Dialog.Title
                      as='h3'
                      className='text-xl font-bold leading-6 text-gray-900'
                    >
                      Upload Order
                    </Dialog.Title>
                    <div
                      className='cursor-pointer'
                      role='button'
                      onClick={closeModal}
                    >
                      <Icons.CloseIcon />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #D0D5DD",
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={handleUploadClick}
                      className='flex flex-col items-center pt-24 pb-8 mt-3 cursor-pointer'
                    >
                      <input
                        type='file'
                        id='fileInput'
                        ref={inputRef}
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                        accept='.xls,.csv,.json'
                      />
                      <Icons.CloudIcon />
                      <p className='text-[#667085]'>
                        {" "}
                        <span
                          style={{
                            color: "#D10121",
                            fontWeight: 500,
                          }}
                          role='button'
                        >
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className='text-[#667085]'>
                        XLS, CSV, JSON Here (max. 800x400px)
                      </p>
                    </div>
                  </div>

                  <div className='mt-4 w-[100%]'>
                    <button
                      type='button'
                      style={{ borderRadius: "8px" }}
                      className='bg-[#F2F4F7] text-[#101828] w-[100%] p-2'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                  {file && <p>Uploaded File: {file.name}</p>}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
