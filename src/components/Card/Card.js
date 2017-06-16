import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button, Header } from "semantic-ui-react";

const Container = styled.div`
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Open Sans', sans-serif;
    margin: .5em;
    padding: .5em;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 255px;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    padding: 0 .5em 0 .5em;
`;

const Card = ({ id, title, image, description, toggleForm }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Header as="h2">
          {title}
        </Header>
        <Header as="h3">
          {description}
        </Header>
        {toggleForm &&
          <Button
            basic
            color="green"
            onClick={() =>
              toggleForm("edit", { id, title, image, description })}
          >
            Edit
          </Button>}
      </Content>
    </Container>
  );
};

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toggleForm: PropTypes.func
};

export default Card;
