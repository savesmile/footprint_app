import { Modal, Form, Input, Radio } from 'antd';
import React, {Component} from "react"
import {connect} from "react-redux"
import Uploade from "../upload"

const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
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
                                rules: [{ required: true, message: '标题不能为空!' }],
                            })(
                                <Input className="form-title"/>
                            )}
                        </FormItem>
                        <FormItem label="摘要">
                            {getFieldDecorator('summary',)(<Input type="textarea" className="form-summary"/>)}
                        </FormItem>
                        <FormItem label="足迹">
                            {getFieldDecorator('content',)(<Input type="textarea" className="form-content"/>)}
                        </FormItem>
                        <FormItem label="图片">
                            <Uploade/>
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

export default class CollectionsPage extends React.Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    render() {
        return (
            <div className="add-foot">
                <button type="primary" className="addBtn" onClick={this.showModal}><i className="mdui-icon material-icons">add</i></button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}