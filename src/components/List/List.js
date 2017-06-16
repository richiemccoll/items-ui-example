import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Card from "../Card/Card";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 700px) {
        flex-direction: row;
        flex-flow: row wrap;
    }
`;

class List extends Component {

  render() {
    const { data, toggleForm = null } = this.props;

    return (
      <Wrapper>
        {data.map((cake, index) => {
          return (
            <Card
              key={Math.random().toString(36).slice(2)}
              id={cake.title + index}
              title={cake.title}
              image={cake.image}
              description={cake.desc}
              toggleForm={toggleForm}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default List;

List.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleForm: PropTypes.func
};
