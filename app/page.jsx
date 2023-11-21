
import AboutUs from "./components/AboutUs";
import Build from "./components/Build";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import Newletter from "./components/Newletter";
import TopSellers from "./components/TopSellers";



export default async function Home() {
  
  return (
   <div className="w-full h-full">
  
    
    <HeroSection/>
    <TopSellers/>
    <Build/>
    <NewArrivals/>
    <AboutUs/>
    <Newletter/>

   </div>
  )
}
