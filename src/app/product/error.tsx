"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Something went wrong</span> Please Try
        Again!
        <button
          className="block mt-2 bg-red-700 p-2 rounded-sm text-white"
          onClick={() => reset}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
