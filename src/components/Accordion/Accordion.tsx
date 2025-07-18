import { useContext, useState } from "react";
import Task from "../Task/Task";
import './Accordion.css'
import { useTaskContext } from "../../context/TaskContext";
import { useEditContext } from "../../context/EditContext";
interface AccordionItem {
  title: string;
  description: string;
}



export function Accordion() {
  const {containerBlock} = useEditContext()
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {tasks} = useTaskContext()
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={`${containerBlock} ${tasks.length == 0 ? "w-120 flex text-stone-400 justify-center" : "w-auto"} shadow-xl border-10 border-white outline-1 outline-gray-100 h-[500px] rounded-2xl overflow-x-hidden custom-scroll pr-4`}>
      {tasks.map((item, index) => (
            <Task key={index}  activeIndex={activeIndex} title={item.title} description={item.description} completed={item.completed} toggle={()=>{toggle(item.id)}} id={item.id} createdAt={item.creationDate == undefined ? "indefinido" : item.creationDate.toString()}/>
      ))}
      <p className={`${tasks.length == 0 ? "text-center m-10" : ""}`}>{tasks.length == 0 ? `No tasks yet. Start by creating your first one!` : ""}</p>
    </div>
  );
}
