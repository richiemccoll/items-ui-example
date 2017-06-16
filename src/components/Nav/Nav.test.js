import React from "react";
import Nav from "./Nav";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";
import chai from "chai";

describe("Nav Component", () => {
  const navTest = {
    showingForm: false,
    toggleForm() {
      return;
    },
    handleSearch() {
      return;
    }
  };

  it("should render correctly based on props", () => {
    const component = renderer.create(
      <Nav
        toggleForm={navTest.toggleForm}
        showingForm={navTest.showingForm}
        handleSearch={navTest.handleSearch}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not show search if form is active", () => {
    const wrapper = mount(<Nav showingForm="true" />);
    chai.expect(wrapper.find("#search").length).to.equal(0);
  });

  it("should show the search if form is not active", () => {
    const wrapper = mount(<Nav showingForm="false" />);
    chai.expect(wrapper.find("#search").length).to.equal(0);
  });

  it("should call toggleForm", () => {
    const toggleForm = sinon.spy();
    const wrapper = mount(
      <Nav toggleForm={toggleForm} showingForm={navTest.showingForm} />
    );
    wrapper.find("button").simulate("click");
    chai.expect(toggleForm).to.have.property("callCount", 1);
  });
});
