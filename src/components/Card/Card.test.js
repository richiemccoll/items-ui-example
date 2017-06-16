import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from 'sinon';
import chai from 'chai';

describe("Card Component", () => {
  const testCard = {
    id: 1,
    title: "Test Card",
    image: "",
    description: "test desc",
    toggleForm() {
      return;
    }
  };

  it("should render correctly based on props", () => {
    const component = renderer.create(
      <Card
        image={testCard.image}
        title={testCard.title}
        description={testCard.description}
        toggleForm={testCard.toggleForm}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call the toggleForm prop", () => {
    const toggleForm = sinon.spy();
    const wrapper = mount(
      <Card toggleForm={toggleForm} />
    );
    wrapper.find('button').simulate('click');
    chai.expect(toggleForm).to.have.property('callCount', 1);
  });
});
