"use client";

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 3,
  });
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState<number[]>([]); // Menyimpan rating yang terkumpul

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Menambahkan rating yang baru ke dalam array ratings
    setRatings((prevRatings) => [...prevRatings, formData.rating]);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      rating: 3,
    });
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  // Menghitung rata-rata rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
    return totalRating / ratings.length;
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (html && localStorage.theme) {
      html.setAttribute('data-theme', localStorage.theme);
    }
  }, []);

  return (
    <div className="card bg-base-200 shadow-xl rounded-3xl p-10 transition-transform transform hover:-translate-y-2 hover:shadow-3xl">
      <div className="card-body text-primary-content">
        <h2 className="card-title text-4xl font-extrabold text-center mb-6">Contact Form</h2>
        
        {submitted ? (
          <div className="card bg-base-100 shadow-2xl rounded-2xl p-8 transition-transform transform hover:-translate-y-1 text-primary-content">
            <div className="card-body">
              <div className="space-y-3">
                <p><span className="font-semibold">Nama:</span> {formData.name}</p>
                <p><span className="font-semibold">Email:</span> {formData.email}</p>
                <p><span className="font-semibold">Pesan:</span> {formData.message}</p>
                <p><span className="font-semibold">Rating:</span> {formData.rating}/5</p>
                <div className="divider my-4"></div>
                <p className="text-success font-semibold text-lg">Data diatas akan segera di input ke database. Terimakasih!</p>
              </div>
            </div>
            <div className="divider my-4"></div>
            <div className="text-lg font-semibold">
              <p>Rata-rata Rating: {calculateAverageRating().toFixed(2)} / 5</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="card bg-base-100 shadow-2xl rounded-2xl p-8 transition-transform transform hover:-translate-y-1 text-primary-content">
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="form-control">
                    <label className="label text-primary-content">
                      <span className="label-text font-semibold">Nama:</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered rounded-xl p-3 shadow-inner bg-base-200 text-base-content focus:bg-base-100 focus:shadow-lg"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-primary-content">
                      <span className="label-text font-semibold">Email:</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered rounded-xl p-3 shadow-inner bg-base-200 text-base-content focus:bg-base-100 focus:shadow-lg"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-primary-content">
                      <span className="label-text font-semibold">Pesan:</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea textarea-bordered rounded-xl p-3 shadow-inner h-24 bg-base-200 text-base-content focus:bg-base-100 focus:shadow-lg"
                      placeholder="Masukkan pesan"
                    />
                  </div>
                </div>
                
                <div className="form-control mt-4">
        <label className="label text-primary-content">
          <span className="label-text font-semibold">Rating:</span>
        </label>
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`cursor-pointer text-3xl transition-transform transform hover:scale-110 ${
                index < formData.rating 
                  ? "text-yellow-400" 
                  : "text-base-300"
              }`}
              onClick={() => handleStarClick(index + 1)}
            />
          ))}
        </div>
      </div>
              </div>
            </div>
            
            <div className="card-actions justify-center mt-6 space-x-4">
              <button
                type="submit"
                className="btn btn-primary text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="btn btn-ghost bg-base-100 text-primary-content font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-base-200"
              >
                Clear
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
