import Product from "../Components/Product"

const Collections = async () => {
    const data = await fetch('https://mataman-backend.vercel.app/users')
    const posts: { _id: string; imageurl: string; title: string; oldprice: number; newprice: number }[] = await data.json()

  return (
    <div>

        <ul className="grid grid-cols-1  md:grid-cols-3">
            {posts.map((post)=>(
                <div key={post._id} className=" p-4 ">

                   <Product id = {post._id} image={post.imageurl} title = {post.title} oldprice = {post.oldprice} newprice={post.newprice} />

                </div>
                

            ))}
            
        </ul>
    </div>
  )
}

export default Collections