import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
  return (
    <div name="testimonials"  className=" max-h-100px flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit" >
       <Carousel infiniteLoop hstyle={{height: "100px"}}>
                <div>
                    <img src="/chick1.jpg" />
                    <p className="legend">Mellisa</p>
                    <p className="text-8xl">I Saw A doctor in no time!</p>
                </div>
                <div>
                    <img  src="/dude1.jpg" />
                    <p className="legend">Bryan</p>
                    <p className="text-8xl">My hemmroids are gone!</p>

                </div>
                <div>
                    <img src="chick2.jpg" />
                    <p className="legend">Nicole</p>
                    <p className="text-8xl">My Headaches are  gone!</p>

                </div>
                <div>
                    <img src="dude2.jpg" />
                    <p className="legend">Mathew</p>
                    <p className="text-8xl">I was In unberable pain, Thanks!</p>

                </div>
            </Carousel>
    </div>
  )
}

export default Testimonials
