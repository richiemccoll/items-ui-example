import React from "react";
import Results from "./Results";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";
import chai from "chai";

const resultProps = {
  data: [
    {
      title: "test",
      description: "test",
      image: ""
    },
    {
      title: "test2",
      description: "test2",
      image: ""
    }
  ],
  clearSearch() {
    return;
  }
};

describe("Results Component", () => {
  it("should render correctly based on props", () => {
    const component = renderer.create(
      <Results
        results={resultProps.data}
        clearSearch={resultProps.clearSearch}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call clearSearch", () => {
    const clearSearch = sinon.spy();
    const wrapper = mount(
      <Results results={resultProps.data} clearSearch={clearSearch} />
    );
    wrapper.find("button").simulate("click");
    chai.expect(clearSearch).to.have.property("callCount", 1);
  });
});
