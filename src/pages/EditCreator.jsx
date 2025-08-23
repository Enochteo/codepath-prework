import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './AddCreator.css'

const EditCreator = ({data}) => {
    const {id} = useParams();
    const [creator, setCreator] = useState({id: null, name: '', description:'', url:'', img:''})

    useEffect(() => {
        const fetchCreator = async() => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            if (data) setCreator(data);
        }
        fetchCreator()
    }, [id]);
    //API Call
    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({name: creator.name, description: creator.description, url:creator.url, img:creator.img})
            .eq('id', id);
        window.location = '/';
    }

    const deleteCreator = async(event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id)
        window.location = '/';
    }
    
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
        <div className="creator-container">
          <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={creator.name} onChange={handleChange}/>
                <br />

                <label htmlFor="desc">Description</label>
                <input type="text" name="description" id="desc" value={creator.description} onChange={handleChange} />
                <br />

                <label htmlFor="url">URL</label>
                <input type="text" name="url" id="url" value={creator.url} onChange={handleChange} />
                <br />

                <label htmlFor="img">Image URL</label>
                <input type="text" name="img" id="img" value={creator.img} onChange={handleChange} />
                <br />

                <input type="submit" value='Submit' onClick={updateCreator} />
                <button className="deleteButton" onClick={deleteCreator}>Delete</button>
            </form>  
        </div>
    )
}

export default EditCreator;