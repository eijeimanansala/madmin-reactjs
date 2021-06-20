import React from 'react'


import Navbar from './components/layout/Navbar'
import Stats from './Stats'
import Posts from './Posts'
import Footer from './Footer'

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Stats />
            <Posts />
            <Footer />
        </React.Fragment>
    )
}

export default App