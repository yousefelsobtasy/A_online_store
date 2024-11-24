'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ProductSpecs = ({ product }) => {
    const [specs, setSpecs] = useState({
        color: '',
        size: '',
        count: 0,
    });
    const sizes = ['Small', 'Medium', 'Large'];

    function makeOrder(specs) {
        const date = new Date().toLocaleString()
        localStorage.setItem(`${product.name} - ${specs.size} - ${date}`, JSON.stringify(specs.count))

        const cartItems = Object.keys(localStorage)
        const productSum = cartItems
            .map(e => localStorage.getItem(e))
            .reduce((a, item) => parseInt(a) + parseInt(item), 0)

        const cartCount = document.querySelector('#cartCount')
        if (productSum > 0) {
            cartCount.style.display = 'flex'
            cartCount.textContent = productSum
        } else {
            cartCount.style.display = 'none'
        }

        console.log('success', productSum)
    }


    return (
        <div className="my-8">
            {/* Size Selector */}
            <h4 className="mb-4 text-lg font-semibold text-black">Choose Your Size</h4>
            <ul className="flex gap-4" role="list">
                {sizes.map((size, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer border px-4 py-2 text-center font-medium 
                        ${specs.size === size
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                            } transition-all duration-200 ease-in-out`}
                        role="button"
                        tabIndex={0}
                        aria-selected={specs.size === size}
                        onClick={() => setSpecs((prev) => ({ ...prev, size }))}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                setSpecs((prev) => ({ ...prev, size: size }));
                            }
                        }}
                    >
                        {size}
                    </li>
                ))}
            </ul>

            {/* Quantity Selector */}
            <h4 className="mt-8 mb-4 text-lg font-semibold text-black">Select Quantity</h4>
            <div className="flex items-center justify-between border border-gray-300 p-4">
                <button
                    className={`flex items-center justify-center w-10 h-10 
                    ${specs.count <= 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-gray-800'
                        } transition-all duration-200 ease-in-out`}
                    onClick={() => setSpecs((prev) => ({ ...prev, count: prev.count - 1 }))}
                    disabled={specs.count <= 0}
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <div
                    id="quantity-display"
                    aria-live="polite"
                    aria-relevant="text"
                    role="status"
                    className="text-lg font-semibold text-black"
                >
                    {specs.count}
                </div>
                <button
                    className={`flex items-center justify-center w-10 h-10 
                    ${specs.count >= 10
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-gray-800'
                        } transition-all duration-200 ease-in-out`}
                    onClick={() => setSpecs((prev) => ({ ...prev, count: prev.count + 1 }))}
                    disabled={specs.count >= 10}
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>

            <Link href="/cart">
                <button
                    className={`w-full text-center py-3 mt-8 font-medium 
                        ${specs.count === 0 || specs.size === ''
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-gray-800'
                        } focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 
                        transition-all duration-200 ease-in-out`}
                    aria-disabled={specs.count === 0 || specs.size === ''}
                    disabled={specs.count === 0 || specs.size === ''}
                    onClick={() => makeOrder(specs)}
                >
                    Go to Checkout
                </button>
            </Link>
        </div>
    );
};

export default ProductSpecs;
