import { getResume } from "@/src/api/jobsApi";
import constants from "@/src/constants";
import { Button, Dropdown } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useQueryClient, useQuery, QueryCache } from "react-query";

interface Props {
  resume: any;
  updateResumeFunction : Function;
}

const EditForm = (props: Props) => {
  const [addPositionData, setAddPositionData] = useState("");

  const [formData, setFormData] = useState(props.resume);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...resume, [name]: value });
  };

  const [positions, setPositions] = useState([
    "Software Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
  ]);

  const { isLoading, isError, data: resume } = useQuery(["resume"], getResume);
  const queryClient = useQueryClient();

  // const {
  //   data: resume,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery("resume", getResume, {
  //   cache: queryCache,
  // });

  // const queryClient = useQueryClient();
  // const {
  //   data: resume,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery("resume", getResume);

  // useEffect(() => {
  //   if (resume) {
  //     queryClient.setQueryData("resume", resume);
  //     console.log("Resume");
  //     console.log(resume);
  //   }
  // }, [resume]);

  const saveData = async (formData: any) => {
    console.log("Save Data");
    console.log(formData);
    queryClient.setQueriesData(["resume"], formData);
    props.updateResumeFunction(formData);
  };

  return (
    <div
      className="flex flex-row mx-auto p-5 w-4/4 bg-gray-100 rounded-md"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <form className="relative w-100 space-y-2">
        <div className="flex flex-col">
          <label className="text-gray-500 text-xs font-semibold">
            First Name
          </label>
          <input
            className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            defaultValue={resume?.firstName}
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 text-xs font-semibold">
            Last Name
          </label>
          <input
            className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            defaultValue={resume?.lastName}
          ></input>
        </div>
        <div className="flex flex-row w-100">
          <div className="flex flex-col justify-start">
            <label className="text-gray-500 text-xs font-semibold">
              Current Position
            </label>
            <select
              className="border-2 text-xs text-gray-500  border-gray-300 rounded-md p-1"
              placeholder="Current Position"
              name="headline"
              defaultValue={resume?.headline}
              value={formData.headline}
              onChange={handleInputChange}
            >
              {positions.map((position) => (
                <option className="text-gray-500 rounded-md" value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ml-6">
            <label className="text-gray-500 text-xs font-semibold">
              Add Position
            </label>
            <div className="flex flex-row space-x-2">
              <input
                className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
                type="text"
                placeholder="Add Position"
                value={addPositionData}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddPositionData(e.target.value);
                }}
              ></input>
              <button
                className="bg-gray-300 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  if (addPositionData === "") return;
                  setAddPositionData("");
                  setPositions([...positions, addPositionData]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 text-xs font-semibold">
            Headline
          </label>
          <input
            className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
            type="text"
            name="headline"
            placeholder="Headline"
            defaultValue={resume?.headline}
            value={formData?.headline}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 text-xs font-semibold">
            Location
          </label>
          <div className="flex flex-col mt-2">
            <label className="text-gray-500 text-xs font-semibold">
              Country
            </label>
            <input
              className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
              type="text"
              placeholder="Country"
              name="country"
              value={formData.country}
              defaultValue={resume?.country}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-gray-500 text-xs font-semibold">City</label>
            <input
              className="border-2 text-xs text-gray-600 border-gray-300 rounded-md p-1"
              type="text"
              placeholder="City"
              name="city"
              defaultValue={resume?.city}
              value={formData.city}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="flex flex-col w-100 mt-2">
            <button
              className=" w-16 h-8 bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                setFormData({
                  ...formData,
                });
                saveData(formData);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
