import {Upload, Icon, message} from 'antd';
import React, {Component} from "react"

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    /*const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }*/
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return /*isJPG &&*/ isLt2M;
}

export default class Uploade extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        token: sessionStorage.token,
        loading: false,
    };
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
            this.props.uploadMethod(info.file.response);
            //
        }
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    render() {
        var data = {
            upload_type: "avatar"
        };
        var uri = "http://192.168.0.105:20000/api/common/uploadByFile?type=article&token=" + this.state.token;
        const uploadButton = (
            <div className="uploadBtn">
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={uri}
                beforeUpload={beforeUpload}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
            </Upload>
        );
    }
}