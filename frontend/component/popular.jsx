const Populars = () => {
    return (  
        <main className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">POPULAR ARTICLES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <a href="#" className="transition transform hover:shadow-lg hover:scale-[1.015] bg-white border border-gray-300 p-4 block">
          <Image 
              src="https://images.unsplash.com/photo-1708101971165-32d20e48d070" 
              alt="Graph" 
              layout="responsive" 
              width={700} 
              height={500} 
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <span className="text-xs border px-2 py-1 inline-block mb-2 font-medium">OUR STORY</span>
            <h2 className="text-lg font-bold mb-2">Beyond PaaS - A smarter approach to cloud-native development in 2025</h2>
            <p className="text-sm mb-4">Encore aims to be a flexible alternative to PaaS that lets you own your cloud.</p>
            <span className="text-xs">28 FEB 2025</span>
          </a>
        
          <a href="#" className="transition transform hover:shadow-lg hover:scale-[1.015] bg-white border border-gray-300 p-4 block">
          <Image 
              src="https://images.unsplash.com/photo-1609879141928-c7edbf2fbce0" 
              alt="Performance" 
              layout="responsive" 
              width={700} 
              height={500} 
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <span className="text-xs border px-2 py-1 inline-block mb-2 font-medium">DEVELOPMENT</span>
            <h2 className="text-lg font-bold mb-2">Encore.ts — 9x faster than Express.js, 3x faster than ElysiaJS & Hono</h2>
            <p className="text-sm mb-4">Combining Node.js with Async Rust for remarkable performance</p>
            <span className="text-xs">17 JUN 2024</span>
          </a>
    
          <a href="#" className="transition transform hover:shadow-lg hover:scale-[1.015] bg-white border border-gray-300 p-4 block">
          <Image 
              src="https://images.unsplash.com/photo-1610036019305-64bd3c04d79a" 
              alt="Queueing" 
              layout="responsive" 
              width={700} 
              height={500} 
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <span className="text-xs border px-2 py-1 inline-block mb-2 font-medium">DEVELOPMENT</span>
            <h2 className="text-lg font-bold mb-2">Queueing</h2>
            <p className="text-sm mb-4">An interactive study of queueing strategies</p>
            <span className="text-xs">22 MAY 2024</span>
          </a>
    
        </div>
      </main> 
    );
}
 
export default Populars;