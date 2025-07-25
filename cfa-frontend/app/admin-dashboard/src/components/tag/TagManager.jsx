import React, { useEffect, useState } from "react";
// Hooks
import { useTags } from "../../hooks/tag/useTags";
import { useDeleteTag } from "../../hooks/tag/useDeleteTag";
// Components
import ConfirmModal from "../common/ConfirmModal";
import TagFormModal from "./modals/TagFormModal";
// AntD
import { Table, Button, Space, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TagManager = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const { data: tags, isLoading, error, refetch } = useTags();
    const deleteTagMutation = useDeleteTag();

    const handleAdd = () => {
        setSelectedRow(null);
        setFormOpen(true);
    };

    const handleEdit = (record) => {
        setSelectedRow(record);
        setFormOpen(true);
    };

    const handleDelete = (record) => {
        setSelectedRow(record);
        setConfirmOpen(true);
    };

    const handleSuccess = () => {
        setSelectedRow(null);
        setFormOpen(false);
        refetch();

        message.success('Tag added to the list!');
    };

    const handleConfirmDelete = async () => {
        if (!selectedRow) return;

        try {
            await deleteTagMutation.mutateAsync({ tagId: selectedRow.id });

            message.success("Tag deleted successfully");
            setSelectedRow(null);
            setConfirmOpen(false);
            refetch();
        } catch (error) {
            message.error("Failed to delete tag");
        }
    }

    const handleOnclose = () => {

        if (formOpen) {
            setFormOpen(false);
        }

        if (confirmOpen) {
            setConfirmOpen(false);
        }
    };

    const columns = [
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
            width: 150,
            render: (text) => (
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                    {text}
                </span>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 200,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            ellipsis: true,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: 120,
            render: (category) => (
                <span
                    className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                        category === "service"
                            ? "bg-blue-100 text-blue-800"
                            : category === "product"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                >
                    {category}
                </span>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 120,
            render: (_, record) => (
                <Space size="small">
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        size="small"
                        onClick={() => handleEdit(record)}
                        className="text-blue-600 hover:text-blue-700"
                    />
                    <Button
                        type="text"
                        icon={<DeleteOutlined />}
                        size="small"
                        onClick={() => handleDelete(record)}
                        className="text-red-600 hover:text-red-700"
                        danger
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="space-y-4">
            {/* Header with Add button */}
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-medium">Manage Tags</h3>
                    <p className="text-gray-600 text-sm">
                        Create and manage tags for services and products
                    </p>
                </div>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAdd}
                >
                    Add Tag
                </Button>
            </div>

            {/* Tags Table */}
            <Table
                columns={columns}
                dataSource={tags?.data}
                rowKey="id"
                loading={isLoading}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} of ${total} tags`,
                }}
                scroll={{ y: 400 }}
                size="small"
                locale={{
                    emptyText:
                        'No tags found. Click "Add Tag" to create your first tag.',
                }}
            />

            <TagFormModal
                open={formOpen}
                onClose={handleOnclose}
                onSuccess={handleSuccess}
                initialValues={selectedRow}
            />

            <ConfirmModal
                isOpen={confirmOpen}
                onClose={handleOnclose}
                onConfirm={handleConfirmDelete}
                title="Confirm Deletion"
                message="Are you sure you want to delete this tag?"
                confirmText="Delete"
                cancelText="Cancel"
                loading={deleteTagMutation.isPending}
            />
        </div>
    );
};

export default TagManager;
