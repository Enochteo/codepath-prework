import { useState, useEffect } from "react";
import Card from "../components/CreatorCard";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const ViewCreators = (props) => {
    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchCreators = async() => {
            const {data} = await supabase
            .from('creators')
            .select()
            .order('created_at', { ascending: true })
        setCreators(data)
        }
        fetchCreators();
    }, [props])
    return (
        <div className="card-grid">
            {
                creators && creators.length > 0 ?
                [...creators]
                .sort((a, b) => a.id - b.id)
                .map((creator, index) =>
                    <Card 
                        key={creator.id} 
                        id={creator.id} 
                        name={creator.name} 
                        description={creator.description} 
                        url={creator.url} 
                        img={creator.img} 
                    />
                ) : <h2>{'Add new creators to view'}</h2> 
            }
        </div>
    )
}

export default ViewCreators;