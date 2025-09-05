import React from 'react';

// Using a single functional component with Tailwind CSS for styling
interface ProfileHeaderProps {
  userName: string;
}


// Main App component to demonstrate the usage of ProfileHeader.
export default function App() {
  return (
    <div className="h-screen bg-gray-100 font-sans">
      
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Your main profile screen content goes here */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-64 flex items-center justify-center text-gray-500 text-sm">
          <p>Main profile content section</p>
        </div>
      </div>
      {/* Load Tailwind CSS from CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}