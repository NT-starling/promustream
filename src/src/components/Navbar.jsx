


export default function Navbar() {


    return(
        <div className="drawer bg-primary">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <p href="/" className="flex-1 px-2 mx-2">Prowatch</p>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          
          <li><a href='/'><ion-icon name="home-outline" size='large'></ion-icon></a></li>
          <li><a href='/search'><ion-icon name="search-outline" size='large'></ion-icon></a></li>
          
        </ul>
      </div>
    </div>


  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
      {/* Sidebar content here */}

      
      
      <li><h2>Prowatch</h2></li>
      <li id='home'><a href='/'><ion-icon name="home-outline" size='large' ></ion-icon> Home</a></li>
      <li id='search'><a href='/search'><ion-icon name="search-outline" size='large'></ion-icon>Search</a></li>
      




    </ul>
    
  </div>
</div>

    )



}