import Image from "next/image";
import Product from "../Components/Product";
import Link from "next/link";

const Collections = async () => {
    try {
        const response = await fetch("https://mataman-backend.vercel.app/users", {
            cache: "no-store", // Ensures fresh data is fetched every time
        });

        const text = await response.text(); // Read response as text first
        console.log("Raw response:", text); // Log response for debugging

        let posts: {
            _id: string;
            category: string;
            imageurl: string;
            title: string;
            oldprice: number;
            newprice: number;
        }[] = [];

        try {
            posts = JSON.parse(text); // Attempt to parse JSON
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            throw new Error("Invalid JSON response from the server.");
        }

        return (
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
                <section className="bg-black text-white py-10 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                     {/* Image Section */}
                     <div className="md:w-1/2 md:hidden flex justify-center mt-6 md:mt-0">
                        <Image
                            src="https://metaman.in/cdn/shop/files/pack_of_6.jpg?v=1725051647&width=1080"
                            alt="Metaman Fragrance Pack"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="md:w-1/2 space-y-4">
                        <p className="uppercase text-sm text-gray-400">Exclusive</p>
                        <h2 className="text-3xl font-bold">
                            Five Signature Scents for Every Occasion, in a Convenient 5-Pack
                        </h2>
                        <p className="text-gray-300">
                            Experience the full range of Ha1o’s exclusive fragrances with our Pack of 5. Whether you’re stepping into a boardroom, a date night, or a workout, this collection ensures you always have the perfect scent at hand. Each fragrance is crafted to reflect strength, sophistication, and versatility, making it an ideal choice for those who embrace the champion within.
                        </p>
                        <Link href={`/checkout?67dff519672679616472e7ab`}>
                        <button className="bg-white cursor-pointer text-black px-6 py-2 font-semibold hover:bg-gray-300 transition">BUY NOW</button>
                        </Link>
                    </div>

                   {/* Image Section */}
                   <div className=" hidden md:block flex justify-center mt-6 md:mt-0">
                        <Image
                            src="https://metaman.in/cdn/shop/files/pack_of_6.jpg?v=1725051647&width=1080"
                            alt="Metaman Fragrance Pack"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>

                  
                </section>
            </div>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <div className="text-center text-red-600 font-semibold mt-5">
                Error loading products. Please try again later.
            </div>
        );
    }
};

export default Collections;