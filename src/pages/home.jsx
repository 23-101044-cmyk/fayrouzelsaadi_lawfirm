import React from 'react';
import './home.css'
import Nav from '../components/layout/nav';
import Header from '../components/layout/header';
import Title from '../components/common/title';

const Home = () => {
    return ( 
        <body>
            <Nav />
            <Header />
            <main>
                <section className='s1'>
                    <Title title="Why Work With Us?" />
                    <article className='s1info'>

                    </article>
                </section>
            </main>
        </body>
     );
}
 
export default Home;
