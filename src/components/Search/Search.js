import React from "react";
import { PropTypes } from "prop-types";
import styled from 'styled-components';

const Search = styled.input`
    width: 80%;
    height: 2em;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
`;

class SearchBar extends React.Component {
  handleInput = e => {
    e.target.value && this.props.handleSearch(e.target.value);
  };

  render() {
    return <Search onChange={this.handleInput} placeholder="Search"/>;
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
