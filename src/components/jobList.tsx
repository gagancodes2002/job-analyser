"use client";

import JobCard from "./job-card/jobCard";

interface Props {
  list: Object[];
  selectedJob: Function;
}

const JobList = (props: Props) => {
  return (
    <div>
      {props.list.length &&
        props.list.map((job: any) => {
          return (
            <JobCard
              key={job.id}
              title={job.title}
              description={job.description}
              selectedJob={props.selectedJob}
              requiredTechnicalSkills={job.requiredTechnicalSkills}
            ></JobCard>
          );
        })}
    </div>
  );
};

export default JobList;
