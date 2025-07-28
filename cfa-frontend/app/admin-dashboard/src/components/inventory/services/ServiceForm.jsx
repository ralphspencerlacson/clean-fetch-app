import { Form, Input, Button, Row, Col } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ServiceForm = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form values:", values);
        // Handle form submission logic here
    };

    const handleCancel = () => {
        form.resetFields();
        // Handle cancel logic here
    };

    return (
        <>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={[16, 0]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="code"
                            label="Service Code"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter service code",
                                },
                            ]}
                        >
                            <Input placeholder="Enter service code" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            name="name"
                            label="Service Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter service name",
                                },
                            ]}
                        >
                            <Input placeholder="Enter service name" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24}>
                        <Form.Item name="description" label="Description">
                            <TextArea
                                rows={4}
                                placeholder="Enter service description"
                            />
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </>
    );
};

export default ServiceForm;
