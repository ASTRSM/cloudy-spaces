/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg" width="483" height="322" type="image/jpeg">
      <source type="image/webp" srcset="./images/heros/hero-image_1.webp">
      <source type="image/jpeg" srcset="./images/heros/hero-image_1.jpg">
      <img 
      src='./images/heros/hero-image_1.jpg' 
      class="hero_img"
      alt="A chef is preparing the food"></img>
    </picture>
   
    <article class='description'>
        <h2>Welcome to <span>Cloudy Spaces</span></h2>
        <p>
            Explore the space between the clouds and feel the floaty feelings that we try to make a cuisine that will mindblown the experimental taste buds of people from across the globe. There is something really blissful about eating the food which has the essence of it being picked and cooked at the moment right in front of us and drinking the taste of it on our tongue.
        </p>
        <div class="underline"></div>
    </article>
    `;
  }
}

customElements.define('hero-element', Hero);
