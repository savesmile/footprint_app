import {Modal, Form, Input, Radio} from 'antd';
import React, {Component} from "react"
import {connect} from "react-redux"
import Uploade from "../upload"
import Base from "../../components/base";

const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
    class extends React.Component {
        render() {
            const {visible, onCancel, onCreate, form, uploadMethod} = this.props;
            const {getFieldDecorator} = form;
            return (
                <Modal
                    visible={visible}
                    title="修改信息"
                    okText="提交"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <FormItem label="头像">
                            <Uploade uploadMethod={uploadMethod}/>
                        </FormItem>
                        <FormItem label="昵称">
                            {getFieldDecorator('nickName')(<Input type="textarea" className="form-summary"/>)}
                        </FormItem>
                        <FormItem label="简介">
                            {getFieldDecorator('introduction')(<Input type="textarea" className="form-content"/>)}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);
@connect(
    (state) => ({ ...state })
)
export default class UpdateInfo extends Base {
    constructor(props) {
        super(props);    
    }
    
    state = {
        token: sessionStorage.token,
        visible: false
    };
    showModal = () => {
        this.setState({visible: true});
    }
    handleCancel = () => {
        this.setState({visible: false});
    }
    handleCreate = () => {
        const {dataChange} = this.props;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            var url = "http://47.95.121.41:20000/api/user/info?token=" + this.state.token;
            console.log('Received values of form: ', values)
            this.fetchPost(url, {
                nickName:values.nickName,
                introduction:values.introduction,
                avatar: this.state.path
            }, json => {
                if (json.code == 0) {
                    dataChange();
                    this.setState({
                        info: json.data
                    })
                }
            })

            //form.resetFields();
            this.setState({visible: false});
        });
    };

    uploadMethod = (path) => {
        this.setState({
            path: path.data.imagePath
        });
        console.log(this.state.path);
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div className="add-foot">
                <button type="primary" className="addBtn" onClick={this.showModal}><i
                    className="mdui-icon material-icons">add</i></button>
                <CollectionCreateForm
                    uploadMethod={this.uploadMethod}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}