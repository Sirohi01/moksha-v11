'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Filter, Grid, List, Edit, Trash2, Eye, Download } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

// Mock gallery data
const mockImages = [
  {
    id: '1',
    src: '/gallery/gallery_ambulance_unit_1772862517482.png',
    alt: 'Ambulance Unit',
    title: 'Emergency Ambulance Service',
    description: 'Our dedicated ambulance unit providing 24/7 emergency services',
    category: 'services',
    uploadDate: '2024-01-15',
    size: '2.3 MB',
    dimensions: '1920x1080',
  },
  {
    id: '2',
    src: '/gallery/gallery_community_support_1772861359875.png',
    alt: 'Community Support',
    title: 'Community Outreach Program',
    description: 'Volunteers engaging with local communities',
    category: 'community',
    uploadDate: '2024-01-14',
    size: '1.8 MB',
    dimensions: '1600x900',
  },
  {
    id: '3',
    src: '/gallery/gallery_cremation_ceremony_1772861295131.png',
    alt: 'Cremation Ceremony',
    title: 'Dignified Cremation Service',
    description: 'Providing respectful final rites',
    category: 'services',
    uploadDate: '2024-01-13',
    size: '2.1 MB',
    dimensions: '1920x1080',
  },
  {
    id: '4',
    src: '/gallery/gallery_memorial_site_1772862535416.png',
    alt: 'Memorial Site',
    title: 'Memorial Garden',
    description: 'Peaceful memorial site for remembrance',
    category: 'memorial',
    uploadDate: '2024-01-12',
    size: '1.9 MB',
    dimensions: '1600x1200',
  },
  {
    id: '5',
    src: '/gallery/gallery_volunteer_service_1772861316550.png',
    alt: 'Volunteer Service',
    title: 'Volunteer in Action',
    description: 'Dedicated volunteers serving the community',
    category: 'volunteers',
    uploadDate: '2024-01-11',
    size: '1.7 MB',
    dimensions: '1400x900',
  },
  {
    id: '6',
    src: '/gallery/gallery_volunteer_meeting_1772862633347.png',
    alt: 'Volunteer Meeting',
    title: 'Team Meeting',
    description: 'Regular volunteer coordination meeting',
    category: 'volunteers',
    uploadDate: '2024-01-10',
    size: '1.5 MB',
    dimensions: '1600x900',
  },
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'services', label: 'Services' },
  { value: 'community', label: 'Community' },
  { value: 'volunteers', label: 'Volunteers' },
  { value: 'memorial', label: 'Memorial' },
];

export default function GalleryManager() {
  const [images, setImages] = useState(mockImages);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectImage = (imageId: string) => {
    setSelectedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleSelectAll = () => {
    if (selectedImages.length === filteredImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(filteredImages.map(img => img.id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedImages.length === 0) return;
    
    setImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
    setSelectedImages([]);
    toast.success(`${selectedImages.length} image(s) deleted successfully`);
  };

  const handleBulkCategoryChange = (newCategory: string) => {
    if (selectedImages.length === 0) return;
    
    setImages(prev => prev.map(img => 
      selectedImages.includes(img.id) 
        ? { ...img, category: newCategory }
        : img
    ));
    toast.success(`Category updated for ${selectedImages.length} image(s)`);
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'p-2 transition-colors',
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
              )}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'p-2 transition-colors',
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Upload Button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Upload Images
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700 dark:text-blue-300">
              {selectedImages.length} image(s) selected
            </span>
            <div className="flex gap-2">
              <select
                onChange={(e) => handleBulkCategoryChange(e.target.value)}
                className="px-3 py-1 text-sm border border-blue-300 dark:border-blue-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Change Category</option>
                {categories.slice(1).map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <button
                onClick={handleDeleteSelected}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Images Grid/List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Gallery Images ({filteredImages.length})
            </h2>
            <button
              onClick={handleSelectAll}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {selectedImages.length === filteredImages.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        </div>

        <div className="p-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'relative group border-2 rounded-lg overflow-hidden transition-all duration-200',
                    selectedImages.includes(image.id)
                      ? 'border-blue-500 shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  )}
                >
                  {/* Selection Checkbox */}
                  <div className="absolute top-2 left-2 z-10">
                    <input
                      type="checkbox"
                      checked={selectedImages.includes(image.id)}
                      onChange={() => handleSelectImage(image.id)}
                      className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>

                  {/* Image */}
                  <div className="aspect-square">
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {image.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                        {categories.find(c => c.value === image.category)?.label}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {image.size}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'flex items-center gap-4 p-4 border rounded-lg transition-all duration-200',
                    selectedImages.includes(image.id)
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => handleSelectImage(image.id)}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                  />
                  
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white truncate">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {image.description}
                    </p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>{categories.find(c => c.value === image.category)?.label}</span>
                      <span>{image.dimensions}</span>
                      <span>{image.size}</span>
                      <span>{image.uploadDate}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Upload Images
            </h3>
            
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Drag and drop images here, or click to select
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Select Images
              </label>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}