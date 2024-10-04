import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Carousel.css';

function CarouselComponent() {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
        >
            <div>
                <img src="https://static.toiimg.com/thumb/msid-103770399,width-748,height-499,resizemode=4,imgsize-228902/.jpg" alt="Ganesh Chaturthi" />
                <p className="legend">Ganesh Chaturthi</p>
            </div>
            <div>
                <img src="https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Eid-day-at-Jama-Masjid-Delhi-India.jpg" alt="Mumbai City" />
                <p className="legend">Eid Celebration</p>
            </div>
            <div>
                <img src="https://w0.peakpx.com/wallpaper/104/740/HD-wallpaper-india-muthirapuzha-kerala-fog-nature-kerala-landscape.jpg" alt="Mumbai City" />
                <p className="legend">Valleys in Kerela</p>
            </div>
            <div>
                <img src="https://img.freepik.com/premium-photo/indian-farmer-bull-cart_75648-2326.jpg" alt="Mumbai City" />
                <p className="legend">Local Farmer</p>
            </div>
            <div>
                <img src="https://thumbs.dreamstime.com/b/konkan-maharashtra-india-june-farmers-work-farm-monsoon-season-konkan-maharashtra-india-june-farmers-working-farm-124031146.jpg" alt="Mumbai City" />
                <p className="legend">Konkan Village</p>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;