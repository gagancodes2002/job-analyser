"use client";
import { useState } from "react";
import "../job-card/style.scss";
import CompanyLogo from "../images/company-logo.avif";
import Image from "next/image";


export interface Props {
  title: string;
  description: string;
  selectedJob: Function;
  requiredTechnicalSkills: string[];
}

const JobCard = (props: Props) => {
  const [isBookMarked, setBookMark] = useState(false);
  return (
    <div
      className={`flex flex-col bg-gray-700 p-4 my-2 space-y-2 max-w-sm rounded-md overflow-clip`}
    >
      <div className="flex flex-row">
        <div className="company-logo px-2 min-h-12 min-w-12 w-1/6">
          <Image
            alt="Company Logo"
            className="object-cover h-12 w-12 rounded-sm"
            src={CompanyLogo}
          ></Image>
        </div>
        <div className="description px-2 w-4/6 ">
          <span
            className="position text-[#7AB99E] cursor-pointer hover:underline "
            onClick={(e) => {
              e.preventDefault();
              props.selectedJob(props);
            }}
          >
            {props.title}
          </span>
          <p
            className="short-description text-ellipsis text-sm max-h-24 mb-2 !overflow-hidden !whitespace-nowrap"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
        </div>
        <div className="add-to-bookmark w-1/6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isBookMarked ? "white" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 float-right cursor-pointer hover:text-gray-600 focus:border-blue-400 "
            onClick={() => {
              setBookMark((old) => !old);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row float-left mt-2 max-h-8 space-x-3 sleek-scrollbar  overflow-x-scroll ">
        {props.requiredTechnicalSkills.map((skill) => {
          return (
            <div
              className="skill-tag bg-gray-600 min-w-max rounded-md px-2 py-1 text-xs"
              key={skill}
            >
              {skill}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row space-x-5 px-2">
        <div className="flex flex-row gap-2 align-baseline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 !text-orange-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 !text-orange-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 !text-orange-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
        <div className="flex flex-row justify-center gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <span>Project Verified</span>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-1 text-xs">
          <div className="text-xs">
            <span>Proposal :</span>
          </div>
          <span>10/15</span>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
