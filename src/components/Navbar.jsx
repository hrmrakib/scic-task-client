import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    return logOut();
  };

  return (
    <nav className='h-16 bg-gray-100'>
      <div className='w-[94%] mx-auto h-full flex items-center justify-between'>
        <a href='/' className='text-lg font-semibold text-pink-600'>
          <span className='text-purple-600'>Tech</span> Bazaar
        </a>

        {user ? (
          <p>
            {user?.email}{" "}
            <button
              onClick={handleLogout}
              className='text-white ml-1 px-2 py-1 rounded bg-pink-500'
            >
              Logout
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
