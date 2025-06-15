import Aboutus from "@/Components/About/Aboutus";
import SubHeader from "@/Components/About/SubHeader";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Rating from "@/Components/Rating/Rating";

export default function About(){
    return(
        <section className="">
            <Navbar/>
            <SubHeader/>
            <Aboutus/>
             <Rating />
            <Footer/>
        </section>
    )
}