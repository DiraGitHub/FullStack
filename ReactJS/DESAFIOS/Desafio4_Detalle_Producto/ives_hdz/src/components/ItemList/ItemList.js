
import { Link } from 'react-router-dom';

import './ItemList.css'

const ItemList = ({ productsList }) => {
    return (
        <div className='cardsContainer'>
            {productsList.map(product => {
                return (
                    <>
                        <Link to={`/detail/${product.idProduct}`}>
                            <div key={product.idProduct} className='myCard adminView'>

                                <img src={`./imgs/${product.image}`} className='imgCard' alt={product.name}></img>
                                <div className='infoCard'>
                                    <div className='textCard'>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>

                                    <div className='buttonCard'>
                                        <button className='button'>COMPRAR {product.precio}</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>

                );
            })}
        </div>
    );
}

export default ItemList;