
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Users, Settings, BarChart3, Workflow, FileText, Clock } from 'lucide-react';

export const Sidebar = () => {
  const navigation = [
    { name: 'Event Types', href: '/', icon: Calendar, current: true },
    { name: 'Bookings', href: '/bookings', icon: Clock },
    { name: 'Availability', href: '/availability', icon: BarChart3 },
    { name: 'Teams', href: '/teams', icon: Users },
    { name: 'Apps', href: '/apps', icon: Workflow },
    { name: 'Routing Forms', href: '/routing-forms', icon: FileText },
    { name: 'Workflows', href: '/workflows', icon: Workflow },
    { name: 'Insights', href: '/insights', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200">
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <img 
          src="https://cdn.prod.website-files.com/5e53d34464688e6f5960a338/682f1bb36cedcb0cd39a7027_Onehash-CalId-logo%20icon.svg" 
          alt="Cal ID" 
          className="h-8 w-8"
        />
        <span className="ml-3 text-xl font-semibold text-gray-900">Cal ID</span>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">SY</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Sanskar Yadav</p>
          </div>
        </div>
      </div>
    </div>
  );
};
