import React from "react";


export function SearchInput({ inputRef, debouncedChangeHandler }) {
  return (
    <input
      placeholder="Search for games"
      type="search"
      ref={inputRef}
      onChange={debouncedChangeHandler} />
  );
}
