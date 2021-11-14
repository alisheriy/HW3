import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component {
  state = {
    searchString: ''
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={(event) => {
            this.setState({searchString: event.target.value})
            this.props.onSearch(event.target.value)
          }
        }
        value={this.state.searchString}
      />
    );
  }
};

export default SearchPanel;
