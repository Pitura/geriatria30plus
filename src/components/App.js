import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"

export default function App() {
  return (
      <section className='section-background-style'>
          <Container>
              <article className='section-article'>
                  <h1>Przechowaj wszystkie swoje badania w jednym miejscu!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque doloremque earum et explicabo fugit illum itaque libero molestiae, mollitia natus non odio quis sequi veniam vero voluptatibus. Adipisci aut cumque distinctio doloremque ducimus ea eaque enim esse est expedita explicabo facilis fugit illum incidunt ipsa ipsam laborum, laudantium libero minima molestiae obcaecati odit porro praesentium quae quas quidem quisquam quod repellendus reprehenderit repudiandae sapiente sed, sequi sint tenetur ut veniam voluptatum!</p>
              </article>
              <Button className='landingpage-button' variant="primary" size="lg">Do dzieła!</Button>
          </Container>
      </section>
  );
}
