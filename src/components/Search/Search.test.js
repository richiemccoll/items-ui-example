import React from "react";
import Search from "./Search";
import renderer from "react-test-renderer";

describe("Search Component", () => {
  it("should render correctly", () => {
    const component = renderer.create(<Search />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
