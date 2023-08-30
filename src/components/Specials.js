import bruschetta from '../assets/bruschetta.jpeg';
import ingredients from '../assets/ingredients.jpeg';
import dinnerPack from '../assets/dinnerPack.jpeg';
import bicycle from '../assets/bicycle.svg';

export default function Specials() {
    return (
        <div className='specials-container'>
            <div className='specials-header'>
                <h1>Specials</h1>
                <button className='button'>Online Menu</button>
            </div>
            <div className='card-container'>
                <div className='card' style={{ width: "300px", border: "1px solid #8fb0a3" }}>
                    <img className='card-image-top' src={bruschetta} style={{ height: "180px" }} />
                    <div className='card-body'>
                        <h5 className="card-title">Bruschetta</h5>
                        <p className="card-text">Grilled bread rubbed with garlic and topped with olive oil and salt.</p>
                        <a href="#" className="btn btn-warning">Order a Delivery <img src={bicycle} /></a>
                    </div>
                </div>

                <div className='card' style={{ width: "300px", border: "1px solid #8fb0a3" }}>
                    <img className='card-image-top' src={ingredients} style={{ height: "180px" }} />
                    <div className='card-body'>
                        <h5 className="card-title">Fresh Ingredients</h5>
                        <p className="card-text">You can order fresh ingredients and make tasty food in your own home!</p>
                        <a href="#" className="btn btn-warning">Order a Delivery <img src={bicycle} /></a>
                    </div>
                </div>

                <div className='card' style={{ width: "300px", border: "1px solid #8fb0a3" }}>
                    <img className='card-image-top' src={dinnerPack} style={{ height: "180px" }} />
                    <div className='card-body'>
                        <h5 className="card-title">Dinner Pack</h5>
                        <p className="card-text">Have guests for dinner and no time for cooking? Dinner Pack is for you!</p>
                        <a href="#" className="btn btn-warning">Order a Delivery <img src={bicycle} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}