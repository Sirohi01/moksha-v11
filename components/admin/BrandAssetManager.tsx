'use client';

import { useState, useEffect } from 'react';

interface BrandAsset {
  _id: string;
  title: string;
  description: string;
  type: 'logo' | 'brand_asset';
  category: string;
  url: string;
  thumbnailUrl?: string;
  fileSize: number;
  version: number;
  isActive: boolean;
  downloadCount: number;
  usageGuidelines: string;
  restrictions: string[];
  createdAt: string;
  updatedAt: string;
}

export default function BrandAssetManager() {
  const [assets, setAssets] = useState<BrandAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingAsset, setEditingAsset] = useState<BrandAsset | null>(null);
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    search: ''
  });

  const assetTypes = [
    { value: 'logo', label: 'Logos' },
    { value: 'brand_asset', label: 'Brand Assets' }
  ];

  const categories = [
    'Primary Logo',
    'Secondary Logo',
    'Icon',
    'Wordmark',
    'Brand Colors',
    'Typography',
    'Templates',
    'Guidelines',
    'Other'
  ];

  useEffect(() => {
    fetchAssets();
  }, [filters]);

  const fetchAssets = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const queryParams = new URLSearchParams({
        type: 'logo,brand_asset',
        ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAssets(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch brand assets:', error);
    } finally {
      setLoading(false);
    }
  };
  const createAsset = async (assetData: any) => {
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      
      Object.keys(assetData).forEach(key => {
        if (key === 'file') {
          formData.append('files', assetData[key]);
        } else if (Array.isArray(assetData[key])) {
          formData.append(key, JSON.stringify(assetData[key]));
        } else {
          formData.append(key, assetData[key]);
        }
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        fetchAssets();
        setShowCreateModal(false);
      }
    } catch (error) {
      console.error('Failed to create brand asset:', error);
    }
  };

  const updateAsset = async (id: string, assetData: any) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assetData),
      });

      if (response.ok) {
        fetchAssets();
        setEditingAsset(null);
      }
    } catch (error) {
      console.error('Failed to update brand asset:', error);
    }
  };

  const deleteAsset = async (id: string) => {
    if (!confirm('Are you sure you want to delete this brand asset?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchAssets();
      }
    } catch (error) {
      console.error('Failed to delete brand asset:', error);
    }
  };

  const downloadAsset = async (asset: BrandAsset) => {
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media/${asset._id}/download`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      // Open download link
      window.open(asset.url, '_blank');
    } catch (error) {
      console.error('Failed to track download:', error);
      // Still allow download
      window.open(asset.url, '_blank');
    }
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'logo': return '🏷️';
      case 'brand_asset': return '🎨';
      default: return '📁';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">🎨 Brand Asset Management</h2>
          <p className="text-gray-600">Manage logos, brand assets, and usage guidelines</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Upload Brand Asset
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              {assetTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              placeholder="Search brand assets..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div key={asset._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
            {/* Asset Preview */}
            <div className="aspect-square bg-gray-50 relative group">
              {asset.thumbnailUrl || asset.url ? (
                <img
                  src={asset.thumbnailUrl || asset.url}
                  alt={asset.title}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">{getAssetIcon(asset.type)}</span>
                </div>
              )}
              
              {/* Version Badge */}
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  v{asset.version}
                </span>
              </div>

              {/* Status Badge */}
              <div className="absolute top-2 left-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  asset.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {asset.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <button
                  onClick={() => downloadAsset(asset)}
                  className="bg-white text-gray-900 px-3 py-1 rounded text-sm hover:bg-gray-100"
                >
                  Download
                </button>
                <button
                  onClick={() => setEditingAsset(asset)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            </div>

            {/* Asset Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900 truncate flex-1">{asset.title}</h3>
                <span className="text-xl ml-2">{getAssetIcon(asset.type)}</span>
              </div>
              
              <p className="text-sm text-gray-500 mb-2">{asset.category}</p>
              
              {asset.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{asset.description}</p>
              )}

              {/* File Info */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{formatFileSize(asset.fileSize)}</span>
                <span>⬇️ {asset.downloadCount} downloads</span>
              </div>

              {/* Usage Guidelines Preview */}
              {asset.usageGuidelines && (
                <div className="mb-3">
                  <div className="text-xs font-medium text-gray-700 mb-1">Usage Guidelines:</div>
                  <p className="text-xs text-gray-600 line-clamp-2">{asset.usageGuidelines}</p>
                </div>
              )}

              {/* Restrictions */}
              {asset.restrictions && asset.restrictions.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs font-medium text-gray-700 mb-1">Restrictions:</div>
                  <div className="flex flex-wrap gap-1">
                    {asset.restrictions.slice(0, 2).map((restriction, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        {restriction}
                      </span>
                    ))}
                    {asset.restrictions.length > 2 && (
                      <span className="text-xs text-gray-400">+{asset.restrictions.length - 2}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="flex space-x-2">
                  <button
                    onClick={() => downloadAsset(asset)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => setEditingAsset(asset)}
                    className="text-green-600 hover:text-green-800 text-sm"
                  >
                    Edit
                  </button>
                </div>
                <button
                  onClick={() => deleteAsset(asset._id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || editingAsset) && (
        <BrandAssetModal
          isOpen={showCreateModal || !!editingAsset}
          onClose={() => {
            setShowCreateModal(false);
            setEditingAsset(null);
          }}
          onSave={(data: any) => {
            if (editingAsset) {
              updateAsset(editingAsset._id, data);
            } else {
              createAsset(data);
            }
          }}
          editingAsset={editingAsset}
          assetTypes={assetTypes}
          categories={categories}
        />
      )}
    </div>
  );
}
// Brand Asset Modal Component
function BrandAssetModal({ isOpen, onClose, onSave, editingAsset, assetTypes, categories }: any) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'logo',
    category: categories[0],
    usageGuidelines: '',
    restrictions: [] as string[],
    isActive: true,
    file: null as File | null
  });
  const [restrictionInput, setRestrictionInput] = useState('');

  useEffect(() => {
    if (editingAsset) {
      setFormData({
        title: editingAsset.title,
        description: editingAsset.description || '',
        type: editingAsset.type,
        category: editingAsset.category,
        usageGuidelines: editingAsset.usageGuidelines || '',
        restrictions: editingAsset.restrictions || [],
        isActive: editingAsset.isActive,
        file: null
      });
    }
  }, [editingAsset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addRestriction = () => {
    if (restrictionInput.trim() && !formData.restrictions.includes(restrictionInput.trim())) {
      setFormData({
        ...formData,
        restrictions: [...formData.restrictions, restrictionInput.trim()]
      });
      setRestrictionInput('');
    }
  };

  const removeRestriction = (restriction: string) => {
    setFormData({
      ...formData,
      restrictions: formData.restrictions.filter(r => r !== restriction)
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              {editingAsset ? 'Edit Brand Asset' : 'Upload Brand Asset'}
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!editingAsset && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset File *
                </label>
                <input
                  type="file"
                  required
                  accept="image/*,.pdf,.ai,.eps,.svg"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: Images, PDF, AI, EPS, SVG
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {assetTypes.map((type: any) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category: string) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Active Asset</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usage Guidelines
              </label>
              <textarea
                value={formData.usageGuidelines}
                onChange={(e) => setFormData({ ...formData, usageGuidelines: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe how this asset should be used..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usage Restrictions
              </label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={restrictionInput}
                  onChange={(e) => setRestrictionInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRestriction())}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Add restriction"
                />
                <button
                  type="button"
                  onClick={addRestriction}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.restrictions.map((restriction, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800"
                  >
                    {restriction}
                    <button
                      type="button"
                      onClick={() => removeRestriction(restriction)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {editingAsset ? 'Update' : 'Upload'} Asset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}