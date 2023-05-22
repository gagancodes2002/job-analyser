"use client";

import { Switch, Spacer, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ShowEditProfileModal from "../../src/components/modal/modal";
import EditForm from "../../src/components/edit-form/EditForm";
import constants from "../../src/constants";
import "./styles.scss";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { getResume, updateResume } from "@/src/api/jobsApi";
import LoadingCard from "../dashboard/loading";
import Image from "next/image";

interface Props {
  timePeriod: string;
  companyName: any;
  companyAddress: any;
  jobPosition: any;
  jobDescription: any;
}

const JobExperience = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-start ml-6">
      <div className="absolute top-5 -left-8 flex flex-col justify-center leftMarker h-full">
        <div className="absolute top-0 rounded-full border-2 border-black w-4 h-4"></div>
        <div className="absolute top-4 left-[7px] border-2 border-black h-[85%]"></div>
      </div>
      <h1 className="mt-4 font-semibold">{props.timePeriod}</h1>
      <span className="text-sm">
        {props.companyName} | {props.companyAddress}
      </span>
      <h1 className="font-bold my-2">{props.jobPosition}</h1>
      <p className="text-sm">{props.jobDescription}</p>
    </div>
  );
};

const ResumeLeftSubSection = (props: any) => {
  return (
    <div className="w-full mt-10 ml-10 flex flex-col justify-start text-gray-300 ">
      <div className="relative flex flex-col justify-start">
        <h1 className="text-md font-bold underline-elm">{props.title}</h1>
      </div>
      {props.childrenWithLabel &&
        props.childrenWithLabel.map((child: any, i: number) => (
          <div key={i} className="mt-4">
            <h2 className="text-sm font-semibold">{child.label}</h2>
            <p className="text-xs ">{child.value}</p>
          </div>
        ))}
      {props.childrenWithoutLabel &&
        props.childrenWithoutLabel.map((child: any, i: number) => (
          <div key={i} className="mt-2">
            <h2 className="text-sm font-semibold">{child}</h2>
          </div>
        ))}
    </div>
  );
};

const EditProfile = () => {
  const [openToWork, setOpenWorkStatus] = useState(false);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const queryClient = useQueryClient();
  const [updateData, setUpdateData] = useState(false);
  const {
    data: resume,
    isLoading,
    isError,
    error,
  } = useQuery("resume", getResume);

  const updateResumeMutation = useMutation(updateResume, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("resume");
    // },
  });
  const updateResumeFunction = (resume: any) => {
    resume = { ...resume };
    setUpdateData((old: Boolean) => !old);
  };

  return (
    <div className="min-w-screen">
      {isEditProfileVisible && (
        <ShowEditProfileModal
          setIsEditProfileVisible={setIsEditProfileVisible}
          Form={EditForm}
          resume={resume}
          updateResumeFunction={updateResumeFunction}
        ></ShowEditProfileModal>
      )}
      <div className="flex flex-row m-8 space-x-8 ">
        <div className="w-5/12 space-y-2 space-x-2">
          <div className="relative user-card shadow-lg">
            <div className="flex-none h-40">
              <Image
                alt="User Photo"
                className="w-full h-full object-cover rounded-t-lg"
                src="https://marketplace.canva.com/EAFB2eB7C3o/1/0/1600w/canva-yellow-and-turquoise-vintage-rainbow-desktop-wallpaper-Y4mYj0d-9S8.jpg"
              ></Image>
            </div>
            <div
              className={`userPhoto absolute top-24 left-4 p-2 rounded-full ${
                openToWork ? "bg-green-500 !shadow-green-800" : "!bg-slate-500"
              }`}
            >
              <Image
                alt="User Photo"
                className="w-24 h-24 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              ></Image>
            </div>
            <div className="!bg-white-100 rounded-b-lg p-4 flex-none">
              <div className="flex flex-row mt-8">
                <div className="w-8/12 flex flex-col">
                  <h1 className="text-gray-600 font-semibold">
                    {resume?.name}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {resume?.headline}
                  </span>
                  <span className="text-xs text-gray-400">
                    {resume?.address}
                  </span>
                  <div className="flex flex-row mt-2  gap-2 !align-middle">
                    <div>
                      <span className="py-2 text-xs text-gray-500">
                        Open To Work
                      </span>
                    </div>
                    <div>
                      <Switch
                        size={"xs"}
                        onChange={(e) => {
                          setOpenWorkStatus(e.target.checked);
                        }}
                        checked={openToWork}
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-4/12 flex flex-row space-x-6">
                  <span className="text-xs text-gray-500">
                    {resume?.university}
                  </span>
                  <div className="">
                    <Button
                      auto
                      color="primary"
                      size={"xs"}
                      onClick={() => {
                        setIsEditProfileVisible(true);
                      }}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {resume ? (
          <div className="w-7/12 rounded-md shadow-lg text-gray-700 h-[calc(100vh-100px)] overflow-y-scroll">
            <div className="resume rounded-md bg-white">
              <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-1/3 w-full flex flex-col bg-gray-700 overflow-x-clip pb-6">
                  <div
                    className={`userPhoto flex flex-row justify-center p-2 mt-8 rounded-full`}
                  >
                    <Image
                      alt="User Photo"
                      className="w-36 h-36 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    ></Image>
                  </div>
                  <ResumeLeftSubSection
                    title={"Contact"}
                    childrenWithLabel={[
                      {
                        label: "Phone",
                        value: resume.phone,
                      },
                      {
                        label: "Email",
                        value: resume.email,
                      },
                      {
                        label: "Address",
                        value: resume.address,
                      },
                    ]}
                  />
                  <ResumeLeftSubSection
                    title={"Education"}
                    childrenWithLabel={resume.educationalQualification}
                  />
                  <ResumeLeftSubSection
                    title={"Expertise"}
                    childrenWithoutLabel={resume.technicalSkills?.slice(0, 3)}
                  />
                  <ResumeLeftSubSection
                    title={"Languages"}
                    childrenWithoutLabel={["English", "Hindi"]}
                  />
                </div>
                <div className="lg:w-2/3 w-full p-6 text-gray-700">
                  <h1 className="text-2xl font-bold text-gray-600">
                    Gagan Bindoria
                  </h1>
                  <h2 className="mt-2 font-semibold">{resume.headline}</h2>
                  <p>{resume.qualifications}</p>
                  <div className="relative ExperienceSection mt-12">
                    <h1 className="text-md font-bold underline-elm-dark">
                      Experience
                    </h1>
                  </div>
                  {resume.experiences?.map((experience, i) => {
                    return (
                      <JobExperience
                        key={i}
                        timePeriod={`${experience.startDate}  ${experience.endDate}`}
                        companyName={experience.company}
                        companyAddress={experience.location}
                        jobPosition={experience.jobTitle}
                        jobDescription={experience.jobDescription}
                      ></JobExperience>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-7/12 rounded-md shadow-lg text-gray-700 h-[calc(100vh-100px)] overflow-y-scroll">
            <LoadingCard width={""}></LoadingCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
