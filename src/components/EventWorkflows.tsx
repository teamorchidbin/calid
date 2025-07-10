
import React, { useState } from 'react';
import { Plus, Mail, MessageSquare, Clock } from 'lucide-react';

const workflowTemplates = [
  {
    id: 'sms-reminder',
    name: 'SMS Reminder - 10 minutes before',
    description: 'Send an SMS reminder to attendees 10 minutes before the meeting starts',
    icon: MessageSquare,
    trigger: 'Before event',
    action: 'Send SMS',
    timing: '10 minutes before'
  },
  {
    id: 'email-reminder',
    name: 'Email Reminder - 30 minutes before',
    description: 'Send an email reminder to attendees 30 minutes before the meeting starts',
    icon: Mail,
    trigger: 'Before event',
    action: 'Send Email',
    timing: '30 minutes before'
  },
  {
    id: 'thankyou-email',
    name: 'Thank You Email - After meeting',
    description: 'Send a thank you email to attendees after the meeting ends',
    icon: Mail,
    trigger: 'After event',
    action: 'Send Email',
    timing: 'Immediately after'
  }
];

export const EventWorkflows = () => {
  const [activeWorkflows, setActiveWorkflows] = useState<string[]>([]);

  const toggleWorkflow = (workflowId: string) => {
    setActiveWorkflows(prev => 
      prev.includes(workflowId) 
        ? prev.filter(id => id !== workflowId)
        : [...prev, workflowId]
    );
  };

  return (
    <div className="p-6 max-w-4xl space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Workflows</h2>
        <p className="text-gray-600 mb-6 text-sm">Automate actions when events are scheduled, cancelled, or rescheduled.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Available Workflows</h3>
          <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Plus className="h-4 w-4 mr-1" />
            Create Custom Workflow
          </button>
        </div>

        <div className="space-y-3">
          {workflowTemplates.map((workflow) => (
            <div
              key={workflow.id}
              className={`p-4 border rounded-lg transition-all ${
                activeWorkflows.includes(workflow.id)
                  ? 'border-blue-300 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeWorkflows.includes(workflow.id) ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <workflow.icon className={`h-5 w-5 ${
                      activeWorkflows.includes(workflow.id) ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{workflow.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{workflow.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {workflow.trigger}
                      </span>
                      <span>•</span>
                      <span>{workflow.action}</span>
                      <span>•</span>
                      <span>{workflow.timing}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleWorkflow(workflow.id)}
                  className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                    activeWorkflows.includes(workflow.id)
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {activeWorkflows.includes(workflow.id) ? 'Disable' : 'Enable'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeWorkflows.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">No workflows are currently active</p>
            <p className="text-gray-400 text-xs">Enable workflows above to automate your event processes</p>
          </div>
        )}
      </div>
    </div>
  );
};
