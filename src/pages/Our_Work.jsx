import React from 'react'
import '../css/ourWork.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

import { InstagramEmbed } from 'react-social-media-embed';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css";
import "swiper/css";

export default function Our_Work() {
    return (
        <div className='our-work-page'>
            <div className='top'>
                <div className='contact-top-bar' id='#top'>
                    <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
                </div>
                <div>
                    <a href="#photography">photography</a>
                    <a href="#videography">videography</a>
                </div>

                <div>
                    <h1>check out our work</h1>
                    <p></p>
                </div>

                <div className='video-background'>
                    <iframe src="https://www.youtube.com/embed/kPjIu5laeTg?si=qpe3gYyt__agqVh-?loop=1&controls=0&showinfo=0&rel=0&autoplay=1&mute=1" frameBorder='0' allowFullScreen></iframe>
                </div>
            </div>


            <div className='youtube-content'>
                <h1>HIGHLIGHTS</h1>

                <Swiper className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

                <div className='section row'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/9zDUE2rVqrk?si=axII55wRMRNLiXzW&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Boxing Cinematic</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/ABxbSUmVDAg?si=DAO-HtJSNDFhY92R&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>LZ World Tour 2023</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>

                <div className='section row'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/JuOrkGhKwbc?si=5xXio095zuq4bt_c&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Custom Glass Railings</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/e75xO0AavQQ?si=OEMAv27ECtJSyWGb&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Stairs 4u</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>

                <div className='section row'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/sPkOKKX9NQA?si=TUhnFYrBpSg0haEU&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Stairs 4u</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/eGEUnLA9v6A?si=AykSzxE6R-QAxBke&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Tri-Temp & CGR</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>

                <div className='section row'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/sPkOKKX9NQA?si=TUhnFYrBpSg0haEU&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Millworx</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/eGEUnLA9v6A?si=AykSzxE6R-QAxBke&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Millworx</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>

                <div className='section row'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/Do0sUfW5SU0?si=L7c1PUjeRH4uh2-2&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Stairs 4u</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/RA_snXyzdzE?si=ASMU970senIJhNKT&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Stairs 4u</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
            </div>

            <div className='instagram-content'>

                <InstagramEmbed url="https://www.instagram.com/p/C5qwW6MrZuC/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5GNZQ3uHWz/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5ZUmX8r160/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5en2ySryXd/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C0SjExyA5cH/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/CrdcROoAhaI/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C4_FPMLOEFJ/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C3-4ueiu63i/" width={328} />

            </div>
        </div>
    )
}
