import Footer from "@/Components/Footer/Footer"
import Navbar from "@/Components/Navbar/Navbar"
import NewsContainer from "@/Components/News/NewsContainer/NewsContainer"
import SubHeader from "@/Components/News/SubHeader/SubHeader"
export default function News(){
    return(
        <section className="">
            <Navbar/>
            <SubHeader/>
            <NewsContainer/>
            <Footer/>
        </section>
    )
}