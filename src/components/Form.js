import {useState, useEffect} from 'react'

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  Form (props){
    //State to hold the data of our form
    const [formData, setFormData] = useState({
    searchterm: "",
});

 //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value})
};

const handleSubmit = (event) => {
    event.preventDefault()

    props.getMovie(formData.searchterm)
}

    //The component must return some JSX
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                name='searchterm'
                onChange={handleChange}
                />
                <input type='submit' 
                value='Submit'
                />
            </form>
        </div>
    )
}