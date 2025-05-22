import { useState } from "react";

const SongForm = () =>{
const [formData, setFormData] = useState({
    name: "",
    email:"",
    phone:"",
    title:"",
    genre:"",
    style:"",
    instruments:[],
    lyrics:"",
    length:"",
    forSomeone:"",
    emotions:"",
    extraInfo:"",
    bounceType:""

});


const handleChange = (e) =>{
    const {name, value, type, checked} = e.target;

    if(name === "instruments"){
        setFormData((formData) =>{
            const updated = checked 
            ? [...formData.instruments, value]
            : formData.instruments.filter((instrument) => instrument !== value);
            return{
                ...formData,
                instruments: updated
            };

        });
    } else {

    setFormData((formData) => ({
        ...formData,
        [name]: type === "checkbox" ? checked : value
    }));
}
}



    return(
        <div className="songForm"> 
            <h1>Song Form</h1>

            <form>

            <label for="name"> Name: 
            <input type="text" id="name" name="name" placeholder= "John Doe" value={formData.name} onChange={handleChange} required></input>
            </label>
            <br />

            <label for="email"> Email:
            <input type="email" id="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required></input>
            </label>
            <br />

            <label for="phone">Phone:
            <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" value={formData.phone} onChange={handleChange}></input>
            </label>

            <hr/>

            <label for="title">Title:
            <textarea type="text" id="title" name="title" rows="1" cols="30" maxLength="100" placeholder="Enter a title or put working" ></textarea>
            </label>
            <br />

            <label for="genre">Genre:
                <select id="genre" name="genre" value={formData.genre} onChange={handleChange}>
                <option value="">select genre</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="folk">Folk</option>
                <option value="country">Country</option>
                <option value="blues">Blues</option>
                <option value="any">Any</option>               
                </select>
            </label>
            <br />

            <label for="style">Style:
            <textarea type="text" id="style" name="style" rows="4" cols="40" maxLength="400" placeholder="Eleborate on more specific genres. Feel free to use standards like Classic Rock, or create your own and be descriptive " value={formData.style} onChange={handleChange}></textarea>
            </label>
            <br />

            <label for="instruments">Instruments:
            <input 
            type="checkbox" 
            name="instruments" 
            value="acoustic"
            checked={formData.instruments.includes("acoustic")} 
            onChange={handleChange} />
            Acousitc Guitar
            </label>



            </form>
        </div>
    )   

}  

export default SongForm;