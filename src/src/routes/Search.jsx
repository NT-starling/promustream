
import './Search.css';
import { createSignal } from 'solid-js';

import { For } from 'solid-js';

import { createResource } from 'solid-js';

import { Show } from 'solid-js';




const fetchMovies = async(q) => {

  
  const request =  await (await fetch(`https://api.themoviedb.org/3/search/multi?query=${q}&api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`)).json()
  const data = JSON.parse(JSON.stringify(request).replace(/\:null/gi, "\:\"\"").replace(/-/g, '/'));
  console.log(data)
  return data
}








function Search() {


  

  let [movie,Setmovies] = createSignal()
  let [data] = createResource(movie,fetchMovies)
  
  

  

  return (
    
    <>
    



      <div className="input-cont">
      <input
        type="text"
        
        placeholder= {'search'}
        className='input input-bordered input-primary'
        
        onInput={(e) => {
          
          if (e.currentTarget.value.length > 0) {
              

            


          }



        }}


        onKeyUp={(e) => {


          if (e.currentTarget.value.length >0) {

            if (e.key === 'Enter') {


              Setmovies(e.currentTarget.value)

            }



          }


        }}
      />
      </div>






      


    
      <span>{data.loading && <span class="loading loading-spinner loading-xs"></span>}</span>
      <div class='row-container'>
        <Show when={data()}> {}  
            <For each={data().results}>{(movie) =>
              

              <>

             





              <a className="card w-96 bg-base-100 shadow-xl image-full m-2" href={'/preview/' + movie.media_type + '/' + movie.id} id='row'>
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


export default Search;
