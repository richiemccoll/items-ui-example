import React from "react";
import Form from "./Form";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";
import chai from "chai";

describe("Form Component", () => {
  const formProps = {
    action: "add",
    inEdit: null,
    handleAction() {
      return;
    }
  };

  it("should render correctly based on props", () => {
    const component = renderer.create(
      <Form action={formProps.action} handleAction={formProps.handleAction} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call handleAction", () => {
    const handleAction = sinon.spy();
    const wrapper = mount(
      <Form
        inEdit={{ title: "test", description: "test", image: "" }}
        handleAction={handleAction}
      />
    );
    wrapper.find("button").simulate("click");
    chai.expect(handleAction).to.have.property("callCount", 1);
  });
});
