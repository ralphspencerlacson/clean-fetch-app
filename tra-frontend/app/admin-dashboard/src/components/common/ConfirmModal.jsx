import React, { useState } from 'react'

const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "danger",
    loading = false,
    children,
}) => {

    if (!isOpen) return null;

    const getTypeStyles = () => {
        switch (type) {
            case 'danger':
                return {
                    overlay: 'bg-red-50',
                    icon: '⚠️',
                    confirmBtn: 'bg-red-600 hover:bg-red-700 text-white',
                    border: 'border-red-200'
                };
            case 'warning':
                return {
                    overlay: 'bg-yellow-50',
                    icon: '⚠️',
                    confirmBtn: 'bg-yellow-600 hover:bg-yellow-700 text-white',
                    border: 'border-yellow-200'
                };
            default:
                return {
                    overlay: 'bg-blue-50',
                    icon: 'ℹ️',
                    confirmBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
                    border: 'border-blue-200'
                };
        }
    }

    const styles = getTypeStyles();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative z-10">
                {/* Header */}
                <div className={`px-6 py-4 border-b ${styles.border}`}>
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">{styles.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-4">
                    {message && (
                        <p className="text-gray-700 mb-4">{message}</p>
                    )}
                    {children}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${styles.confirmBtn} ${
                            loading ? 'cursor-not-allowed' : ''
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            confirmText
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
