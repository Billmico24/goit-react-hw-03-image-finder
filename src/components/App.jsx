import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImg } from '../services/fetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";



export class App extends Component {

 state = {
   input: '',
   page: 1,
   pics: [],
   loading: false, 
   showModal: false,
   total: 0,
   largeImage: '',
   error: ''
  };

  largeImage = () => {
    return this.state.largeImage;
  }
 openModal = index => {
    this.setState(({ pics }) => ({
      showModal: true,
      largeImage: pics[index].largeImageURL,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  formSubmit = input => {
    if (input.trim() === '') {
      toast.error('Please fill me ^.~');
      return;
    }
    if (input === this.state.input) {
      toast.error("You're repeating yourself.");
      return;
    }
    this.setState({ input, page: 1, pics: [] });
  };

  async renderGallery(input, page) {
  try {
    this.setState({ loading: true });
    const pics = await fetchImg(input, page);
    this.setState(prevState => ({
      pics: [...prevState.pics, ...pics.hits],
      loading: false,
      total: pics.total
    }));

  } catch (error) {
    console.log("Somthing wrong, try to refresh the page: ", error);
  } finally {
      this.setState({ loading: false });
    }
  } 

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.input !== this.state.input
    ) {
      this.renderGallery(this.state.input, this.state.page);
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        {this.state.error && <p>{this.state.error}</p>}
        <div>
          <ImageGallery galleryItems={this.state.pics} openModal={ this.openModal} />
          {this.state.loading && <Loader />}
          <ToastContainer autoClose={2000}
            position="top-left" />
          {this.state.pics.length > 0 && this.state.total / this.state.page > 12 && <LoadMoreButton nextPage={this.onLoadMoreButton} />}
          {this.state.showModal && (
          <Modal toggleModal={this.toggleModal} largeImage={this.largeImage} />
        )}
      </div>
      </div>
      
    
    
          
  
  );
 }
};
