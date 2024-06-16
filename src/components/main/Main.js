import mainimg from '../../img/main.jpg'

export default function Main() {
    return (
        <main className="hero">
        <div className="container">
            <h1>
            Amazing Discounts
            <br />
            on Garden Products!
            </h1>
            <a href="#" className="btn">Check out</a>
        </div>
        <img src={mainimg} className="hero__bg" alt="hero" />
        </main>
    )
}
