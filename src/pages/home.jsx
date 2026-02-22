import React from 'react';
import './home.css'
import Nav from '../components/layout/nav';
import Header from '../components/layout/header';
import Title from '../components/common/title';
import Card1 from '../components/common/card1';
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Areas from '../components/common/areas';

const Home = () => {
    return ( 
        <body>
            <Nav />
            <Header />

            <main>

                <section className='s1'>
                    <article className='s1info'>
                        <Card1 
                        cardicon={icon1}
                        cardtitle="WE CARE"
                        cardp="With Mr.Hima's personal background in business, he knows how frustrating working with expensive attorneys can be. He started Hima Law so you can enjoy working with your attorneys, knowing we are saving you money while putting you in  the best position to succeed."
                        />
                        <Card1 
                        cardicon={icon2}
                        cardtitle="RESULTS"
                        cardp="Getting you to the best result is the top priority.  Whether that requires something simple or something complex, a cooperative approach, hard-nosed attacking, or some other creative resolution, we do whatever it takes to get you to your best result."
                        />
                        <Card1 
                        cardicon={icon3}
                        cardtitle="VALUE"
                        cardp="Our goal is to get results for the client, not stuff our own pockets.  We keep overhead low and our team small so we don’t need to unnecessarily rack up fees.  We are conscious of your budget and tailor our services to provide what you need at the best value possible."
                        />
                    </article>
                    <Title title="Why Work With Us?" />
                </section>

                <section className='s2'>
                    <Title title="Our Practice Areas" />
                    <article className='s2info'>
                        <Areas
                        areaimg="im1"
                        areatitle="Business and Litigation"
                        areap="We can help everyone from the self-employed individual to larger companies with many employees.  We help with nearly everything a business needs–including start up and business formation, contracts, employee issues, trademarks, dispute management, and litigation."
                        />
                        <Areas
                        areaimg="im2"
                        areatitle="Labor and Employment"
                        areap="Mr. Hima has represented law enforcement unions for more than a decade.  He is currently the primary counsel for three law enforcement unions in Southern Nevada.  He also regularly assists police officers from other agencies through FOP, PLEA and other legal defense organizations.  Mr. Huntley has negotiated several collective bargaining agreements, resolved countless grievances, pursued labor claims through the EMRB, arbitration and the court system.  He also has defended hundreds of employees in disciplinary actions with phenomenal results achieved through diligent preparation and representation during investigations, pre-disciplinary hearings, appeals, mediation and arbitration."
                        />
                        <Areas
                        areaimg="im3"
                        areatitle="Mediation and Arbitration"
                        areap="Mr. Hima is an approved arbitrator for both FINRA and the Nevada Supreme Court Annexed Arbitration Program.  He also offers private arbitration and mediation services to help parties resolve their disputes in an efficient and cost-effective manner."
                        />
                    </article>
                </section>

            </main>
        </body>
     );
}
 
export default Home;
