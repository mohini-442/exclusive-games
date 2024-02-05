
import './App.css';
import Neusta from './components/Neusta';
import Mynav from './components/Mynav';
import Marca from './components/Marca';
import Porque from './components/Porque';
import Elegirnos from './components/Elegirnos';
import Silver from './components/Silver';
import Myheader from './components/Myheader';
import Sus from './components/Sus';
import Lanza from './components/Lanza';
import Jeugos from './components/Jeugos'
import Luxury from './components/Luxury';
import Ellos from './components/Ellos';
import Myaccordian from './components/Myaccordian';
import Lanza2 from './components/Lanza2';
import Myfooter from './components/Myfooter';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Loader from './components/Loader';
import Backtotop from './components/Backtotop';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className='bg-[#00141b] overflow-hidden'>
        <Loader/>
        <div className='bg-[url(./assets/images/heroimage.webp)] bg-cover w-full h-full bg-center bg-no-repeat min-h-[80vh] md:min-h-[100vh] flex flex-col'>
          <div className='bg-[url(./assets/images/navbg.webp)] bg-cover bg-center bg-no-repeat'>
            <Mynav />
          </div>
          <Myheader />
        </div>
        <Neusta />
        <div className="lg:bg-[url(./assets/images/whitebg1.png)] bg-full bg-center bg-no-repeat lg:py-[273px] bg-size ">
          <Marca />
        </div>
        <div className='bg-[url(./assets/images/bgimage2.webp)] bg-cover w-full h-full bg-center bg-no-repeat pb-[143px] pt-[60px]'>
          <Sus />
          <Lanza />
          <Jeugos />
        </div>
        <div className='lg:bg-[url(./assets/images/bgwhite2.png)]  bg-center bg-no-repeat lg:py-[243px] bg-size w-full h-full'>
          <Porque />
        </div>
        <Elegirnos />
        <Silver />
        <Luxury />
        <Ellos />
        <Myaccordian />
        <Lanza2 />
        <Myfooter />
        <Backtotop/>
      </div>
    </>
  );
}

export default App;
