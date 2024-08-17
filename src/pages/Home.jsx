import React, { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Footer from "../components/Footer";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import Navbar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchProducts();
  }, [page, searchQuery, category, sortBy]);

  const fetchProducts = async () => {
    try {
      const response = await axiosSecure.get("/products", {
        params: {
          page,
          search: searchQuery,
          category,
          sortBy,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <Navbar />
      <div className='w-[94%] mx-auto mt-5'>
        <header>
          <div className='flex items-center justify-between flex-wrap gap-8 my-2'>
            <input
              className='outline-none w-96 border border-gray-400 rounded-sm px-2 py-1.5'
              type='text'
              placeholder='Search by product name...'
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              onChange={handleCategoryChange}
              className='px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none hover:bg-gray-100 transition duration-200'
              value={category}
            >
              <option value=''>All Categories</option>
              <option value='Electronics'>Electronics</option>
              <option value='Clothing'>Clothing</option>
              <option value='Books'>Books</option>
            </select>

            <select
              onChange={handleSortChange}
              className='px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none hover:bg-gray-100 transition duration-200'
              value={sortBy}
            >
              <option value=''>Sort By</option>
              <option value='price'>Price: Low to High</option>
              <option value='price_desc'>Price: High to Low</option>
              <option value='date'>Date Added: Newest First</option>
            </select>
          </div>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 my-12'>
          {products.map((product) => (
            <div className='border' key={product._id}>
              <img
                className='w-full h-60'
                src={product.image}
                alt={product.name}
              />
              <div className='bg-gray-100 p-5'>
                <h2 className='text-2xl'>{product.name}</h2>
                <p className='mb-2'>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.ratings} Stars</p>
                <p>Added: {new Date(product.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-3 my-16'>
          <button
            className='border p-2 rounded-3xl bg-gray-200 disabled:cursor-not-allowed'
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <GrFormPreviousLink className='text-lg' />
          </button>
          <p>
            Page <span className='text-blue-600 font-medium'>{page}</span> of{" "}
            <span className='text-red-600 font-medium'>{totalPages}</span>
          </p>
          <button
            className='border p-2 rounded-3xl bg-gray-200 disabled:cursor-not-allowed'
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            <GrFormNextLink className='text-lg' />
          </button>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
