import React, { useState } from 'react';

const Dropdown = ({setLogin}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="ml-1 mt-1 font-light border-2 border-black inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >Dashboard
          
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm no-underline hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm no-underline  hover:bg-gray-200 " role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm no-underline  hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
            <form method="POST" action="#" role="none">
              <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm  hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={()=>setLogin(false)}>Sign out</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
