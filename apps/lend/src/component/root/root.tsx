import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="bg-[#F8FAFC]  w-1/5 py-10 border-r border ">
        {/* Sidebar content */}
        <div className="flex justify-center ">Logo</div>
        <ul className="py-10 space-y-5">
          <li className="mx-4 py-2">
            <Link className="w-full" to="/lend">
              Dashboard
            </Link>
          </li>

          <li className="mx-4 py-2">
            <Link to="/lend/origination">Origination</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Navbar */}
        <nav className="p-8">
          {/* Navbar content */}
          <h1 className="text-lg font-bold">My App Lend God oooo!</h1>
        </nav>

        {/* Content */}
        <div className="p-4 bg-[#F1F5F9] h-full w-full">
          {/* Page content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
