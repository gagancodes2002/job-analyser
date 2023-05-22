"use client";

import JobList from "../jobList";
import Filter from "../filter/filter";
import JobView from "../job-view/JobView";
import SearchBar from "../searchbar/SearchBar";
import ProfileCard from "../profile-card/ProfileCard";
import ProfileInfo from "../profile-view/ProfileView";
import LoadingCard from "../loading-card/loading-card";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { searchJobs } from "../../api/jobsApi";
import "./style.scss";

interface Props {}

const Dashboard = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [jobList, setJobList] = useState(Array());
  const [activeJob, setActiveJob] = useState(Object);
  const queryClient = useQueryClient();

  const handleSearch = (value: string) => {
    console.log("CHANGE VALUE");
    console.log(value);
    setSearchValue(value);
  };

  const selectedJob = (job: any) => {
    console.log("SELECTED JOB");
    console.log(job);

    setActiveJob(job);
  };

  const { data, isLoading, isError, error } = useQuery(
    ["jobs", searchValue],
    () => searchJobs(searchValue)
  );

  useEffect(() => {
    if (data) {
      setActiveJob(data[0]);
      setJobList(data);
    }
  }, [data]);

  return (
    <div className="flex md:flex-row sm:flex-wrap space-x-2 m-4 justify-around bg-[#F3F3F3]">
      <div className={"w-3.5/12 space-y-4"}>
        <Filter></Filter>
        <div className="overflow-y-scroll max-h-[36rem] sleek-scrollbar">
          {isLoading ? (
            <LoadingCard />
          ) : (
            <JobList list={jobList} selectedJob={selectedJob}></JobList>
          )}
        </div>
      </div>
      <div className="middleView w-6/12 h-scren space-y-2">
        <SearchBar setSearchValue={handleSearch}></SearchBar>
        <JobView {...activeJob}></JobView>
      </div>

      <div className="profile flex-col space-y-3 w-2.5/12">
        <ProfileCard></ProfileCard>
        <ProfileInfo></ProfileInfo>
      </div>
    </div>
  );
};

export default Dashboard;
