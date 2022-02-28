/* eslint-disable tailwindcss/no-custom-classname */
import type { VFC } from "react";

export const StepBar: VFC = () => {
  return (
    <div className="flex py-6 mt-10 w-full">
      <div className="w-1/4">
        <div className="relative mb-2">
          <div className="absolute -top-8 w-full text-center">STEP1</div>
          <div className="flex items-center mx-auto w-10 h-10 text-lg text-white bg-blue-400 rounded-full" />
        </div>
        <div className="text-xs text-center md:text-base">Select Server</div>
      </div>

      <div className="w-1/4">
        <div className="relative mb-2">
          <div className="absolute -top-8 w-full text-center">STEP2</div>
          <div
            className="absolute w-full bg-blue-400 rounded py-[3px]"
            style={{
              width: "calc(100% - 1.2rem - 1rem)",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="flex items-center mx-auto w-10 h-10 text-lg text-white bg-blue-400 rounded-full" />
        </div>

        <div className="text-xs text-center md:text-base">Add User</div>
      </div>

      <div className="w-1/4">
        <div className="relative mb-2">
          <div className="absolute -top-8 w-full text-center">STEP3</div>
          <div
            className="absolute w-full bg-blue-400 rounded py-[3px]"
            style={{
              width: "calc(100% - 1.2rem - 1rem)",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="flex items-center mx-auto w-10 h-10 text-lg text-white bg-white rounded-full border-blue-400 border-[3px]" />
        </div>

        <div className="text-xs text-center md:text-base">Setting</div>
      </div>

      <div className="w-1/4">
        <div className="relative mb-2">
          <div className="absolute -top-8 w-full text-center">STEP4</div>
          <div
            className="absolute w-full bg-blue-400 rounded py-[3px]"
            style={{
              width: "calc(100% - 1.2rem - 1rem)",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="flex items-center mx-auto w-10 h-10 text-lg text-white bg-white rounded-full border-blue-400 border-[3px]" />
        </div>

        <div className="text-xs text-center md:text-base">Finished</div>
      </div>
    </div>
  );
};
