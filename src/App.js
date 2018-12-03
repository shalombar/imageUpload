import React, { Component } from 'react';
import './css/style.css';
import UploadPhoto from './components/UploadPhoto/UploadPhoto';

class App extends Component {

  state = {
    uploading: false,
    images: []
  }

  render() {
    return (
      <div className="App">
        <UploadPhoto buttonText={'Upload orginal photo'} />
        <UploadPhoto buttonText={'Upload protected photo'} />
      </div>
    );
  }
}

export default (App);

