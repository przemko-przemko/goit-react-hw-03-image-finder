import React from "react";
import {
  SearchInput,
  SearchLabel,
  SearchForm,
  SearchButton,
  SearchBar,
} from "./Searchbar_styled";

const Searchbar = ({ getQuery }) => {

  const onSubmit = (evt) => {
    evt.preventDefault();
    const input = evt.target.querySelector("input");
    console.log(input.value);
    getQuery(input.value);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmit}>
        <SearchButton type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchButton>
        <SearchInput
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;
