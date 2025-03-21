import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/rebirthLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const location = useLocation(); 

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const toggleNotificationDropdown = async () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:4000/api/getPotentialJobs/82503"
        );
        const data = await response.json();
        console.log("recieved data: ", data);
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
            <div className="flex items-center">
              <Link to="/">
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to=""
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("candidate")
                      ? "bg-yellow-400 text-white"
                      : "text-black hover:bg-yellow-200"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="userRoadmap"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/userRoadmap")
                      ? "bg-yellow-400 text-white"
                      : "text-black hover:bg-yellow-200"
                  }`}
                >
                  Roadmaps
                </Link>
                <Link
                  to="applyJob"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/applyJob")
                      ? "bg-yellow-400 text-white"
                      : "text-black hover:bg-yellow-200"
                  }`}
                >
                  Jobs
                </Link>
                <Link
                  to="ResumeTemplate"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/ResumeTemplate")
                      ? "bg-yellow-400 text-white"
                      : "text-black hover:bg-yellow-200"
                  }`}
                >
                  Templates
                </Link>
                <Link
                  to="community"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/applyJob")
                      ? "bg-yellow-400 text-white"
                      : "text-black hover:bg-yellow-200"
                  }`}
                >
                  Community
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-100 p-1 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={toggleNotificationDropdown}
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            {isNotificationOpen && (
              <div className="absolute right-0 mt-40 w-64 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {loading ? (
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Loading...
                  </div>
                ) : notifications.length === 0 ? (
                  <div className="px-4 py-2 text-sm text-gray-700">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700"
                    >
                      You have been matched with {notification.company}
                    </div>
                  ))
                )}
              </div>
            )}

            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleProfileMenu}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link
                    to="/profileReturn"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/signout"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/employer"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive("/employer")
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/team"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive("/team")
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Team
            </Link>
            <Link
              to="/projects"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive("/projects")
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/calendar"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive("/calendar")
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Calendar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
