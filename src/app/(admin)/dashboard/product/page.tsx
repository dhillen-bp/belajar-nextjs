"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=product&secret=rahasia`,
      {
        method: "POST",
      }
    );

    const response = await res.json();
    if (!res.ok) {
      setStatus("Revalidate Fail");
    } else {
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <div>
      <h1>{status}</h1>
      <button
        className="bg-blue-500 rounded-md p-2 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
