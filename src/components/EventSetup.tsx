
import React, { useState } from 'react';
import { Bold, Italic, Link } from 'lucide-react';

export const EventSetup = () => {
  const [formData, setFormData] = useState({
    title: 'Product Hunt Chats',
    description: 'The essence of Product Hunt reflects in communities- Select a time suitable for you, and let\'s talk products!',
    url: 'product-hunt-chats',
    durations: ['15', '30', '45', '60'],
    defaultDuration: '15',
    allowBookerToSelectDuration: true,
    location: 'google-meet'
  });

  const availableDurations = ['15', '30', '45', '60'];

  const handleDurationToggle = (duration: string) => {
    if (formData.durations.includes(duration)) {
      setFormData({
        ...formData,
        durations: formData.durations.filter(d => d !== duration)
      });
    } else {
      setFormData({
        ...formData,
        durations: [...formData.durations, duration]
      });
    }
  };

  return (
    <div className="p-8 max-w-4xl">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <div className="border border-gray-300 rounded-lg">
            <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Bold className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Italic className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Link className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full p-3 resize-none focus:outline-none"
              placeholder="A quick video meeting."
            />
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="translate" className="mr-2" />
            <label htmlFor="translate" className="text-sm text-gray-600">
              Translate description to the visitor's browser language using AI
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-lg">
              cal.id/sanskar/
            </span>
            <input
              type="text"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Available durations</label>
          <div className="flex space-x-2 mb-4">
            {availableDurations.map((duration) => (
              <div key={duration} className="flex items-center">
                <button
                  onClick={() => handleDurationToggle(duration)}
                  className={`px-3 py-1 text-sm rounded border ${
                    formData.durations.includes(duration)
                      ? 'bg-blue-100 border-blue-300 text-blue-800'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {duration} mins
                </button>
                {formData.durations.includes(duration) && (
                  <button
                    onClick={() => handleDurationToggle(duration)}
                    className="ml-1 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default duration</label>
          <select
            value={formData.defaultDuration}
            onChange={(e) => setFormData({ ...formData, defaultDuration: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {formData.durations.map((duration) => (
              <option key={duration} value={duration}>{duration} mins</option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allowBookerToSelectDuration"
              checked={formData.allowBookerToSelectDuration}
              onChange={(e) => setFormData({ ...formData, allowBookerToSelectDuration: e.target.checked })}
              className="mr-3"
            />
            <label htmlFor="allowBookerToSelectDuration" className="text-sm font-medium text-gray-700">
              Allow booker to select duration
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">GM</span>
              </div>
              <span className="text-gray-900">Google Meet</span>
            </div>
            <button className="text-red-500 hover:text-red-700">×</button>
          </div>
          <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
            + Add a location
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Can't find the right conferencing app? Visit our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">App Store</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
