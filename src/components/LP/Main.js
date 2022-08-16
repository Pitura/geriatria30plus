import React from 'react';
import Register from "./Register";
import Container from "react-bootstrap/Container";

const Main = () => {


    return (
        <section className='section-background-style'>
            <Container>
                <article className='section-article'>
                    <h1>Przechowaj wszystkie swoje badania w jednym miejscu!</h1>
                    <p>Wszyscy doskonale wiemy, że pozornie te same kontuzje przed 30'stką i po 30'stce mają zupełnie inny wpływ na nasz organizm. Dbanie o zdrowie jest ważnym aspektem życia dlatego ta strona została stworzona aby przetrzymywać swoje badania w jednym miejscu do którego będziesz miałdostęp w każdym miejsu na świecie!</p>
                </article>

                <Register />

            </Container>
        </section>
    )
}


export default Main;