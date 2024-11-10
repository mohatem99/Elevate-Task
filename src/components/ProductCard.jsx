
function ProductCard({ product }) {
    
    const minizeTitle = (title) => {
        return title.split(' ').slice(0,3).join(' ')
    }
  return (
 
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center group">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-40 object-fit mb-6 group-hover:opacity-70"
        />
        <h3 className="text-md font-semibold">{minizeTitle(product.title)}</h3>
        <p className="text-green-600 font-bold mt-2">${product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating.rate}</p>
      </div>

  );
}

export default ProductCard