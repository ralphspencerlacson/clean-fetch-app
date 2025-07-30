import { useEffect, useState } from "react";
// Hooks
import { useTags } from "../../../hooks/tag/useTags";
import { useCreateService } from "../../../hooks/service/useCreateService";
// AntD
import { Form, Input, InputNumber, Row, Col, Select, DatePicker, Radio } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ServiceForm = ({ closeSideDrawer }) => {
    const [serviceForm] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const [ tagOptions, setTagOptions ] = useState([]);

    const { data: tags, isLoading: tagsLoading } = useTags();
    const createService = useCreateService();
    
    useEffect(() => {
        if(tags && !tagsLoading) {
            setTagOptions(tags?.data.map(tag => ({ label: tag.name, value: tag.id })));
        }
    }, [tags]);

    const handleSubmit = async (values) => {
        setLoading(true);

        try {
            await createService.mutateAsync(values);

            serviceForm.resetFields();
            closeSideDrawer();

        } catch (error) {
            console.error("Error creating service:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Form
                form={serviceForm}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark={false}
            >
                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item
                            name="date"
                            label="Availability Date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter service code",
                                },
                            ]}
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
                                {
                                    type: "number",
                                    min: 1,
                                    message: "Rack rate must be a positive number",
                                }
                            ]}
                            initialValue={0}
                        >
                            <InputNumber
                                style={{ width: "100%" }}
                                min={0}
                                formatter={(value) =>
                                    `₱ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
                                parser={(value) =>
                                    value.replace(/₱\s?|(,*)/g, "")
                                }
                                placeholder="Enter amount"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            name="tag"
                            label="Tags"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter service code",
                                },
                            ]}
                        >
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
                        <Form.Item 
                            name="description"
                            abel="Description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter service description",
                                },
                            ]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Enter service description"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[12, 12]}>
                    <Col xs={24}>
                        <Form.Item name="remarks" label="Remarks">
                            <TextArea
                                rows={4}
                                placeholder="Enter service remarks"
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
                            initialValue={0}
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
                                                    Not available to add to package
                                                </p>
                                            </span>
                                        </label>
                                    </Col>
                                </Row>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    className=" w-full absolute bottom-6 left-0 right-0 px-6"
                >
                    <Col span={24}>
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-400"
                            loading={loading}
                            type="submit"
                        >
                            Create
                        </button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default ServiceForm;
