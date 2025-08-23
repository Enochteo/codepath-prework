import { useState } from 'react'
import { supabase } from '../client'
import './AddCreator.css'

const AddCreator = () => {
    const [creator, setCreator] = useState({name: '', description:'', url:'', img:''})
    //API Call
    const addCreator = async (event) => {
        event.preventDefault()
        await supabase
            .from('creators')
            .insert({name: creator.name, description: creator.description, url:creator.url, img:creator.img})
            .select();
        window.location = '/';
    }
    //Event handler
    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator( (prev) => {
            return {
                ...prev, 
                [name]:value,
            }
        })
    }
    return (
        <div className='creator-container'>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>
                <br />

                <label htmlFor="desc">Description</label>
                <input type="text" name="description" id="desc" onChange={handleChange} />
                <br />

                <label htmlFor="url">URL</label>
                <input type="text" name="url" id="url" onChange={handleChange} />
                <br />

                <label htmlFor="img">Image URL</label>
                <input type="text" name="img" id="img" onChange={handleChange} />
                <br />

                <input type="submit" value='Submit' onClick={addCreator} />
            </form>
        </div>
    )
}

export default AddCreator;