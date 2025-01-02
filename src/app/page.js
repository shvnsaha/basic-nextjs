
import Counter from '@/components/Counter';
import Link from 'next/link';

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {

  const res = await fetch("http://localhost:5000/shops",{
  next:{
    revalidate: 5
  }
  });
  const data = await res.json()

  throw new Error("error from fetching");


  return (
    <div>
      <h1>Home Page next js</h1>
      {/* <Counter/>  */}
      <div className='flex justify-between'>
        {
          data.slice(0,3).map((item) => (
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
      <Link href={'/all-products'}><button className='btn btn-outline'>See More</button></Link>
    </div>
  );
};

export default HomePage;