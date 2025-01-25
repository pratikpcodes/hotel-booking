import React from 'react'
import Header from './Header'
import Footer from './Footer'


// const Layout = (props: { children: React.ReactNode }) => {
//     return <div>{props.children}</div>;
//   };

const Layout = ({ children }) => {
    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <h1 className="flex-grow">{children}</h1> {/* Main content area */}
            <Footer />
        </div>
    )
}

export default Layout