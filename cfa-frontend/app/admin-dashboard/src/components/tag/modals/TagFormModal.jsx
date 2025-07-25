import React, { useEffect, useState } from "react";
// Hooks
import { useCreateTag } from "../../../hooks/tag/useCreateTag";
import { useUpdateTag } from "../../../hooks/tag/useUpdateTag";
// AntD
import { Modal, Form, Input, Select, Button, message } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const TagFormModal = ({ open, onClose, onSuccess, initialValues }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const createTagMutation = useCreateTag();
    const updateTagMutation = useUpdateTag();

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [initialValues]);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            if( initialValues ) {
                await updateTagMutation.mutateAsync({ tagId: initialValues.id, tagData: values });
            } else {
                await createTagMutation.mutateAsync(values);
            }

            message.success({ content: `${initialValues ? "Updated" : "Created"} tag successfully` });
            form.resetFields();
            onSuccess();
        } catch (error) {
            message.error("Failed to create tag");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            title="Add New Tag"
            open={open}
            onCancel={handleCancel}
            footer={null}
            width={500}
            destroyOnHidden
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
            >
                <Form.Item
                    name="code"
                    label="Tag Code"
                    rules={[
                        { required: true, message: "Please enter tag code" },
                        {
                            pattern: /^[A-Z0-9_]+$/,
                            message:
                                "Code must contain only uppercase letters, numbers, and underscores",
                        },
                    ]}
                >
                    <Input
                        placeholder="e.g., PREMIUM_CLEAN"
                        onChange={(e) => {
                            // Auto uppercase the input
                            const upperValue = e.target.value.toUpperCase();
                            form.setFieldsValue({ code: upperValue });
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="Tag Name"
                    rules={[
                        { required: true, message: "Please enter tag name" },
                        {
                            max: 255,
                            message: "Name must be less than 255 characters",
                        },
                    ]}
                >
                    <Input placeholder="e.g., Premium Cleaning" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        { required: true, message: "Please enter description" },
                        {
                            max: 1000,
                            message:
                                "Description must be less than 1000 characters",
                        },
                    ]}
                >
                    <TextArea
                        rows={3}
                        placeholder="Describe what this tag represents..."
                    />
                </Form.Item>

                <Form.Item name="category" label="Category">
                    <Select placeholder="Select category (optional)" allowClear>
                        <Option value="service">Service</Option>
                        <Option value="product">Product</Option>
                    </Select>
                </Form.Item>

                <Form.Item className="mb-0">
                    <div className="flex justify-end space-x-2">
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                        >
                            {initialValues ? "Update" : "Create"} Tag
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TagFormModal;
