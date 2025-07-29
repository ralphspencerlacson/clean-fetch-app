import { useEffect, useState } from "react";
// Hooks
import { useTags } from "../../../hooks/tag/useTags";
// AntD
import { Form, Input, InputNumber, Row, Col, Select, DatePicker, Radio } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ProductForm = () => {
    const [productForm] = Form.useForm();

    const [ tagOptions, setTagOptions ] = useState([]);

    const { data: tags, isLoading: tagsLoading } = useTags();

    useEffect(() => {
        if(tags && !tagsLoading) {
            setTagOptions(tags?.data.map(tag => ({ label: tag.name, value: tag.id })));
        }
    }, [tags]);

    const handleSubmit = (values) => {
        console.log("Form values:", values);
        // Handle form submission logic here
    };

    const handleCancel = () => {
        productForm.resetFields();
        // Handle cancel logic here
    };

    return (
        <>
            <Form
                form={productForm}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark={false}
            >
                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item
                            name="date"
                            label="Availability Date"
                            required
                        >
                            <RangePicker
                                className="w-full"
                                format="MMMM D, YYYY"
                                placeholder={["Start Date", "End Date"]}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="code"
                            label="Product Code"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter product code",
                                },
                            ]}
                        >
                            <Input placeholder="Enter product code" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            name="name"
                            label="Product Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter product name",
                                },
                            ]}
                        >
                            <Input placeholder="Enter product name" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="rackRate"
                            label="Rack Rate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter rack rate",
                                },
                            ]}
                            initialValue={0}
                        >
                            <InputNumber
                                style={{ width: "100%" }}
                                min={0}
                                formatter={(value) =>
                                    `₱ ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )
                                }
                                parser={(value) =>
                                    value.replace(/₱\s?|(,*)/g, "")
                                }
                                placeholder="Enter amount"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item name="tag" label="Tags">
                            <Select
                                options={tagOptions}
                                placeholder="Select tags"
                                loading={tagsLoading}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item name="description" label="Description">
                            <TextArea
                                rows={4}
                                placeholder="Enter product description"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item name="remarks" label="Remarks">
                            <TextArea
                                rows={4}
                                placeholder="Enter product remarks"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item
                            name="status"
                            label="Status"
                            className="w-full"
                        >
                            <Radio.Group className="flex w-full gap-4">
                                <Row gutter={[12, 12]}>
                                    <Col span={12}>
                                        <label className="flex items-center gap-2 w-full h-full cursor-pointer border rounded-md px-4 py-3 hover:border-blue-500 transition-all">
                                            <Radio value={1} />
                                            <span className="text-sm font-medium">
                                                <p className="text-base font-semibold text-gray-800">
                                                    Active
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Available to add to package
                                                </p>
                                            </span>
                                        </label>
                                    </Col>

                                    <Col span={12}>
                                        <label className="flex items-center gap-2 w-full h-full cursor-pointer border rounded-md px-4 py-3 hover:border-blue-500 transition-all">
                                            <Radio value={0} />
                                            <span className="text-sm font-medium">
                                                <p className="text-base font-semibold text-gray-800">
                                                    Inactive
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Not available to add to
                                                    package
                                                </p>
                                            </span>
                                        </label>
                                    </Col>
                                </Row>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default ProductForm;
