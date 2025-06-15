import ContactFrom from "@/Components/Contact/ContactFrom/ContactFrom";
import Header from "@/Components/Contact/SubHeader/Header"
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

export default function Contact(){
    return(
        <section>
            <Navbar/>
            <Header/>
            <ContactFrom/>
            <Footer/>
        </section>
    )
}