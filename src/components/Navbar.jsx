const Navbar = () => {
  return (
    <nav className='h-16 px-10 bg-gray-100 flex items-center justify-between'>
      <a href='/' className='text-lg font-semibold text-pink-600'>
        <span className='text-purple-600'>Tech</span> Bazaar
      </a>

      <a href='/' className='hover:underline text-blue-600'>
        Create User
      </a>
    </nav>
  );
};

export default Navbar;
