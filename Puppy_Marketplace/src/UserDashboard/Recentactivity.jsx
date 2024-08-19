import greencheck from '../assets/check-circle green.png'
import redcheck from '../assets/check-circle red.png'
import yellowcheck from '../assets/check-circle yellow.png'

const RecentActivity = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg" >
            <div className='flex flex-row justify-between'>
            <h2 className="text-xl text-sky-900 font-bold mb-2">Recent Activity</h2>
            <p className='text-blue-700'>View all</p>
            </div>
            
            <div>

                <hr/>

                <div className="flex justify-between mb-2">
                    <p>Complete Bio Info</p> 
                    <img src={greencheck}/>
                </div>

                <hr/>

                <div className="flex justify-between mb-2">
                    <p>Complete payment for last order</p> 
                    <img src={greencheck}/>
                </div>

                <hr/>

                <div className="flex justify-between mb-2">
                    <p>Connect with more buyers</p> 
                    <img src={yellowcheck}/>
                </div>

                <hr/>

                <div className="flex justify-between mb-2">
                    <p>Add 3 more images of your puppy listing</p> 
                    <img src={redcheck}/>
                </div>

                <hr/>

            </div>
        </div>
    );
};

export default RecentActivity;
