import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Students from '../../../components/Students/Students'
import Events from '../../../components/Events/Events'
import Services from '../../../components/Services/Services'

const Home = () => {
    const { data, setData } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Services />
            <Students />
            <Events />
        </>
    )
}

export default Home
