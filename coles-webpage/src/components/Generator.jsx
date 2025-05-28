import Header from "./reuse/Header";
import Footer from "./reuse/Footer";
import {useState} from "react";
import AdviceBox from "./AdviceBox";

const Generator = () =>{
    const [selectedCategory, setSelectedCategory] = useState("");

    return(
        <div className="generator">
        <Header />
            <div>
            <h2>Choose a category for advice</h2>

                <div>
                    <button onClick={()=> setSelectedCategory("music")}>Music</button>
                    <button onClick={() => setSelectedCategory("poems")}>Poems</button>
                    <button onClick={() => setSelectedCategory("creativity")}>Creativity Quotes</button>
                </div>

                <span><AdviceBox category={selectedCategory}/></span>

            </div>
            <Footer />
        </div>
    )

}

export default Generator;