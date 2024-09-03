import Puppy1 from '../assets/Puppy 1.png'
import Puppy2 from '../assets/Puppy 2.png'
import Heart from '../assets/heart.png'

function RecentlyViewed() {
    return (
        <div className="container mx-auto p-4">
            {/* Recently Viewed Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Recently Viewed</h2>
                <a href="#" className="text-blue-500">View all</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[Puppy1, Puppy2, Puppy1, Puppy2].map((puppy, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src={puppy} alt={`Puppy ${index + 1}`} className="w-full h-auto object-cover" />
                            <div className="absolute px-4 py-4 top-96 left-96 sm:top-64 sm:left-56 lg:top-64 lg:left-56 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white">
                                <img src={Heart} className="lg:h-6 lg:w-6 sm:h-4 sm:w-4 focus:bg-yellow-400" alt="Heart Icon" />
                            </div>
                            <span className="absolute top-2 left-2 bg-sky-900 text-white px-2 py-1 text-xs font-bold rounded">-14%</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Luna</h3>
                            <p className="text-black font-bold text-sm">Labrador Retriever Breed</p>
                            <p className="text-black text-xs mt-1">A playful and friendly puppy who loves to fetch.</p>
                            <p className="text-black font-bold mt-2">GH¢<span className="text-sky-900">24,117.84</span></p>
                            <p className="text-yellow-500 line-through text-xs">GH¢ 28,044.00</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top Offers Section */}
            <div className="flex justify-between items-center mt-8 mb-4">
                <h2 className="text-lg font-bold">Top Offers</h2>
                <a href="#" className="text-blue-500">View all</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[Puppy1, Puppy2, Puppy1, Puppy2].map((puppy, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                        <div className="relative">
                            <img src={puppy} alt={`Puppy ${index + 1}`} className="w-full h-auto object-cover" />
                            <div className="absolute px-4 py-4 top-96 left-96 sm:top-64 sm:left-56 lg:top-64 lg:left-56 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white">
                                <img src={Heart} className="lg:h-6 lg:w-6 sm:h-4 sm:w-4 focus:bg-yellow-400" alt="Heart Icon" />
                            </div>
                            <span className="absolute top-2 left-2 bg-sky-900 text-white px-2 py-1 text-xs font-bold rounded">-30%</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Luna</h3>
                            <p className="text-black font-bold text-sm">Labrador Retriever Breed</p>
                            <p className="text-black text-xs mt-1">A playful and friendly puppy who loves to fetch.</p>
                            <p className="text-black font-bold mt-2">GH¢<span className="text-sky-900">24,117.84</span></p>
                            <p className="text-yellow-500 line-through text-xs">GH¢ 28,044.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentlyViewed;
