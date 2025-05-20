import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./reuse/Header";
import Footer from "./reuse/Footer";
const MainPage = () =>{


    return(
        <div className="mainPage">
                <Header />

            <div id="welcome">
                <h1>Welcome!</h1>
            </div>

                <section id="mainButtons">
                    <button>About Me</button>
                    <button>Song</button>
                    <button>Generator</button>

                </section>

                <Footer/>
        
        </div>
    )


}

export default MainPage;