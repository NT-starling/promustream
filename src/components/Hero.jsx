export default function Hero(props) {


    return(
        <>
    <div className="hero min-h-screen bg-secondary">
        <div className="hero-content flex-col lg:flex-row">
            <img src={'https://image.tmdb.org/t/p/original' +  props.img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">{props.name}</h1>
            <h1 className="text-5xl font-bold">{props.title}</h1>
            <p className="py-6">{props.overview}</p>
            
            </div>
        </div>
    </div>

    </>
    )




}