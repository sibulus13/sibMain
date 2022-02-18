import Header from './Header'
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className='page'>
            <Header />
            <main className='main'>{children}</main>
            <Footer/>
        </div>
    )
}