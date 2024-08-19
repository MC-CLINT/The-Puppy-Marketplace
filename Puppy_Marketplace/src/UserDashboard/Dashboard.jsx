import Sidebar from './Sidebar';
import Nav from './Navbar';
import Advertisement from './Advertisement';
import MyCart from './Mycart';
import NewOrders from './NewOrders';
import RecentActivity from './Recentactivity';
import SellPuppies from './SellPuppies';


export default function Dashboard() {
  return (
    <>
        <Nav/>
        <p className='text-2xl ml-80 mt-4 text-sky-900 font-bold'>Hi, Web Weavers</p>
        <div className='flex justify-between'>
            <Sidebar />
            <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
                <Advertisement />
            </div>
           
            <MyCart />
            <NewOrders />
        
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
                <RecentActivity />
            </div>
            <SellPuppies />
        </div>
        </div>
        
        
    </>
  )
}
