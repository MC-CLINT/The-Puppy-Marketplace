import React, {  useEffect, useContext } from 'react';
import { AppContext } from '../App';

const LOCAL_STORAGE_KEY = 'dogsData';

const ProductManagement = () => {
  const { animals, setAnimals } = useContext(AppContext);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setAnimals(JSON.parse(savedData));
    }
  }, [setAnimals]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(animals));
  }, [animals]);

  const deleteDog = (sellerId) => {
    const updatedAnimals = animals.filter(dog => dog.sellerId !== sellerId);
    
    setAnimals(updatedAnimals);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dog
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Breed
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ProuctId
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Listed
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {animals.map(dog => (
            <TableRow key={dog.sellerId} {...dog} deleteDog={deleteDog} />
          ))}
          <tr>
            <td colSpan="9" className="px-6 py-4 whitespace-nowrap text-center">
              <a href="AddNewListing" className="block">
                <button className="w-full bg-green-600 text-white rounded-lg py-2 px-4">
                  Add New Listing
                </button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ dog, breed, age, gender, sellerId, color, status, dateListed, deleteDog }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dog}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{breed}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{age}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{gender}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sellerId}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{color}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{status}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dateListed}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a
          href="#"
          onClick={() => deleteDog(sellerId)}
          className="ml-4 text-red-600 hover:text-red-900"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default ProductManagement;
