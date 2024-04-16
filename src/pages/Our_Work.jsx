import React from 'react'
import '../css/ourWork.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';


export default function Our_Work() {
    return (
        <div>
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

            <iframe width="100%" height="1000px" src="https://www.youtube.com/embed/kPjIu5laeTg?si=qpe3gYyt__agqVh-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9zDUE2rVqrk?si=axII55wRMRNLiXzW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ABxbSUmVDAg?si=DAO-HtJSNDFhY92R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                Custom Glass Railings
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JuOrkGhKwbc?si=5xXio095zuq4bt_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eGEUnLA9v6A?si=AykSzxE6R-QAxBke" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                Stairs4u
                <iframe width="560" height="315" src="https://www.youtube.com/embed/e75xO0AavQQ?si=OEMAv27ECtJSyWGb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sPkOKKX9NQA?si=TUhnFYrBpSg0haEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Do0sUfW5SU0?si=L7c1PUjeRH4uh2-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RA_snXyzdzE?si=ASMU970senIJhNKT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
            <div>

                {/* <InstagramEmbed url="https://www.instagram.com/p/C5qwW6MrZuC/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5GNZQ3uHWz/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5ZUmX8r160/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C5en2ySryXd/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C0SjExyA5cH/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/CrdcROoAhaI/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C4_FPMLOEFJ/" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/C3-4ueiu63i/" width={328} /> */}

            </div>
        </div>
    )
}
