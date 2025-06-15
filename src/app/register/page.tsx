import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { RegisterForm } from "@/Components/Register/Register";

export default function (){
    return(
        <section className="">
            <Navbar/>
            <RegisterForm/>
            <Footer/>
        </section>
    )
}   