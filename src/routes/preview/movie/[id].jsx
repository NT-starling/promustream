import { createSignal } from 'solid-js';
import { useParams } from '@solidjs/router';
import { For } from 'solid-js';

import { createResource } from 'solid-js';
import './Series.css'
import { Show } from 'solid-js';





const fetchMovie = async(q) => {

  
    const request =  await (await fetch(`https://api.themoviedb.org/3/movie/${q}?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`)).json()
    const data = JSON.parse(JSON.stringify(request).replace(/\:null/gi, "\:\"\""));
    
    return data
  }






export default function Preview() {

    const params = useParams()

    let [movie,Setmovie] = createSignal()
    let [data] = createResource(movie,fetchMovie)

    let [id,setId] = createSignal()

    
    


    

    Setmovie(params.id)
    //url(https://image.tmdb.org/t/p/original${data().backdrop_path}
    return (

        <>
        <p>{data.loading && "Loading..."}</p>
        <Show when={data()}>
            
                

                
 
                
                
                <div class="cont">
                    
  
                    <iframe src={`https://vidsrc.to/embed/movie/${useParams().id}`} width = '1280px' height='720px' frameborder="0" ></iframe>


                    <div class="card w-96 bg-base-100 shadow-xl ">
                    <h1 class='title'>{data().title}</h1>

                    <h1 class='title'>{data().name}</h1> 
                        <figure><img src={'https://image.tmdb.org/t/p/original' + data().poster_path} alt="poster" class=''/></figure>

                    </div>

                </div>

                
                

                
 
        </Show>


        </>
    )

}