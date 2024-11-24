import ProductSpecs from './ProductSpecs'

const ProductText = ({ product }) => {
    return (
        <div className='flex flex-col gap-3 p-6 border border-gray-300'>
            <h2 className="text-[2rem]">{product.name}</h2>

            <p className="text-[1.5rem]">{product.price}</p>
            <ProductSpecs product={product} />
        </div>
    )
}

export default ProductText