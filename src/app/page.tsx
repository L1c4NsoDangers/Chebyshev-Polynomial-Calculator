"use client";

// pages/index.tsx

import { useState } from "react";
import { chebyshevPolynomial } from "../lib/jacobi";

export default function ChebyshevPolynomials() {
  const [n, setN] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const calculate = () => {
    setResult(chebyshevPolynomial(n, x));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Chebyshev Polynomial Calculator
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order (n):
          </label>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Point (x):
          </label>
          <input
            type="number"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <button
          onClick={calculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring w-full"
        >
          Calculate
        </button>
        {result !== 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Result:</h2>
            <p className="text-gray-800">
              T<sub>{n}</sub>({x}) = {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
