import Image from "next/image";
import { ReactElement } from "react";
import { ExperienceType } from "@/types/experience";

interface Props {
  experience: ExperienceType;
}

export default function ExperienceItem(props: Props): ReactElement {
  const experience = props.experience;

  return (
    <div className="flex items-start lg:gap-x-6 gap-x4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">
      <a
        href={experience.url}
        className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
      >
        <Image
          src={experience.logo}
          className="object-cover"
          alt={`${experience.name} logo`}
          fill
        />
      </a>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold">{experience.name}</h3>
        <p>{experience.title}</p>
        <small className="text-sm text-zinc-300 mt-2 tracking-widest uppercase">
          {experience.startDate.toString()} - {experience.endDate.toString()}
        </small>
        <p className="text-base text-zinc-200 my-4">{experience.description}</p>
      </div>
    </div>
  );
}