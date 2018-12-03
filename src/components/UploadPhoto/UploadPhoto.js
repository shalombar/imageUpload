import React, { Component } from 'react';

class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = { image: null, imagePreviewUrl: null }
    }

    _onChange(e) {
        let reader = new FileReader();
        let image = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: image,
                imagePreviewUrl: reader.result,
                show: false
            });
        }

        reader.readAsDataURL(image)

    }

    _uploadInput() {
        return (
            <div className='button'>
                {/* <label class="hand-cursor"> */}
                <button className="btn"></button>
                <input type='file' onChange={(e) => this._onChange(e)}></input>
                {/* </label> */}
            </div >
        )
    }

    renderImg() {
        let style = {
            background: 'url(' + this.state.imagePreviewUrl + ') no-repeat center',
            'backgroundSize': 'cover'
        }
        return (<img src={this.state.imagePreviewUrl} ></img>)
    }

    _showImg() {
        if (this.state.imagePreviewUrl) {
            this.setState({ show: true })
        }
    }

    render() {
        let { imagePreviewUrl, show } = this.state;

        return (
            <div className='UploadPhotoContainer'>
                {imagePreviewUrl && show ? this.renderImg() : this._uploadInput()}
                <button className='uploadImgBtn' onClick={() => this._showImg()}>{this.props.buttonText}</button>
            </div>

        )
    }

}
export default UploadPhoto;