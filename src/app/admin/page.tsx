'use client'
import { useState } from "react"

const Admin: React.FC = () => {
    const [category, setcategory] = useState<string>("")
    const [imageurl, setimageurl] = useState<string>("")
    const [title, settitle] = useState<string>("")
    const [description, setdescription] = useState<string>("")
    const [oldprice, setoldprice] = useState<number>()
    const [newprice, setnewprice] = useState<number>()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category, imageurl, title, description, oldprice, newprice })
        })
        const data = await response.json()
        console.log(data.message)
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Add Product</h1>
                <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-md">
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={imageurl}
                        onChange={(e) => setimageurl(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                      <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                     <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                      <input
                        type="number"
                        placeholder="old price"
                        value={oldprice}
                        onChange={(e) => setoldprice(Number(e.target.value))}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                      <input
                        type="number"
                        placeholder="New Price"
                        value={newprice}
                        onChange={(e) => setnewprice(Number(e.target.value))}
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <button type="submit"    className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Admin