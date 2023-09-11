import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Welcome to My Blog</h1>
          <p className="mt-2">Explore the latest articles and updatesss</p>
        </div>
      </header>

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="bg-blue-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out inline-flex items-center space-x-2 cursor-pointer">
            <span>Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.293 5.293a1 1 0 011.414 1.414L12 11.414l-2.293-2.293a1 1 0 111.414-1.414L12 8.586l1.293-1.293a1 1 0 111.414 1.414L12 11.414l1.293-1.293a1 1 0 111.414 1.414L12 13.414l-2.293-2.293a1 1 0 111.414-1.414L12 15.414l1.293-1.293a1 1 0 111.414 1.414L12 17.414l-6-6a1 1 0 111.414-1.414L12 13.586z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/Components/Users/Signup">
            <span className="bg-orange-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out inline-flex items-center space-x-2 cursor-pointer">
              <span>Sign Up</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.293 5.293a1 1 0 011.414 1.414L12 11.414l-2.293-2.293a1 1 0 111.414-1.414L12 8.586l1.293-1.293a1 1 0 111.414 1.414L12 11.414l1.293-1.293a1 1 0 111.414 1.414L12 13.414l-2.293-2.293a1 1 0 111.414-1.414L12 15.414l1.293-1.293a1 1 0 111.414 1.414L12 17.414l-6-6a1 1 0 111.414-1.414L12 13.586z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
          <Link href="/Components/Users/Login">
            <span className="bg-orange-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out inline-flex items-center space-x-2 cursor-pointer">
              <span>Login User</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.293 5.293a1 1 0 011.414 1.414L12 11.414l-2.293-2.293a1 1 0 111.414-1.414L12 8.586l1.293-1.293a1 1 0 111.414 1.414L12 11.414l1.293-1.293a1 1 0 111.414 1.414L12 13.414l-2.293-2.293a1 1 0 111.414-1.414L12 15.414l1.293-1.293a1 1 0 111.414 1.414L12 17.414l-6-6a1 1 0 111.414-1.414L12 13.586z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
