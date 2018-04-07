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
                    title="分享 足记"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <FormItem label="标题">
                            {getFieldDecorator('title', {
                                rules: [{required: true, message: '标题不能为空!'}],
                            })(
                                <Input className="form-title"/>
                            )}
                        </FormItem>
                        <FormItem label="位置">
                            {getFieldDecorator('location', {
                                rules: [{required: true, message: '地址不能为空!'}],
                            })(
                                <Input className="form-title"/>
                            )}
                        </FormItem>
                        <FormItem label="摘要">
                            {getFieldDecorator('summary')(<Input type="textarea" className="form-summary"/>)}
                        </FormItem>
                        <FormItem label="足迹">
                            {getFieldDecorator('content')(<Input type="textarea" className="form-content"/>)}
                        </FormItem>
                        <FormItem label="图片">
                            <Uploade uploadMethod={uploadMethod}/>
                        </FormItem>


                        <FormItem className="collection-create-form_last-form-item form-radio">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">公开</Radio>
                                    <Radio value="private">私有</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

export default class CollectionsPage extends Base {
    constructor(props) {
        super(props);

    }

    state = {
        token: sessionStorage.token,
        visible: false,
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
            var url = "http://192.168.0.105:20000/api/comment/article?token=" + this.state.token;
            console.log('Received values of form: ', values)
            this.fetchPost(url, {
                title: values.title,
                summary: values.summary,
                location: values.location,
                content: values.content,
                secret: values.modifier === "public" ? false : true,
                imgPath: this.state.path
            }, json => {
                if (json.code == 0) {
                    dataChange()
                    this.setState({
                        timeLine: json.data
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