import constants from "../constants";
import axios from "axios";

export const jobs = async () => {
  const options = {
    method: "GET",
    url: "https://job-opening-analyzer.p.rapidapi.com/jobs",
    params: {
      keyword: "React Developer",
    },
    headers: {
      "X-RapidAPI-Key": constants.rapidApiKey,
      "X-RapidAPI-Host": constants.rapidApiKeyHost,
    },
  };

  const res = await axios.request(options);
  if (res.status !== 200) {
    throw new Error("Failed to fetch the job data");
  }
  console.log(res.data);
  return res.data;
};

export const searchJobs = async (keyword: string) => {
  const options = {
    method: "GET",
    url: "https://job-opening-analyzer.p.rapidapi.com/jobs",
    params: {
      keyword: keyword,
    },
    headers: {
      "X-RapidAPI-Key": constants.rapidApiKey,
      "X-RapidAPI-Host": constants.rapidApiKeyHost,
    },
  };

  const res = await axios.request(options);
  if (res.status !== 200) {
    throw new Error("Failed to fetch the job data");
  }
  console.log(res.data);
  return res.data;
};

export const getResume = async () => {
  return constants.resumeObject;
};

export const updateResume = async (resume: any) => {
  constants.resumeObject = resume;
};
