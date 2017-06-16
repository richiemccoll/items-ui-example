import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Search from "../Search/Search";

const Container = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Item = styled.li`
    margin: .75em;
    list-style: none;
`;

const Nav = ({ toggleForm, showingForm, handleSearch }) => {
  return (
    <nav>
      <Container>
        {!showingForm && <Item><Search handleSearch={handleSearch} /></Item>}
        <Item>
          <Button basic color="blue" onClick={() => toggleForm("add")}>
            {showingForm ? "Back" : "Add new cake"}
          </Button>
        </Item>
      </Container>
    </nav>
  );
};

export default Nav;

Nav.PropTypes = {
  toggleForm: PropTypes.func,
  showingForm: PropTypes.bool,
  handleSearch: PropTypes.func
}
