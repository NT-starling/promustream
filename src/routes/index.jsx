import './Home.css'
import { createSignal } from 'solid-js';
import { For } from 'solid-js'
import { Show } from 'solid-js';
import { createResource } from 'solid-js';
import { supabase } from '../../server/Supabase';
import Hero from '~/components/Hero';
import { redirect } from 'solid-start';
const apiKey = 'b1cb5f9ac574441a7b5b26e4c42f68c0';
const baseUrl = 'https://api.themoviedb.org/3';

import './Search.css'



const [overview,setOverview] = createSignal()

const [title,setTitle] = createSignal()

const [name,setName] = createSignal()

const [poster,setPoster] = createSignal()

const [url,setUrl] = createSignal()
export default function Home() {



    


    

    const fetchMovies = async(q) => {

        //const request =  await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`)).json()


        const request =  await ((await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`))).json()
        const data = JSON.parse(JSON.stringify(request).replace(/\:null/gi, "\:\"\""));
        console.log(data)
        return data
      }
    // Function to fetch trending TV shows
    let [movie,Setmovies] = createSignal()
    let [data] = createResource(movie,fetchMovies)

    Setmovies('yo')
    

        
    const recommendMovie = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`);
          const data = await response.json();
      
          // Extract the first movie from the results array
          const firstMovie = data.results[0];
      
          if (firstMovie) {
            console.log("First Recommended Movie:", firstMovie);
            return firstMovie;
          } else {
            console.error("No movies found in the response.");
            return null;
          }
        } catch (error) {
          console.error("An error occurred:", error);
          throw error;
        }
      };
      
        
    const recommendation = recommendMovie().then(info => {



        setName(info.name)
        setTitle(info.title)
        setOverview(info.overview)
        setPoster(info.poster_path)
    })

    console.log(recommendMovie().catch(error => {
        console.error("Failed to fetch movie:", error);
      })
      )


    console.log(title())
    return (


        <>
        
        
        <div class='row-container'>
        <Show when={data()}> {}  

            <Hero img = {poster()} name= {name()} title = {title()} overview = {overview()}></Hero>

            <For each={data().results}>{(movie) =>
              

              <>

             


              <a className="card w-96 bg-secondary shadow-xl image-full m-2" href={'/preview/' + 'movie' + '/' + movie.id} id='row'>
                  <figure><img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 class="card-title">{movie.name}</h2>
                    <h2 class="card-title">{movie.title}</h2>
                  
                    <div className="info-container">
                     <ion-icon name="star" id='rating'></ion-icon>


                    <label class='m-2' for='rating'>{movie.vote_average}</label>
                    <p>{movie.release_date}</p>
                    </div>

                  </div>
              </a>





           </>
            }</For>
        </Show>
      </div>
        
        </>





    )



}