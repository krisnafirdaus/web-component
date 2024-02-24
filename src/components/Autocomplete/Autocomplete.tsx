// src/components/Autocomplete/Autocomplete.tsx
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './styles.css';
import { AutocompleteProps } from './types'

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    setFilteredSuggestions([]);
    setInput(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = () => {
    // Implement keyboard navigation
  };

  const onBlur = () => {
    // Optionally close suggestions list when the input loses focus
    setShowSuggestions(false);
  };

  const SuggestionsListComponent: React.FC = () => {
    if (showSuggestions && input) {
      if (filteredSuggestions.length) {
        return (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;
              if (index === activeSuggestionIndex) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return <></>;
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        value={input}
      />
      <SuggestionsListComponent />
    </div>
  );
};

export default Autocomplete;
