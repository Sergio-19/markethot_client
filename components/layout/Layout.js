import Head from 'next/head'
import Footer from '../footer/Footer';
import Header from '../header/Header'



const Layout = ({children}) => {
    return(
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main">
            <Header />
            <div className='container'>
                {children}
            </div>
            <Footer />        
        </div>
        </>
        
    )
}

export default Layout;