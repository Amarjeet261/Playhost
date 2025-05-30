import Collection from "@/Components/Collection/Collection";
import DownloadNow from "@/Components/DownloadNow/DownloadNow";
import FAQ from "@/Components/FAQ/FAQ";
import Features from "@/Components/Features/Features";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Rating from "@/Components/Rating/Rating";
import Server from "@/Components/Server/Server";
import Unlock  from "@/Components/Unlock/Unlock";

export default function Home() {
  return (
    <>
    <Header/>
    <Features/>
    <Unlock/>
    <Rating/>
    <Server/>
    <Collection/>
    <FAQ/>
    <DownloadNow/>
    <Footer/>
    
    </>
  );
}
