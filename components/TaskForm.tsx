import trash from "@/images/trash.png"

type TaskMain = {
  onCreateTask: (title: string) => void;
};

export const TaskMain = ({ onCreateTask }: TaskMain) => {
  const [taskTitle, setTaskTitle] = useState("");
};


      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
      };


      const handleSubmit = () => (
    onCreateTask("sdasd")
)

return (
 <form>
    <div className="w-[632px] h-[60px] rounded-[12px] bg-[#FFFFFF]">
        <button className="w-[22px] h-[22px] rounded-[50%] bg-[#FFFFFF] border border-[1px] border-[#BDCDC2]"></button>
        <div className="text-[#30483C] font-['Inter'] font-medium text-[14px] leading-[21px] tracking-[0%]">Prepare tomorrow’s lesson</div>
        <button className="w-[44px] h-[44px]">
            <img src={trash} alt="trash" />
        </button>
    </div>
 </form>   
)