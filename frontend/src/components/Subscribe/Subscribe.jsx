import React from 'react'
import "./Subscribe.scss"

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="subsleft">
                            <h2>Register now and get a discount <span>50%</span> discount until 1 January</h2>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                            <a href="#">REGISTER NOW</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="subsright">
                            <h2>Search for your course</h2>
                            <form action="">
                                <input type="text" placeholder='Course Name' />
                                <input type="text" placeholder='Category' />
                                <input type="text" placeholder='Degree' />
                                <button>SEARCH COURSE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe