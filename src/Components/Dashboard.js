import SiteStatistics from './Statistics Components/SiteStatistics';
import RecentActivity from './Statistics Components/RecentActivity';
import QuickLinks from './Statistics Components/QuickLinks';


export default function Dashboard(){
    return(
        <div className=''>
                <SiteStatistics />
                <RecentActivity />
                <QuickLinks />
            </div>
    )
}