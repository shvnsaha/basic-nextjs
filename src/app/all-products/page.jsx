
const AllProducts = async () => {
    const res = await fetch("http://localhost:5000/shops",{
        cache: "no-store"
    });
    const data = await res.json();
   

    return (
        <div className="grid grid-cols-3 gap-2">
            {
                data.map((item) => (
                    <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;