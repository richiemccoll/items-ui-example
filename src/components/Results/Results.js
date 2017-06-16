import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import List from '../List/List';

const Results = ({ results, clearSearch }) => {
    return (
        <div>
            <Button onClick={() => clearSearch()} basic color="blue">Back</Button>
            {results && <List data={results} />}
        </div>
    )
}

export default Results;

Results.PropTypes = {
    results: PropTypes.array,
    clearSearch: PropTypes.isRequired
}