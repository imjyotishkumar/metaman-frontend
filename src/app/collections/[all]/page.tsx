
import Navbar from "@/app/Components/Navbar";
import Product from "@/app/Components/Product";
import Image from "next/image"


const allcollection = async() => {
  let posts: {
      _id: string;
      category: string;
      imageurl: string;
      title: string;
      oldprice: number;
      newprice: number;
  }[] = [];

  try {
    const response = await fetch("https://mataman-backend-ruddy.vercel.app/users", {
        cache: "no-store", // Ensures fresh data is fetched every time
    });

    const text = await response.text(); // Read response as text first
    console.log("Raw response:", text); // Log response for debugging

    try {
        posts = JSON.parse(text); // Attempt to parse JSON
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <div>
        <h2 className="text-2xl font-bold text-center my-4">Failed to load products. Please try again later.</h2>
      </div>
    );
  }

  return (
    <div>
    <Navbar/> 
      <div>
        <Image src={`https://metaman.in/cdn/shop/files/Product_banner__2.jpg?v=1741590329&width=1080`}
        alt=""
        height={1600}
        width={1900}
        />

      </div>

      <div>
      <div>
                <h2 className="text-2xl font-bold text-center my-4">Product Collections</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post._id} className="p-4 shadow-md rounded-lg">
                            <Product
                                id={post._id}
                                category={post.category}
                                image={post.imageurl}
                                title={post.title}
                                oldprice={post.oldprice}
                                newprice={post.newprice}
                            />
                        </div>
                    ))}
                </ul>
            </div>
      </div>
    </div>
  )
}

export default allcollection