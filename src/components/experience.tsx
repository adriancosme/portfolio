import Job from "./job";
import { Job as IJob } from "../interfaces/job.interface";
interface ExperienceProps {
  data: IJob[];
}
const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <ol className="relative col-span-12">
        {data?.map((job, index) => {
          return (
            <Job
              key={index}
              position={job.position}
              period={job.period}
              company={job.company}
              websiteCompany={job.websiteCompany}
              shortDescription={job.shortDescription}
              archivements={job.archivements}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Experience;
