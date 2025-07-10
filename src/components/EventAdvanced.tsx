
import React, { useState } from 'react';
import { Switch } from './ui/switch';

export const EventAdvanced = () => {
  const [requiresConfirmation, setRequiresConfirmation] = useState(false);
  const [redirectOnBooking, setRedirectOnBooking] = useState(false);
  const [additionalInputs, setAdditionalInputs] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Advanced</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Advanced options for this event type.
          </p>
        </div>

        {/* Requires Confirmation */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Requires confirmation</h3>
              <p className="text-sm text-muted-foreground">Require manual confirmation for bookings</p>
            </div>
            <Switch 
              checked={requiresConfirmation}
              onCheckedChange={setRequiresConfirmation}
            />
          </div>
          
          {requiresConfirmation && (
            <div className="pl-4 p-3 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                New bookings will be marked as pending until you confirm them manually.
              </p>
            </div>
          )}
        </div>

        {/* Redirect on Booking */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Redirect on booking</h3>
              <p className="text-sm text-muted-foreground">Redirect to custom URL after successful booking</p>
            </div>
            <Switch 
              checked={redirectOnBooking}
              onCheckedChange={setRedirectOnBooking}
            />
          </div>
          
          {redirectOnBooking && (
            <div className="pl-4 space-y-3">
              <input 
                type="url" 
                className="w-full px-3 py-2 border border-border rounded text-sm bg-background"
                placeholder="https://example.com/thank-you"
              />
            </div>
          )}
        </div>

        {/* Additional Inputs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Additional inputs</h3>
              <p className="text-sm text-muted-foreground">Collect additional information during booking</p>
            </div>
            <Switch 
              checked={additionalInputs}
              onCheckedChange={setAdditionalInputs}
            />
          </div>
          
          {additionalInputs && (
            <div className="pl-4 space-y-3">
              <div className="p-3 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2">Phone Number</h4>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm">Required</label>
                </div>
              </div>
              
              <div className="p-3 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2">Additional Notes</h4>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <label className="text-sm">Required</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
