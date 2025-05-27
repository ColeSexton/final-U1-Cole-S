import { Link } from "react-router-dom";
import Footer from "./reuse/Footer";
import Header from "./reuse/Header";

const Bio = () =>{

    return(   
        <div>
            <Header/>

            <img id="profilePic" src= "/profilePIC.jpg" alt="Cole in Colorado, in front of mountains."/>
         

            <p id="bioP">
                Hello! I am Cole Sexton. I am Musician, Audio Engineer, and aspiring Developer.<br />
                I truly  love everything about music: listening to it, playing it, creating it, you name it!<br />
                I'd be honored if you would check out my music at the links below. <br />
                I would also love to write you a song or soundscape. Whether its for a loved one, yourself,<br />
                or a project you are working on, I am eager to help! Find the Song Form below, let me know<br />
                the details, and you will have your own original song in no time! <br />
            </p>

                <div id="bioLinks">
                    <p>
                        <h3>Links to my Music</h3>
                        <br />
                        <Link to={'https://colesexton.bandcamp.com/album/before-the-people'} target="_blank">
                         <i class="fa-brands fa-bandcamp" />   
                        </Link> 

                        <Link><i class="fa-brands fa-spotify" /></Link>
                    </p>

                   
                </div>

               
        </div>
    )

}

export default Bio;