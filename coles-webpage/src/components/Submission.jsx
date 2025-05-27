import SongForm from "./SongForm";
import Header from "./reuse/Header";


const Submission = () =>{
    return(
        <div className="submitPage">
        <Header />

            <div>
                <h2>SUBMITTED SUCCESSFULLY</h2>
            </div>

            <section>
                Congrats, you submitted the Song Form!
                I will reach out to you via the email you provided
                to give you an invoice, and outline the next steps in the 
                optional revision of your song!
                If you have more questions, reach out to me via email

            </section>
        </div>
    )

}

export default Submission;