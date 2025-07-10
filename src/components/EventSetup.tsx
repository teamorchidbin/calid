
import React, { useState } from 'react';
import { Bold, Italic, Link, MapPin, Plus, X, Clock, Settings } from 'lucide-react';

interface EventSetupProps {
  onChange?: () => void;
}

export const EventSetup = ({ onChange }: EventSetupProps) => {
  const [formData, setFormData] = useState({
    title: 'Product Hunt Chats',
    description: 'The essence of Product Hunt reflects in communities- Select a time suitable for you, and let\'s talk products!',
    url: 'product-hunt-chats',
    durations: ['15', '30', '45', '60'],
    defaultDuration: '15',
    allowBookerToSelectDuration: true,
    location: 'google-meet',
    customDuration: '',
    showCustomDuration: false
  });

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('google-meet');
  const [locationDetails, setLocationDetails] = useState({
    meetingLink: '',
    address: '',
    phone: '',
    displayPhone: false
  });

  const availableDurations = ['15', '30', '45', '60'];

  const locationOptions = [
    { id: 'conferencing', label: 'Conferencing', type: 'header' },
    { id: 'zoom', label: 'Zoom', type: 'option', icon: '🎥' },
    { id: 'google-meet', label: 'Google Meet', type: 'option', icon: 'GM' },
    { id: 'teams', label: 'Microsoft Teams', type: 'option', icon: 'MT' },
    { id: 'facetime', label: 'FaceTime', type: 'option', icon: '📞' },
    { id: 'others', label: 'Others', type: 'header' },
    { id: 'link-meeting', label: 'Link meeting', type: 'option', icon: '🔗' },
    { id: 'attendee-location', label: 'Custom attendee location', type: 'option', icon: '📍' },
    { id: 'phone', label: 'Phone', type: 'header' },
    { id: 'attendee-phone', label: 'Attendee phone number', type: 'option', icon: '📱' },
    { id: 'organizer-phone', label: 'Organizer phone number', type: 'option', icon: '☎️' },
    { id: 'in-person', label: 'In Person', type: 'option', icon: '🏢' },
  ];

  const handleFormChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    onChange?.();
  };

  const handleDurationToggle = (duration: string) => {
    const newDurations = formData.durations.includes(duration)
      ? formData.durations.filter(d => d !== duration)
      : [...formData.durations, duration];
    handleFormChange('durations', newDurations);
  };

  const addCustomDuration = () => {
    if (formData.customDuration && !formData.durations.includes(formData.customDuration)) {
      handleFormChange('durations', [...formData.durations, formData.customDuration]);
      setFormData(prev => ({ ...prev, customDuration: '', showCustomDuration: false }));
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    setShowLocationDropdown(false);
    handleFormChange('location', locationId);
  };

  const renderLocationDetails = () => {
    if (['zoom', 'facetime', 'link-meeting'].includes(selectedLocation)) {
      return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Link</label>
          <input
            type="url"
            value={locationDetails.meetingLink}
            onChange={(e) => setLocationDetails(prev => ({ ...prev, meetingLink: e.target.value }))}
            placeholder="https://zoom.us/j/..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      );
    }

    if (selectedLocation === 'in-person') {
      return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              value={locationDetails.address}
              onChange={(e) => setLocationDetails(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Enter the meeting address..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="maps-link" className="mr-2" />
            <label htmlFor="maps-link" className="text-sm text-gray-600">
              Include Google Maps link
            </label>
          </div>
        </div>
      );
    }

    if (selectedLocation === 'organizer-phone') {
      return (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={locationDetails.phone}
              onChange={(e) => setLocationDetails(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+1 (555) 000-0000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="display-phone" 
              checked={locationDetails.displayPhone}
              onChange={(e) => setLocationDetails(prev => ({ ...prev, displayPhone: e.target.checked }))}
              className="mr-2" 
            />
            <label htmlFor="display-phone" className="text-sm text-gray-600">
              Display phone number on booking page
            </label>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="p-6 max-w-4xl space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleFormChange('title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <div className="border border-gray-300 rounded-lg">
          <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
            <button className="p-1 hover:bg-gray-100 rounded" onClick={() => document.execCommand('bold')}>
              <Bold className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded" onClick={() => document.execCommand('italic')}>
              <Italic className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded" onClick={() => {
              const url = prompt('Enter URL:');
              if (url) document.execCommand('createLink', false, url);
            }}>
              <Link className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div
            contentEditable
            className="w-full p-3 min-h-[100px] focus:outline-none"
            dangerouslySetInnerHTML={{ __html: formData.description }}
            onInput={(e) => handleFormChange('description', e.currentTarget.innerHTML)}
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
            onChange={(e) => handleFormChange('url', e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Available durations</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {availableDurations.map((duration) => (
            <button
              key={duration}
              onClick={() => handleDurationToggle(duration)}
              className={`px-3 py-1 text-sm rounded border ${
                formData.durations.includes(duration)
                  ? 'bg-blue-100 border-blue-300 text-blue-800'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {duration} mins
            </button>
          ))}
          {formData.durations.filter(d => !availableDurations.includes(d)).map((duration) => (
            <div key={duration} className="flex items-center">
              <span className="px-3 py-1 text-sm rounded border bg-blue-100 border-blue-300 text-blue-800">
                {duration} mins
              </span>
            </div>
          ))}
        </div>
        
        {!formData.showCustomDuration ? (
          <button
            onClick={() => setFormData(prev => ({ ...prev, showCustomDuration: true }))}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add custom duration
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={formData.customDuration}
              onChange={(e) => setFormData(prev => ({ ...prev, customDuration: e.target.value }))}
              placeholder="Duration"
              className="w-24 px-3 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm">mins</span>
            <button
              onClick={addCustomDuration}
              className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Add
            </button>
            <button
              onClick={() => setFormData(prev => ({ ...prev, showCustomDuration: false, customDuration: '' }))}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Default duration</label>
        <select
          value={formData.defaultDuration}
          onChange={(e) => handleFormChange('defaultDuration', e.target.value)}
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
            onChange={(e) => handleFormChange('allowBookerToSelectDuration', e.target.checked)}
            className="mr-3"
          />
          <label htmlFor="allowBookerToSelectDuration" className="text-sm font-medium text-gray-700">
            Allow booker to select duration
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <div className="relative">
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">
                  {selectedLocation === 'google-meet' ? 'GM' : selectedLocation === 'zoom' ? '🎥' : '📍'}
                </span>
              </div>
              <span className="text-gray-900">
                {locationOptions.find(opt => opt.id === selectedLocation)?.label || 'Select location'}
              </span>
            </div>
            <Settings className="h-4 w-4 text-gray-400" />
          </button>
          
          {showLocationDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {locationOptions.map((option) => (
                <div key={option.id}>
                  {option.type === 'header' ? (
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50">
                      {option.label}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleLocationSelect(option.id)}
                      className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50"
                    >
                      <span className="mr-3 text-sm">{option.icon}</span>
                      <span className="text-sm">{option.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {renderLocationDetails()}
        
        <p className="text-sm text-gray-600 mt-2">
          Can't find the right conferencing app? Visit our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">App Store</a>.
        </p>
      </div>
    </div>
  );
};
