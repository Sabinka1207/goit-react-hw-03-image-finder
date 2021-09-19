import { Component } from "react";
import "./App.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Spinner } from "./Loader/Loader";
import { fetchImages } from "../Utils/API";

class App extends Component {
  state = {
    allImages: [],
    selectedImage: null,
    reqStatus: false,
    page: 1,
  };

  handleSelectImage = (image) => {
    this.setState({ selectedImage: image });
  };

  handleSubmit = (request) => {
    console.log("1: ", this.state.reqStatus);
    this.setState({ reqStatus: true });
    console.log("after set: ", this.state.reqStatus);
    fetchImages(request)
      .then((r) => {
        console.log(r);
        this.setState({ allImages: r.hits });
      })
      .finally(
        console.log("finished"),
        this.setState({ reqStatus: false }),
        console.log("3: ", this.state.reqStatus)
      );
  };

  render() {
    const { allImages, selectedImage, reqStatus } = this.state;

    return (
      <div className="App">
        <Searchbar onClick={this.handleSubmit} />
        <ImageGallery data={allImages} onSelect={this.handleSelectImage} />
        {selectedImage && (
          <Modal link={selectedImage} modalToggle={this.handleSelectImage} />
        )}
        {reqStatus && <Spinner />}
      </div>
    );
  }
}

export default App;
