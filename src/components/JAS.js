import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { unstable_createPortal } from 'react-dom/cjs/react-dom.development'


class JAS extends React.Component{
    

    render(){
        return(
                <div class="container">
                    <blockquote>
                   <h3 class="flow-text">Medicines constitute a substantial proportion of out-of-pocket (OOP) expenses in Indian households. In order to address this issue, the Government of India launched the Jan Aushadhi (Medicine for the Masses) Scheme (JAS) to provide cheap generic medicines to the patients (http://janaushadhi.gov.in/about_jan_aushadhi.html). These medicines are provided through the Jan Aushadhi stores established across the country.</h3>
                   </blockquote>
                   <br/>
                   <blockquote>
                   <h3 class="flow-text">The JAS medicines cover a wide range of communicable diseases, NCDs (cardiovascular diseases, diabetes), mental disorders like anxiety, analgesics, vitamin, iron, folic acid supplements, and tetanus toxoid injections.</h3>
                   </blockquote>
                   <blockquote>
                   <h3 class="flow-text"><b>Benefits of the Jan Aushadhi Scheme Campaign</b> <br/>The Jan Aushadhi initiative makes available quality drugs at affordable
                    prices through dedicated stores selling generic medicines which are available at
                    lesser prices but are equivalent in quality and efficacy as expensive branded drugs.
                    Some comparative advantages are:
                    
                    <li>Promote greater awareness about cost-effective drugs and their prescription.</li>
                    <li>Make available unbranded quality generic medicines at affordable prices
                    through public-private partnership.</li>
                    <li>Encourage doctors, more specifically in government hospitals, to prescribe
                    generic medicines.</li>
                    <li>Enable substantial savings in health care, more particularly in the case of
                    poor patients, and those suffering from chronic ailments, requiring long
                    periods of drug use.</li></h3>
                   </blockquote>
                   <blockquote>
                   <h3 class="flow-text">The Jan Aushadhi Campaig is a self sustaining business model not
                    dependent on government subsidies or assistance. It is run in a Campaign Mission
                    Mode on the principle of Not for Profits but with Minimal Profits. PMBJP seeks to
                    keep product price within 50% of branded product price to make it affordable for
                    all, especially the poor. It has resulted in substantial amount of savings for the
                    people.
                    In the Budget Speech of 2016-17, opening 3,000 PMBJP Kendras was
                    announced. As a result of the several actions and initiatives taken by the
                    Government, 2060 PMBJP Kendras are functional in the 31 States/UTs of the
                    country as on 27.07.2017.
                    This has resulted in substantial savings to common man as prices of generic
                    medicines being sold in the PMBJP Kendras is lower by 50% to 90% of the
                    equivalent branded medicines</h3>
                    </blockquote>
                </div>
        );
    }
}

export default JAS