import cheesecake from '../assets/cheesecake.png';
import seafood from '../assets/seafood.png';

export default function About() {
    return (
        <div className="aboutSection">
            <div className="aboutText">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </div>
            <div className="imageStack">
                <div className='imageStackItem topImage' >
                    <img src={cheesecake} style={{ width: "250px", height: "300px", borderRadius: "2px" }} />
                </div>
                <div className='imageStackItem bottomImage'>
                    <img src={seafood} style={{ width: "250px", height: "300px", borderRadius: "2px" }} />
                </div>
            </div>
        </div>
    )
}