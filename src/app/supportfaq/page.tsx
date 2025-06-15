import FAQ from "@/Components/FAQ/FAQ";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/Components/SupportFaq/SubContact/Contact";
import HeaderFaq from "@/Components/SupportFaq/SubHeader/HeaderFaq";

export default function SupportFaq(){
    return(
        <section className="">
            <Navbar/>
            <HeaderFaq/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </section>
    )
}