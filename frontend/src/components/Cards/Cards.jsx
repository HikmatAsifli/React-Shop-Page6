import React, { useContext, useState } from "react";
import MainContext from "../../context/context";
import "./Cards.scss"
import { Link } from "react-router-dom";

const Cards = () => {
    const { data, addToBasket } = useContext(MainContext);
    const [inpVal, setInpVal] = useState("");
    const [sortBy, setSortBy] = useState(null);
    return (
        <section className="section1 pt-5">
            <div className="container">
                <div className="section-heading pb-5">
                    <div className="section-item"></div>
                    <h2 className="heading black">Subscribe to Newslater</h2>
                </div>
                <div className="row">
                    <input
                        value={inpVal}
                        onChange={(e) => {
                            setInpVal(e.target.value);
                        }}
                        className="col-lg-2"
                        type="text"
                        placeholder="Search "
                    />
                    <button
                        onClick={() => setSortBy({ field: "title", asc: true })}
                        className="btn btn-light mx-3 col-lg-2 "
                        
                    >
                        A-Z
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "title", asc: false })}
                        className="btn btn-light mx-3 col-lg-2 "
                    >
                        Z-A
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "price", asc: false })}
                        className="btn btn-light mx-3 col-lg-2 "
                    >
                        High To Low
                    </button>
                    <button
                        onClick={() => setSortBy({ field: "price", asc: true })}
                        className="btn btn-light mx-3 col-lg-2 "
                    >
                        Low To High
                    </button>
                    {data
                        .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
                        .sort((a, b) => {
                            if (!sortBy) {
                                return 0;
                            } else if (sortBy.asc == true) {
                                return a[sortBy.field] > b[sortBy.field]
                                    ? 1
                                    : b[sortBy.field] > a[sortBy.field]
                                        ? -1
                                        : 0;
                            } else if (sortBy.asc == false) {
                                return a[sortBy.field] < b[sortBy.field]
                                    ? 1
                                    : b[sortBy.field] < a[sortBy.field]
                                        ? -1
                                        : 0;
                            }
                        })
                        .map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 pt-5 pb-5">
                                <div className="card" key={item.id}>
                                    <img className="card-img-top" src={item.image} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.descriptio}</p>
                                        <h5 className="card-title">{item.price}</h5>
                                        <button className="btn btn-primary" onClick={()=> addToBasket(item._id)}  >Add to Cart</button>
                                        <Link to={`/detail/${item._id}`} className="btn btn-warning" >Detail Page</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;