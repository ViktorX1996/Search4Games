import React from 'react';
import Carousel, { CarouselItem } from './Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function DescriptionPage(props) {
    return (
        <div>
              <nav>
        <div
          className="navbar__logo"
        >RAWG</div>
        <div className="navbar__container">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          <input placeholder="Search for games" type="search" className="navbar__input" />
        </div>
      </nav>
      <section
        className="description__page__container"      
      >
          <div className="description__page__container__title"><b>TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle</b></div>
          <div>5.22</div>
      </section>

      <Carousel>
      <CarouselItem><img style={{width: '100%',objectFit:'cover'}} src="https://media.rawg.io/media/screenshots/b7d/b7d0a152bde95710a936708c66897a4d.jpg" alt=""/></CarouselItem>
        <CarouselItem>
            <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='First slide' />
        </CarouselItem>
        <CarouselItem>
            <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='Second slide' />
        </CarouselItem>
      </Carousel>

        <section className='about__section'>
            <h2>About</h2>
            <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum maxime ipsa iusto facilis! Doloremque ex dignissimos vero magnam qui fugiat cumque maxime rem eligendi soluta ratione, dicta, fugit consectetur laborum modi saepe placeat eveniet quaerat molestias magni iure quam dolorem deserunt. Deserunt ipsam voluptatibus illo odio temporibus itaque eaque.
            </span>
        </section>


        </div>

    
    );
}

export default DescriptionPage;