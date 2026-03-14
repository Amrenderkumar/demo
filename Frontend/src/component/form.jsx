import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const form = () => {
  const navigate = useNavigate();

  const [image, setImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!image) {
      setError("Please select an image file.");
      return;
    }
    if (!description.trim()) {
      setError("Please enter a description.");
      return;
    }

    const formdata = new FormData();
    formdata.append('image', image);
    formdata.append('description', description.trim());

    try {
      const response = await axios.post("http://localhost:5001/create-image", formdata, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("Image uploaded successfully:", response.data);
      navigate('/get-image');
    } catch (uploadError) {
      console.error("Error uploading image:", uploadError);
      setError("Upload failed. Please try again.");
    }
  }

  return (
    <section className='h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Image Upload Form</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="image" className='block text-sm font-medium text-gray-700 mb-2'>
              Select Image
            </label>
            <input 
              type="file" 
              name="image" 
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
              required
            />
          </div>
          <div>
            <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-2'>
              Description
            </label>
            <input 
              type="text" 
              name="description" 
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description" 
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
          {error && (
            <p className='text-sm text-red-600 mb-2'>{error}</p>
          )}
          <button 
            type="submit" 
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
          >
            Upload Image
          </button>
        </form>
      </div>
    </section>
  )
}

export default form
