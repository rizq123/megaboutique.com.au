const PromoSection = () => {
    return (
      <section className="container mx-auto my-6 p-6 bg-white shadow-md flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">COOKWARE</h2>
          <div className="flex space-x-4 my-4">
            <span className="font-bold text-red-600">esseleele</span>
            <span className="font-bold text-black">PYROLUX</span>
            <span className="font-bold text-yellow-600">LODGE</span>
            <span className="font-bold text-blue-600">TRAMONTINA</span>
          </div>
          <p className="text-5xl font-bold">
            Up to <span className="text-gray-900">65%</span> OFF
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded">
            SHOP NOW
          </button>
        </div>
        <div className="w-1/2">
          <img src="image.png" alt="Cookware Promo" className="rounded-lg" />
        </div>
      </section>
    );
  };
  
  export default PromoSection;
  