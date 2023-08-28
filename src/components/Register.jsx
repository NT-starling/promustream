import { createSignal } from 'solid-js'
import { useNavigate } from 'solid-start'

import './Register.css'

import { supabase } from '../../server/Supabase'
import { redirect } from 'solid-start'

export default function Register() {
    

    const [email,setEmail] = createSignal()

    const [password,setPassword] = createSignal()
    const navigate = useNavigate();

    async function logUser() {
        await supabase.auth.signInWithPassword({email:email(),password:password()})
        navigate('/')
        
    }


    return (

        <div id="card">
        <div className="card w-96 bg-secondary shadow-xl" id='card-cont'>
            
            <div class="form-control w-full max-w-xs m-2">

                <input type="text" placeholder="Enter email" class="input input-bordered w-full max-w-xs" id='email' name = 'email' oninput={(e) => {


                    setEmail(e.currentTarget.value)




                }}/>





            </div>


            <div class="form-control w-full max-w-xs m-2">

                <input type="text" placeholder="Enter password" id='password' name = 'password' class="input input-bordered w-full max-w-xs" oninput={(e) => {


                    setPassword(e.currentTarget.value)



                }}/>


                
                

            </div>
            
            <button class='btn btn-primary m-6' onClick={()=> logUser()}>Login</button>
        </div>

        </div>

    )








}