import HeroPhoto from "../assets/HeroPhoto.jpeg"

export default function Hero() {
    return (
        <div className="heroContainer">
            <section className="heroSection">
                <div className="heroText">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.
                    </p>
                    <button className="button">Reserve a Table</button>
                </div>
                <img src={HeroPhoto} className="heroImage" />
            </section>
        </div>
    )
}