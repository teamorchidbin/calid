
import React, { useState } from 'react';
import { Settings, Palette, Globe, Shield, Zap } from 'lucide-react';
import { Switch } from './ui/switch';

export const EventAdvanced = () => {
  const [settings, setSettings] = useState({
    requiresConfirmation: false,
    disableGuests: false,
    hideEventTypeDetails: false,
    lockTimeZoneToggle: false,
    requiresBookerEmailVerification: false,
    redirectOnBooking: '',
    customFields: [],
    seoTitle: '',
    seoDescription: '',
    eventColor: '#3B82F6',
    hideEventFromProfile: false,
    onlyShowFirstAvailableSlot: false,
    markdownSupport: false
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const colorOptions = [
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Orange', value: '#F59E0B' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Teal', value: '#14B8A6' }
  ];

  return (
    <div className="p-6 w-full space-y-6">
      {/* Booking Settings */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Settings className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Booking Settings</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Requires confirmation</label>
              <p className="text-xs text-muted-foreground">Bookings need to be manually confirmed</p>
            </div>
            <Switch
              checked={settings.requiresConfirmation}
              onCheckedChange={(checked) => handleSettingChange('requiresConfirmation', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Disable guests</label>
              <p className="text-xs text-muted-foreground">Prevent invitees from adding guests</p>
            </div>
            <Switch
              checked={settings.disableGuests}
              onCheckedChange={(checked) => handleSettingChange('disableGuests', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Requires email verification</label>
              <p className="text-xs text-muted-foreground">Send verification email before confirming booking</p>
            </div>
            <Switch
              checked={settings.requiresBookerEmailVerification}
              onCheckedChange={(checked) => handleSettingChange('requiresBookerEmailVerification', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Hide event type details</label>
              <p className="text-xs text-muted-foreground">Don't show event description on booking page</p>
            </div>
            <Switch
              checked={settings.hideEventTypeDetails}
              onCheckedChange={(checked) => handleSettingChange('hideEventTypeDetails', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Lock timezone toggle</label>
              <p className="text-xs text-muted-foreground">Prevent invitees from changing timezone</p>
            </div>
            <Switch
              checked={settings.lockTimeZoneToggle}
              onCheckedChange={(checked) => handleSettingChange('lockTimeZoneToggle', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Show only first available slot</label>
              <p className="text-xs text-muted-foreground">Only show the earliest available time slot per day</p>
            </div>
            <Switch
              checked={settings.onlyShowFirstAvailableSlot}
              onCheckedChange={(checked) => handleSettingChange('onlyShowFirstAvailableSlot', checked)}
            />
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Appearance</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Event color</label>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleSettingChange('eventColor', color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    settings.eventColor === color.value ? 'border-foreground scale-110' : 'border-border'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Hide from profile</label>
              <p className="text-xs text-muted-foreground">Don't show this event type on your public profile</p>
            </div>
            <Switch
              checked={settings.hideEventFromProfile}
              onCheckedChange={(checked) => handleSettingChange('hideEventFromProfile', checked)}
            />
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">SEO Settings</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">SEO Title</label>
            <input
              type="text"
              value={settings.seoTitle}
              onChange={(e) => handleSettingChange('seoTitle', e.target.value)}
              placeholder="Custom page title for search engines"
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">SEO Description</label>
            <textarea
              value={settings.seoDescription}
              onChange={(e) => handleSettingChange('seoDescription', e.target.value)}
              placeholder="Custom description for search engines"
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
            />
          </div>
        </div>
      </div>

      {/* Redirects */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Redirects & Actions</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Redirect on booking</label>
            <input
              type="url"
              value={settings.redirectOnBooking}
              onChange={(e) => handleSettingChange('redirectOnBooking', e.target.value)}
              placeholder="https://example.com/thank-you"
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Redirect users to this URL after they book
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Enable markdown support</label>
              <p className="text-xs text-muted-foreground">Allow markdown formatting in descriptions</p>
            </div>
            <Switch
              checked={settings.markdownSupport}
              onCheckedChange={(checked) => handleSettingChange('markdownSupport', checked)}
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Security</h3>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p className="text-sm text-yellow-800">
            <strong>Privacy Notice:</strong> All booking data is encrypted and stored securely. 
            Only you and invited attendees can access booking details.
          </p>
        </div>
      </div>
    </div>
  );
};
