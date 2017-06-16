import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import fetchData from "./API/API";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import FormContainer from "./components/Form/Form";
import Results from "./components/Results/Results";

class App extends Component {
  state = {
    showingForm: false,
    loading: true,
    action: "",
    editing: "",
    searchResults: "",
    showingSearch: false,
    noResults: false,
    cakes: []
  };

  componentDidMount() {
    const data = fetchData();
    data.then(cakes => this.setState({ cakes: cakes, loading: false }));
  }

  toggleForm = (action, cake) => {
    action === "add"
      ? this.setState({ showingForm: !this.state.showingForm, action: action })
      : this.setState({
          showingForm: !this.state.showingForm,
          action: action,
          editing: cake
        });
  };

  handleAction = (evt, item) => {
    evt.preventDefault();
    this.state.action === "edit" ? this.edit(item) : this.addNew(item);
  };

  addNew = item => {
    const newState = [item, ...this.state.cakes];
    this.setState({ cakes: newState, showingForm: false });
  };

  edit = item => {
    const id = item.id.replace(/^\D+/g, "");
    const current = this.state.cakes[id];
    const newState = [item, ...this.state.cakes.filter(el => el !== current)];
    this.setState({ cakes: newState, showingForm: false });
  };

  handleSearch = query => {
    this.setState({ showingSearch: true });

    const result = this.state.cakes.filter(
      cake => cake.title.includes(query) || cake.desc.includes(query)
    );
    result.length > 0
      ? this.setState({ searchResults: result })
      : this.setState({ noResults: true });
  };

  clearSearch = () => {
    this.setState({
      showingSearch: false,
      searchResults: "",
      noResults: false
    });
  };

  render() {
    const {
      showingForm,
      cakes,
      action,
      editing,
      showingSearch,
      searchResults
    } = this.state;

    return (
      <Container>
        <Nav
          toggleForm={this.toggleForm}
          showingForm={showingForm}
          handleSearch={this.handleSearch}
        />
        {showingForm
          ? <FormContainer
              action={action}
              inEdit={editing ? editing : null}
              handleAction={this.handleAction}
            />
          : <Main
              showingSearch={showingSearch}
              cakes={cakes}
              searchResults={searchResults}
              toggleForm={this.toggleForm}
              clearSearch={this.clearSearch}
            />}
      </Container>
    );
  }
}

export default App;

const Main = ({
  showingSearch,
  toggleForm,
  searchResults,
  cakes,
  clearSearch
}) => {
  return showingSearch
    ? <Results
        results={searchResults}
        clearSearch={clearSearch}
      />
    : <List data={cakes} toggleForm={toggleForm} />;
};
