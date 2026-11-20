import { TaskForm } from "@/components/TaskForm";
import logo3 from "@/images/enter.png";
import logo from "@/images/List icon tile.png";
import { on } from "events";
import MyImage from "next/image";
import {useState} from "react"
import type { ChangeEvent } from "react";

<TaskForm onCreateTask={onCreateTask} />




export const TaskMain = () => {
  return (
        <form onSubmit={handleSubmit} className="max-w-[800px] h-[636px] flex justify-center items-center mt-[32px] bg-[#EAF0EB] relative overflow-hidden">
        <div className="bg-[#FFFFFF] max-w-[672px] h-[476px] rounded-[24px] pl-[32px] pr-[32px] pt-[32px]">
          <div className="flex gap-[12px]">
            <MyImage src={logo} alt="logo" width={48} height={48} />{" "}
            <p className="text-[#213D35] mt-[7px]  font-['Inter'] font-semibold text-[24px] leading-[36px] tracking-[0%]">
              My tasks.
            </p>
          </div>
          <div className="w-[608px] mt-[24px] h-[74px] rounded-[16px] bg-[#F4F8F5] border border-[#DCE9E2] border-[1px] flex justify-between items-center p-[15px]">
            <input
              value={taskTitle}
              onChange={handleChange}
              type="text"
              placeholder="What needs to get done?"
              className="text-[#75867E] font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[0%] outline-none bg-transparent"
              />
            <button type="submit" className="text-[#63796C] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0%] w-[128px] h-[48px] bg-[#D8E5DD] flex justify-center items-center rounded-[12px]">
              + Add task
            </button>
          </div>
          <div className="flex items-center gap-[6px] justify-end">
            <MyImage
              src={logo3}
              alt="logo"
              width={12}
              height={12}
              className="mt-[12px]"
              />
            <p className="mt-[12px] font-['Inter'] font-normal text-[11px] leading-[16.5px] tracking-[0%] text-[#7A8881]">
              Enter to add a task
            </p>
          </div>
          <div className="filters w-min-screen flex justify-between items-center h-[48px]">
            <div className="flex gap-[28px]">
              <div className="text-[#7B8680] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0%]">
                All
              </div>
              <div className="text-[#7B8680] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0%]">
                Active
              </div>
              <div className="text-[#7B8680] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0%]">
                Completed
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#7B8680] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0%] w-[16px] h-[25px] bg-[#F0F4F1] rounded-[3px] flex justify-center items-center">
                0
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E9EEEB]"></div>
        </div>
      </form>
    
  );
};