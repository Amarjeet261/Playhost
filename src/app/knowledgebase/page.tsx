"use client";
import Footer from "@/Components/Footer/Footer";
import { Faqs } from "@/Components/Knowledgebase/SubFaq/Faqs";
import Header from "@/Components/Knowledgebase/SubHeader/Header";
import Navbar from "@/Components/Navbar/Navbar";

export default function know() {
    return(
       <div className="">
        <Navbar/>
        <Header/>
        <Faqs/>
        <Footer/>
       </div>
    )
}