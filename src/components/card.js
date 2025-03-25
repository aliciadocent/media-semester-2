"use client";

import PropTypes from "prop-types";
import Link from "next/link";

export default function Card({ title, description, status, link }) {
  const getStatusColor = () => {
    switch (status) {
      case "Done":
        return "bg-green-500 text-white";
      case "In Progress":
        return "bg-yellow-500 text-white";
      case "Not Started":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <Link href={link} className="hover:text-blue-500 transition-colors duration-200">{title}</Link>
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div
        className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${getStatusColor()}`}
      >
        {status}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Done", "In Progress", "Not Started"]).isRequired,
  link: PropTypes.string,
};
