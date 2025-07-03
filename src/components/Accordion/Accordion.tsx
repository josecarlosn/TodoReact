import { useContext, useState } from "react";
import Task from "../Task/Task";
import './Accordion.css'
import { useTaskContext } from "../../Context/TaskContext";
interface AccordionItem {
  title: string;
  description: string;
}



export function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {tasks} = useTaskContext()
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="shadow-xl border-10 border-white h-[500px] rounded-2xl overflow-x-hidden custom-scroll pr-4">
      {tasks.map((item, index) => (
            <Task key={index}  activeIndex={activeIndex} title={item.title} description={item.description} toggle={()=>{toggle(index)}} id={item.id} />
      ))}
    </div>
  );
}
