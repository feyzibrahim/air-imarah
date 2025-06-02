import AboutPage from "@/Components/AboutPage";
import Blogs from "@/Components/Blogs";
import Booking from "@/Components/Booking";
import Destinations from "@/Components/Destinations";
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

      </main>
    
    </div>
  );
}
