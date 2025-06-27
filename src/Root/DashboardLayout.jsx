import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { LogOut, Menu, X } from "lucide-react";
import { AuthContext } from "../Contexts/AuthContext";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signed out successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => console.error(error));
  };

  // Close sidebar on nav link click (already done), also close on pressing Escape key
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Navbar */}
      <header className="bg-green-600 text-white flex justify-between items-center px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <p className="text-xl font-bold">PlantCare</p>
        </div>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-green-100 text-black p-5 space-y-4 absolute md:relative z-50 md:z-auto top-14 md:top-0 left-0 md:left-auto h-[calc(100vh-56px)] md:h-auto overflow-y-auto`}
      >
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Logo" className="w-10" />
          <h2 className="text-xl font-bold">PlantCare</h2>
        </div>
        <ul className="flex flex-col space-y-3">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              🏠 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/allplants"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-600 font-bold px-2 py-1 rounded"
                  : "text-gray-700 px-2 py-1 rounded hover:bg-green-200"
              }
              onClick={() => setIsOpen(false)}
            >
              🌱 All Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addplant"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-600 font-bold px-2 py-1 rounded"
                  : "text-gray-700 px-2 py-1 rounded hover:bg-green-200"
              }
              onClick={() => setIsOpen(false)}
            >
              ➕ Add Plant
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/myplants/email/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-600 font-bold px-2 py-1 rounded"
                  : "text-gray-700 px-2 py-1 rounded hover:bg-green-200"
              }
              onClick={() => setIsOpen(false)}
            >
              🌿 My Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myprofile"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-600 font-bold px-2 py-1 rounded"
                  : "text-gray-700 px-2 py-1 rounded hover:bg-green-200"
              }
              onClick={() => setIsOpen(false)}
            >
              🙍‍♂️ My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-green-600 font-bold px-2 py-1 rounded"
                  : "text-gray-700 px-2 py-1 rounded hover:bg-green-200"
              }
              onClick={() => setIsOpen(false)}
            >
              🔙 Back To Home
            </NavLink>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer text-red-500 hover:text-red-600 px-2 py-1 rounded"
            onClick={handleSignOut}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleSignOut();
            }}
            role="button"
            aria-label="Sign out"
          >
            <LogOut size={20} /> Sign Out
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
