import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import JAS from '../images/JAS.jpg'
import Contact from "./Contact"
import M from 'materialize-css'

class Home extends React.Component{
    

    render(){
        return(
                <div className="home">
                <ul class="slides">
                <li>
                  <div class="row">
                    <div class="col s5"> <img class="responsive-img response" src={JAS} alt=""/> </div>
                    <div class="col s6"><h5><blockquote>Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP) is a campaign launched by the Department of Pharmaceuticals, Government of India, to provide quality medicines at affordable prices to the masses through special kendras known as Pradhan Mantri Bharatiya Janaushadhi Pariyojana Kendra. Pradhan Mantri Bharatiya Janaushadhi Pariyojana Kendra (PMBJPK) have been set up to provide generic drugs, which are available at lesser prices but are equivalent in quality and efficacy as expensive branded drugs. BPPI (Bureau of Pharma Public Sector Undertakings of India) has been established under the Department of Pharmaceuticals, Govt. of India, with the support of all the CPSUs for co-ordinating procurement, supply and marketing of generic drugs through Pradhan Mantri Bharatiya Janaushadhi Pariyojana Kendra.
                      </blockquote></h5></div>
                    </div>
                </li>
              </ul>
              <div class="video-container container">
                    <iframe width="100" height="100" src="http://www.youtube.com/embed/ngdCrcISgB8" frameborder="0"></iframe>
                </div>
                <Contact />
                <footer class="section red white-text center">
                  <p class="flow-text">Easy-Meds &copy; 2021</p>
                </footer>
              </div>
        );
    }
}

export default Home