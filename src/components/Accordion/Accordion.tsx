import { useState } from "react";
import Task from "../Task/Task";
import './Accordion.css'
interface AccordionItem {
  title: string;
  description: string;
}

const items: AccordionItem[] = [
  {
    title: "O que é Tailwind CSS?",
    description: "Tailwind é um framework CSS utilitário para criar interfaces rapidamente."
  },
  {
    title: "Como funciona o Tailwind?",
    description: "Ele funciona aplicando classes utilitárias diretamente nos elementos HTML."
  },
  {
    title: "Por que usar Tailwind?",
    description: "Ele reduz a escrita de CSS customizado e torna o desenvolvimento mais rápido."
  },
   {
    title: "O que é Tailwind CSS?",
    description: "Tailwind é um framework CSS utilitário para criar interfaces rapidamente."
  },
  {
    title: "Como funciona o Tailwind?",
    description: "Ele funciona aplicando classes utilitárias diretamente nos elementos HTML."
  },
  {
    title: "Por que usar Tailwind?",
    description: "Ele reduz a escrita de CSS customizado e torna o desenvolvimento mais rápido."
  },
   {
    title: "O que é Tailwind CSS?",
    description: "Tailwind é um framework CSS utilitário para criar interfaces rapidamente."
  },
  {
    title: "Como funciona o Tailwind?",
    description: "Ele funciona aplicando classes utilitárias diretamente nos elementos HTML."
  },
  {
    title: "Por que usar Tailwind?",
    description: "Ele reduz a escrita de CSS customizado e torna o desenvolvimento mais rápido."
  },
   {
    title: "O que é Tailwind CSS?",
    description: "Tailwind é um framework CSS utilitário para criar interfaces rapidamente."
  },
  {
    title: "Como funciona o Tailwind?",
    description: "Ele funciona aplicando classes utilitárias diretamente nos elementos HTML."
  },
  {
    title: "Por que usar Tailwind?",
    description: "Ele reduz a escrita de CSS customizado e torna o desenvolvimento mais rápido."
  },
];

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="shadow-xl border-10 border-white h-[500px] rounded-2xl overflow-x-hidden custom-scroll pr-4">
      {items.map((item, index) => (
            <Task activeIndex={activeIndex} title={item.title} description={item.description} toggle={()=>{toggle(index)}} index={index} />
      ))}
    </div>
  );
}
