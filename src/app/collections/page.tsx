import Product from "../Components/Product";

const Collections = async () => {
    try {
        const response = await fetch("https://mataman-backend.vercel.app/users", {
            cache: "no-store", // Ensures fresh data is fetched every time
        });

        const text = await response.text(); // Read response as text first
        console.log("Raw response:", text); // Log response for debugging

        let posts: {
            _id: string;
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
                                image={post.imageurl}
                                title={post.title}
                                oldprice={post.oldprice}
                                newprice={post.newprice}
                            />
                        </div>
                    ))}
                </ul>
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