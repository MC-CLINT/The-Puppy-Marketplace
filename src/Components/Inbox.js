export default function Inbox(){
    return(
        <div class="inbox-component p-4 space-y-6">
  <div class="header flex justify-between items-center">
    <h1 class="text-2xl font-bold">Inbox</h1>
    <input type="text" placeholder="Search messages" class="w-1/3 px-3 py-2 border rounded" />
  </div>

  <div class="messages-table bg-white shadow rounded-lg p-4">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Welcome to Puppy Market</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hello, welcome to our platform...</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-07-22</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {/* <EyeInvisibleOutlined style={{ color: 'red' }} /> */}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button class="text-indigo-600 hover:text-indigo-900">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="message-modal">
  </div>
</div>

    )
}