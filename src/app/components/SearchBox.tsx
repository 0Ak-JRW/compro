"use client";

import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <form
      className="w-full max-w-xs"
      onSubmit={e => {
        e.preventDefault();
        // mock: do nothing
      }}
      autoComplete="off"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id="search"
          name="search"
          type="text"
          className="block w-full p-3 ps-10 pr-10 text-md border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D0D0D0] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="w-6 h-6 text-gray-400 dark:text-black" />
        </div>
        {query && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            tabIndex={0}
          >
            <RxCross2 className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:text-black" />
          </button>
        )}
      </div>
    </form>
  );
}