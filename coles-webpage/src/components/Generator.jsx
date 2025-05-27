import Header from "./reuse/Header";
import Footer from "./reuse/Footer"

const Generator = () =>{

    return(
        <div>
        <Header />
            <div>
                <button>PRESS ME</button>
            </div>

            <div>
                <p>THIS IS ADIVCE</p>
            </div>
            <Footer />
        </div>
    )

}

export default Generator;