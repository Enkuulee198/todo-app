"use client";

import { useState } from "react";

import { TaskHeader } from "@/components/TaskHeader";
import { TaskMain } from "@/components/TaskMain";
import { TaskEmthyState } from "@/components/TaskEmptyState";

import type { Task } from "@/types";
import { log } from "console";

const HomePage = () => {
  const [tasks, setTask] = useState<Task[]>([]);

const createTask = (title: string) => {
  console.log(title);
  
};

    return (
      <div className="bg-[#F1F4F1] pl-[48px] pt-[48px] flex flex-col justify-center">
      <header>
        <TaskHeader/>
      </header>
      <main>
       <TaskMain onCreateTask={createTask} />
      </main>
      <div>
        <TaskForm/>
      </div>
      <footer>
        <TaskEmthyState/>
      </footer>
    </div>
  );
};

export default HomePage;
