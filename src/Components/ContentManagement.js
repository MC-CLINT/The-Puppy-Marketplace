import React from 'react'

export default function ContentManagement() {
  return (
    <div className='sidebarElements'>
      <div class="content-management-page p-4 space-y-6">
  <div class="header flex justify-between items-center">
    <h1 class="text-2xl font-bold">Content Management</h1>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Add New Content</button>
  </div>

  
  <div class="filters flex space-x-4">
    <input type="text" placeholder="Search by title" class="w-1/3 px-3 py-2 border rounded" />
    <select class="w-1/3 px-3 py-2 border rounded">
      <option value="">Filter by status</option>
      <option value="published">Published</option>
      <option value="draft">Draft</option>
      <option value="archived">Archived</option>
    </select>
    <select class="w-1/3 px-3 py-2 border rounded">
      <option value="">Filter by category</option>
    </select>
    <input type="text" class="w-1/3 px-3 py-2 border rounded" placeholder="Select date range" />
  </div>

  <div class="content-table bg-white shadow rounded-lg p-4">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publication Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Content Title</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Author Name</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Published</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-07-22</td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            <a href="#" class="ml-4 text-red-600 hover:text-red-900">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}
