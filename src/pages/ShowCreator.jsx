import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"
import Card from "../components/CreatorCard";


const ShowCreator = () => {
    const { id } = useParams()
    const [creator, setCreator] = useState(null)
    useEffect(() => {
        const getCreator = async() => {
        const { data } = 
            await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single()
            setCreator(data)
    }
    getCreator()
    }, [id])
    if (!creator) return <div>Loading...</div>
    return(
        <div> 
            <Card 
                        key={creator.id} 
                        id={creator.id} 
                        name={creator.name} 
                        description={creator.description} 
                        url={creator.url} 
                        img={creator.img} 
                    />
        </div>
    )
}

export default ShowCreator;