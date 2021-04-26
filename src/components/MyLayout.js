import React, {Component} from 'react'
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    const {header} = props
    return (
        <>
        <div className="wrapper">
            <Header header={header}/>
            {/*MAIN SECTION*/}
            {props.children}
        </div>
        {/*Footer Section*/}
        <Footer footer={header}/>
    </>
    )
}
export default Layout
