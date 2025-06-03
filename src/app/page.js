import AboutPage from "@/Components/AboutPage";
import Blogs from "@/Components/Blogs";
import Booking from "@/Components/Booking";
import Contact from "@/Components/Contact";
import Destinations from "@/Components/Destinations";
import FooterPage from "@/Components/FooterPage";
import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";
import Packages from "@/Components/Packages";
import Testmonial from "@/Components/Testmonial";
import Users from "@/Components/Users";


export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Navbar/>

        </div>
        <div>
         <HomePage/>
        </div>
      
  <div className="pt-10">
    <AboutPage/>
  </div>


  <div className="pt-12">
    <Packages/>
  </div>

  <div className="pt-12">
   <Users/>
  </div>


   <div className="pt-12">
  <Destinations/>
  </div>

  <div className="pt-12">
  <Testmonial/>
  </div>


   <div className="pt-12">
  <Booking/>
  </div>


 <div className="pt-12">
  <Blogs/>
  </div>


   <div className="pt-12">
  <Contact/>
  </div>

   <div className="pt-12">
     <FooterPage/>
  </div>

      </main>
    
    </div>
  );
}
