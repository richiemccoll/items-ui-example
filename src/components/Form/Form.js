import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import PropTypes from 'prop-types';

class FormContainer extends Component {
  state = {
    file: "",
    result: ""
  };

  handleImageChange = e => {
    e.preventDefault();
    let fileReader = new FileReader();
    let file = e.target.files[0];

    fileReader.onloadend = () => {
      this.setState({ file: file, result: fileReader.result });
    };

    fileReader.readAsDataURL(file);
  };

  render() {
    const { action, inEdit, handleAction } = this.props;
    return (
      <Form>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            ref={title => this.title = title}
            defaultValue={action === "edit" ? inEdit.title : ""}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            ref={desc => this.desc = desc}
            placeholder="Description"
            defaultValue={action === "edit" ? inEdit.description : ""}
          />
        </Form.Field>
        <Form.Field>
          <input
            id="image"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
        </Form.Field>
        <Button
          onClick={e =>
            handleAction(e, {
              id: inEdit ? inEdit.id : 0,
              title: this.title.value,
              desc: this.desc.value,
              image: this.state.result || inEdit.image || null
            })}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default FormContainer;

FormContainer.PropTypes = {
    action: PropTypes.string.isRequired,
    inEdit: PropTypes.object,
    handleAction: PropTypes.func.isRequired
}