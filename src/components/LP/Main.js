import React from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

const Main = () => {

    return (
        <section className='section-background-style'>
            <Container>
                <article className='section-article'>
                    <h1 style={{padding:'20px'}}>Przechowaj wszystkie swoje badania w jednym miejscu!</h1>
                    <p>Wszyscy doskonale wiemy, że pozornie te same kontuzje przed 30'stką i po 30'stce mają zupełnie inny wpływ na nasz organizm. Dbanie o zdrowie jest ważnym aspektem życia dlatego ta strona została stworzona aby przetrzymywać swoje badania w jednym miejscu do którego będziesz miał dostęp w każdym miejsu na świecie!</p>
                </article>
                <Button href='/register' className='landingpage-button' variant="primary" size="lg">Zarejestruj się!</Button>
            </Container>
        </section>
    )
}

export default Main;
