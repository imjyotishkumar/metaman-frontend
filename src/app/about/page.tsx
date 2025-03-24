import Image from "next/image";

const About = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center bg-black text-white p-6 md:p-12">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2">
        <Image
          src="https://metaman.in/cdn/shop/files/KL_Blue_4dfb417c-2799-4cca-9176-45291c665402.png?v=1724745523&width=1080" // Replace with actual image path
          alt="Metaman Fragrance"
          width={800}
          height={600}
          className="rounded-lg"
        />
        
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 text-left p-6">
        <h2 className="text-3xl font-bold mb-4">Halo by Metaman</h2>
        <p className="text-gray-300 mb-6">
          Inspired by the glow of a halo, Ha1o captures the inner light and
          strength that drives us. Crafted for the champion within, each scent
          in the Ha1o collection has been personally handpicked by KL Rahul to
          embody the spirit of excellence. Whether it&apos;s a fresh burst of
          energy or a bold, unforgettable presence, Ha1o fragrances empower you
          to shine in every moment.
        </p>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded">
          READ MORE
        </button>
      </div>
    </div>
    <div>
    <div className="relative w-full min-h-screen bg-black text-white flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20">
        {/* Right Image */}
        <div className="relative md:hidden w-full">
          <Image
            src="https://metaman.in/cdn/shop/files/SHR_0203_copy_767df167-8d8f-41a1-8a24-3116d1813e84.jpg?v=1720950119&width=1080" // Ensure the image is in the public folder or update the path
            alt="Halo by Metaman"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold">Halo by Metaman</h2>
          <p className="text-lg">
            Inspired by the glow of a halo, Ha1o captures the inner light and
            strength that drives us. Crafted for the champion within, each scent
            in the Ha1o collection has been personally handpicked by KL Rahul to
            embody the spirit of excellence.
          </p>
          <button className="bg-gray-800 px-6 py-2 rounded hover:bg-gray-700">
            READ MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="relative hidden md:block w-full">
          <Image
            src="https://metaman.in/cdn/shop/files/SHR_0203_copy_767df167-8d8f-41a1-8a24-3116d1813e84.jpg?v=1720950119&width=1080" // Ensure the image is in the public folder or update the path
            alt="Halo by Metaman"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default About;
