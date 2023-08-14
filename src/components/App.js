import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searrchbar/Searchbar';
import ImageGallery from './ImageGalery/ImageGallery';
import Button from './Button/Button';
import Loader from '../../Loader';
import Modal from './Modal/Modal';
import './App.css'; 
const API_KEY = '38758233-8fc35b3d0bfcc58c4cf74e0b5';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    selectedImage: null,
    isLoading: false,
  };

  handleSearchSubmit = newQuery => {
    this.setState({ query: newQuery, page: 1, images: [] });
    this.fetchImages(newQuery, 1);
  };

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    axios
      .get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=vertical&per_page=12`)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    const { query, page } = this.state;
    this.fetchImages(query, page);
  };

  handleImageClick = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {!!images.length && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {selectedImage && (
          <Modal imageUrl={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
