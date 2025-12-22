import React from 'react';
import SideBar from './SideBar'; // 
const VideoForm = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        {/* Page Header */}
        <div className="mb-6">
          <span className="text-sm text-gray-500 uppercase">upload content</span>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-bold">Add New Healing Video</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
              <span className="mr-2 text-xl">💾</span> SAVE VIDEO
            </button>
          </div>
          <p className="text-gray-600 mt-1">Upload and manage healing video content.</p>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow rounded p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="e.g. 10-Minute Morning Meditation"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* YouTube Link */}
          <div>
            <label className="block text-sm font-medium mb-1">YouTube Link</label>
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
              <option>Select a category</option>
              <option>Meditation</option>
              <option>Yoga</option>
              <option>Healing</option>
            </select>
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail</label>
            <div className="border-dashed border-2 border-gray-300 rounded p-6 hover:border-blue-400">
              <div className="flex flex-col items-center justify-center space-y-2">
                {/* Upload Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <p className="text-sm">Drag & drop or click to upload</p>
                <p className="text-xs text-gray-500">Recommended: 1920×1080px, JPG, PNG</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoForm;