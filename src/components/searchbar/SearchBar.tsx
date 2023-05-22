"use client";

import { useEffect, useState } from "react";

const optionList = [
  { value: "ux-developer", label: "UX Developer" },
  { value: "ui-designer", label: "UI Designer" },
  { value: "designer", label: "Designer" },
  { value: "marketing", label: "Marketing" },
  { value: "react-developer", label: "React Developer" },
];

export interface Props {
  setSearchValue: Function;
}

const SearchBar = (props: Props) => {
  const [suggestions, setSuggestionKeywords] = useState(Array());
  const [selectedKeywords, setSelectedKeywords] = useState(Array());
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (evt: any) => {
    let value = evt.target.value;
    let label = evt.target.label;
    if (value.length > 0) {
      setSelectedKeywords([...selectedKeywords, { value, label }]);
      setSuggestionKeywords(Array());
    }
    props.setSearchValue(value);
    setSearchValue("");
  };

  const searchBarKeyHandler = (evt: any) => {
    if (evt.keyCode === 8) {
      setSelectedKeywords(new Array());
    }
  };

  const handleInput = (evt: any) => {
    let value = evt.target.value;
    if (value.length > 0) {
      setSuggestionKeywords(
        optionList.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      selectedKeywords.length > 0
        ? props.setSearchValue(selectedKeywords[0].value)
        : props.setSearchValue("");
      setSuggestionKeywords(Array());
    }
    setSearchValue(value);
  };

  useEffect(() => {
    console.log("USE EFFECT CALLED");
    console.log(selectedKeywords);
  }, [selectedKeywords]);

  return (
    <div className="searchBar relative ">
      <div className="inputBar">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Roles"
          required
          value={searchValue}
          onChange={handleInput}
          onKeyDown={searchBarKeyHandler}
        ></input>
        <div className="selectedKeywords absolute top-0">
          {selectedKeywords.length > 0 &&
            selectedKeywords.map((option: any, i: number) => (
              <div
                key={i}
                className="tag p-2 m-2 rounded-md !bg-slate-400 text-xs text-gray-800 font-bold"
                onClick={() => {
                  setSelectedKeywords(
                    selectedKeywords.filter(
                      (keyword) => keyword.value !== option.value
                    )
                  );
                }}
              >
                {option.label}
              </div>
            ))}
        </div>
        <button
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            selectedKeywords.map((keyword) => {
              props.setSearchValue(keyword.value);
            });
            props.setSearchValue(searchValue);
            setSelectedKeywords(Array());
            setSuggestionKeywords(Array());
          }}
        >
          Search
        </button>
      </div>
      <div className="absolute top-12 z-10 bg-gray-700 flex flex-col flex-wrap float-left rounded-b-md">
        {suggestions.length > 0 &&
          suggestions.map((option, i: number) => (
            <div
              key={i}
              className="tag p-2 m-2 rounded-md !bg-slate-400 text-xs text-gray-800 font-bold"
              onClick={() => {
                handleSelect({
                  target: { value: option.value, label: option.label },
                });
              }}
            >
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchBar;
