import { motion, AnimatePresence } from "framer-motion"

import Header from './Header'
// import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <div className=''>
            <Header />
            {/* <main className=''> */}
            {children}
            {/* </main> */}
        </div>
    )
}