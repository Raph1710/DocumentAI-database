import React from 'react'

function DocumentDetail({ document, onClose, onStatusUpdate }) {
  if (!document) return null;

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Pending':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      const response = await fetch(`https://documentai-database.onrender.com/api/documents/${document.executionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...document,
          reviewStatus: newStatus,
          updatedAt: new Date()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update document status');
      }

      const updatedDocument = await response.json();
      
      // Call the parent callback to update the document list
      if (onStatusUpdate) {
        onStatusUpdate(updatedDocument);
      }

      // Show success message
      alert(`Document status updated to: ${newStatus}`);
    } catch (error) {
      console.error('Error updating document status:', error);
      alert('Failed to update document status');
    }
  };

  const handleApproveDocument = () => {
    handleStatusUpdate('Completed');
  };

  const handleMarkForReview = () => {
    handleStatusUpdate('In Review');
  };

  const handlePending = () => {
    handleStatusUpdate('Pending');
  };

  const handleDeleteDocument = async () => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        const response = await fetch(`https://documentai-database.onrender.com/api/documents/${document.executionId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete document');
        }

        alert('Document deleted successfully');
        onClose(); // Close the modal
      } catch (error) {
        console.error('Error deleting document:', error);
        alert('Failed to delete document');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Document Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Execution ID</label>
                  <p className="text-gray-900 font-mono">{document.executionId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">File Name</label>
                  <p className="text-gray-900">{document.fileName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">File Path</label>
                  <p className="text-gray-900 font-mono text-sm">{document.filePath}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">File Size</label>
                  <p className="text-gray-900">{formatFileSize(document.fileSize)}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Start Time</label>
                  <p className="text-gray-900">{formatDateTime(document.startTime)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">End Time</label>
                  <p className="text-gray-900">{formatDateTime(document.endTime)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Processing Time</label>
                  <p className="text-gray-900">{document.processingTime} seconds</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Created At</label>
                  <p className="text-gray-900">{formatDateTime(document.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status and Environment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Review Status</label>
                  <div className="mt-1">
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(document.reviewStatus)}`}>
                      {document.reviewStatus}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Environment</label>
                  <p className="text-gray-900">{document.environment}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Last Updated</label>
                  <p className="text-gray-900">{formatDateTime(document.updatedAt)}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Metrics</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Processing Speed</span>
                    <span className="text-lg font-semibold text-blue-600">
                      {Math.round(document.fileSize / document.processingTime)} bytes/sec
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Efficiency</span>
                    <span className="text-lg font-semibold text-green-600">
                      {document.processingTime < 300 ? 'Fast' : document.processingTime < 600 ? 'Normal' : 'Slow'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handlePending}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Mark as Pending
              </button>
              <button 
                onClick={handleApproveDocument}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Approve Document
              </button>
              <button 
                onClick={handleMarkForReview}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Mark for Review
              </button>
              <button 
                onClick={handleDeleteDocument}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Delete Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentDetail 