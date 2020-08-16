import React, { useState } from "react";
import Options from "./Options";

export default function Select({ Input, possibleResults, name }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => setQuery(event.target.value);

  const handleFocus = () => {
    setIsOpen(true);
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!isFocused) setIsOpen(false);
  };

  return (
    <div>
      <Input
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isOpen && (
        <Options
          setQuery={setQuery}
          setIsOpen={setIsOpen}
          setIsFocused={setIsFocused}
          possibleResults={possibleResults}
          query={query}
          fieldName={name}
        />
      )}
    </div>
  );
}
