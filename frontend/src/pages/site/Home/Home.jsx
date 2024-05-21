import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Students from '../../../components/Students/Students'
import Events from '../../../components/Events/Events'
import Services from '../../../components/Services/Services'
import Hero from '../../../components/Hero/Hero'
import Subscribe from '../../../components/Subscribe/Subscribe'
import Cards from '../../../components/Cards/Cards'

const Home = () => {
    const { data, setData } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero/>
            <Cards/>
            <Subscribe/>
            <Services />
            <Students />
            <Events />
        </>
    )
}

export default Home
