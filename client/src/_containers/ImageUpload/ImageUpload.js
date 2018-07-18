import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent'


const CLOUDINARY_UPLOAD_PRESET = 'is8ybozh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dexu8dqab/image/upload';

class ImageUpload extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      uploadFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
        <div className="file-upload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>

        <div>
          {this.state.uploadFileCloudinaryUrl === '' ? null :
            <div>
              <img value={this.state.image} src={this.state.uploadFileCloudinaryUrl} />
            </div>}
        </div>
      </div>
    )
  }
}

export default ImageUpload;