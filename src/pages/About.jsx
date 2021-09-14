import useFetch from "../customHook/useFetch";

const About = ()=>{  
    const {data: abouts, isPending, error} = useFetch('http://localhost:8000/aboutUs'); 


    return ( 
        <>   
            {abouts &&  
                <>
                    {abouts.map(about=>(
                        <div className="about-us" key={about.id}> 
                            <h3>{about.title}</h3>  
                            <p>{about.body}</p>
                        </div> 
                    ))}
                </> 
            }
        </> 
    )
}

export default About;