import axios from "axios";
import constants from "./constants";

export const getJobListData = async (keyword: string) => {
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
  return res.data;
};
