"use client";

import { useState } from "react";

const Filter = (props: any) => {
  const [currentFilter, setCurrentFilter] = useState("best-matches");

  const handleFilterToggle = (filterValue: string) => {
    console.log(filterValue);
    setCurrentFilter(filterValue);
  };

  const getClassNameForFilterTag = (filterKey: string) => {
    let className =
      "cursor-pointer rounded-md shadow-lg w-1/3 p-2 text-center hover:bg-[#000000] hover:text-[#A2A2A2]";
    if (currentFilter === filterKey) {
      className =
        "cursor-pointer rounded-md shadow-lg w-1/3 p-2 text-center bg-[#000000]";
    }
    return className;
  };

  return (
    <div className="flex flex-row justify-evenly max-w-sm text-gray-500">
      <div
        className={getClassNameForFilterTag("best-matches")}
        onClick={(evt) => {
          handleFilterToggle("best-matches");
        }}
      >
        Best Matches
      </div>
      <div
        className={getClassNameForFilterTag("featured")}
        onClick={(evt) => {
          handleFilterToggle("featured");
        }}
      >
        Featured
      </div>
      <div
        className={getClassNameForFilterTag("most-recent")}
        onClick={(evt) => {
          handleFilterToggle("most-recent");
        }}
      >
        Most Recent
      </div>
    </div>
  );
};
export default Filter;
