import styles from "./Home.module.css";
import bhanu from "../../assets/bhanu.JPG";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Card from '../UI/Card'
import { useEffect } from "react";
const Home = (props) => {
  useEffect(()=>{
    Aos.init({ duration:2000 })
  }, [])
  return (
    <div>
      <div className={styles.discimage} >
        {/*load the below div into another component  */}
        <div data-aos="fade-right" className={styles.disc}>
          <h2>I am Bhanu Chandar</h2>
          <h3>
            A passionate individual who always thrive to workon end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </h3>
        </div>
        <img data-aos="fade-left" className={styles.Discpicture} src={bhanu} alt="logo" />
    </div>
     {/*load the below div into another component  */}
    <div data-aos="fade-up" className={styles.whatdoido}>
      <h3>What do I do</h3>
      <div data-aos="fade-left" className={styles.whattodocards}>
         {/*create a new component and place all cards in there */}
        <Card data-aos="fade-left" className={styles.cardclass}></Card>
        <Card data-aos="fade-left" className={styles.cardclass}></Card>
      </div>
    </div>
    </div>
  );
};
export default Home;
