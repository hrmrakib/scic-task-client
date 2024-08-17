const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-blue-600'>404</h1>
        <p className='text-xl text-gray-700 mt-4'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className='text-gray-500 mt-2'>
          It might have been removed or you might have mistyped the address.
        </p>
        <a
          href='/'
          className='mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300'
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
