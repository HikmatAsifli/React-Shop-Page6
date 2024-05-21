import React from 'react'
import "./Students.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Students = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="students">
            <div className="container">
                <div className="row justify-content-center pt-5 pb-5">
                    <div className="section-heading">
                        <div className='section-item'></div>
                        <h2 className='heading black'>Subscribe to Newslater</h2>
                    </div>
                </div>
                <div className="row pb-5 pt-5">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className="slide-item">
                                    <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                            <div>
                                <div className="slide-item">
                                <span className='rod' style={{fontSize: "40px"}}>
                                        "
                                    </span>
                                    <p className='black'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam distinctio fugit culpa quaerat eligendi perspiciatis ipsa odit adipisci deleniti.
                                    </p>
                                    <img src="https://preview.colorlib.com/theme/course/images/testimonials_user.jpg.webp" alt="" />
                                    <p className='rod'>James Cooper</p>
                                    <span>Graduate Student</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Students