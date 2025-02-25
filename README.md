# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Sections](#sections)
- [Assets](#assets)
- [Configuration](#configuration)
- [License](#license)
- ## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/easysoul1/nike_with_tailwind.git

   Navigate to the project directory:
   cd nike_with_tailwind
   
   Install the dependencies
   npm install

   To start the development server, run
   npm run dev

   To build the project for production, run:
   npm run build

   .gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
  favicon.ico
README.md
src/
  App.jsx
  assets/
    customer/
    icons/
    images/
    specialoffer/
    superquality/
  component/
    Button.jsx
    Nav.jsx
    PopularProductCard.jsx
    ShoeCard.jsx
  constants/
    index.js
  index.css
  main.jsx
  sections/
    CustomerReviews.jsx
    Footer.jsx
    Hero.jsx
    PopularProducts.jsx
    Services.jsx
    SpecialOffers.jsx
    Subscriber.jsx
    SuperQuality.jsx
tailwind.config.js
vite.config.js

Components
Button.jsx: A reusable button component.
Nav.jsx: The navigation bar component.
PopularProductCard.jsx: A card component for displaying popular products.
ShoeCard.jsx: A card component for displaying shoe images.
Sections
Hero.jsx: The hero section of the website.
PopularProducts.jsx: The section displaying popular products.
Services.jsx: The section displaying services offered.
SpecialOffers.jsx: The section displaying special offers.
CustomerReviews.jsx: The section displaying customer reviews.
SuperQuality.jsx: The section displaying the quality promise.
Subscriber.jsx: The section for newsletter subscription.
Footer.jsx: The footer section with contact information and social media links.
Assets
icons: Contains various icon images.
images: Contains various product and logo images.
customer: Contains customer images for reviews.
specialoffer: Contains images for special offers.
superquality: Contains images for the super quality section.
Configuration
eslint.config.js: ESLint configuration file.
postcss.config.js: PostCSS configuration file.
tailwind.config.js: Tailwind CSS configuration file.
vite.config.js: Vite configuration file.
