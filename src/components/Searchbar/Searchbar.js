import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      return;
    }

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=38758233-8fc35b3d0bfcc58c4cf74e0b5&q=${searchQuery}&per_page=10`
      );

      const images = response.data.hits.map(image => image.largeImageURL);
      this.props.onSubmit(images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
