import React from 'react';

import "./SearchStyles.css";
import logo01 from "../../assets/logo01.jpg";

function Search() {
    return (
        <div name='search' className='search'>
            <div className="container">
                <div className="left">
                    <h2>True spirit of a Ride is through the Storm beating the shit out of you . </h2> <br/>
                    <p>Royal Enfield is one of the oldest motorcycle companies, with a history stretching back centuries. Royal Enfield motorcycles are manufactured in India. The original Bullet model is still one of the most beloved and longest-running motorcycles, and its fame has spread across many countries. The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production. The company operates manufacturing plants in Chennai in India.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={logo01} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING </h3>
                                <p>Royal Enfield is an Indian multinational motorcycle</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NUMBER ONE COMPANY</h3>
                                <p>BIKES MADE FOR ALL-ROADs AND NO-ROADs</p>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET ADDITONAL 50% OFF</h4>
                        <p className="timer">THIS DIWALI !</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                    <div className='input-wrap'>
                        <label>Bikes</label>
                        <select>
                            <option value="1">Hunter 350</option>
                            <option value="1"> Scram 411</option>
                            <option value="1"> Classic 350</option>
                            <option value="1"> Meteor 350</option>  
                            <option value="1">Thunder Bird 350</option> 
                            <option value="1"> Interceptor</option>
                            <option value="1"> Continental GT</option>
                            <option value="1"> Himalayan</option>  
                        </select>
                    </div>
                    <div className='date'>
                        <div className='input-wrap'>
                            <label> Book test rides  </label>
                                <input type='date' />
                           
                        </div>
                        <div className='input-wrap'>
                            <label> Confirm Booking </label>
                                <input type='submit' className='btn' />
                            
                        </div>
                    </div>
                    <button> Get Strated</button>
                </form>
            </div>
        </div>
    </div>
  )
}


export default Search;