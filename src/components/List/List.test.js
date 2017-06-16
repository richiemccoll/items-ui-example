import React from "react";
import List from "./List";
import renderer from "react-test-renderer";

describe("List Component", () => {
  const listProps = {
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
    toggleForm() {
      return;
    }
  };

  it("should render correctly based on props", () => {
    const component = renderer.create(
      <List data={listProps.data} toggleForm={listProps.toggleForm} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
