//import trackOrder2 from '../../../public/track-order.gif'
import { Header } from '../../Components/Header'
import './TrackingPage.css'

export function TrackingPage() {
    return (
        <>
            <title>Tracking</title>
            <Header />
            <div className='track-heading'>
                <div className='track-text'>Track your Order</div>
                <img className='trakin-animation'></img>
            </div>

            <div className='tracking-container'>
                  
            <progress value="50" max="100"> 100% </progress>
            </div>
        </>


    )
}