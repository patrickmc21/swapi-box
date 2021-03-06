import React from 'react';
import CardContainer from '../CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = (props) => {
  const {
    activeCategoryInfo, 
    activeCategoryName,
    updateCurrentCategory, 
    addToFavorites, 
    favorites,
    next,
    previous,
    loading
  } = props;

  const youtubeURL = "https://www.youtube.com/embed/Aja1pCUZPso?";
  const iFOptions = "rel=0&controls=0&showinfo=0&autoplay=1&volume=0&mute=1";

  return (
    <div>

      { loading && activeCategoryName !== 'main' ?
        <main className={`App-Main ${activeCategoryName} loading`}>
          <div className={`loading-image ${activeCategoryName}`}>
            <div className='loading-gif'></div>
          </div>
        </main>
        :
        <main className={`App-Main ${activeCategoryName}`}>
          { activeCategoryName === 'main' ?
            <iframe
              title='iframe' 
              width="1300" 
              height="640" 
              src={`${youtubeURL}${iFOptions}`} 
              frameBorder="1" 
              allow="autoplay; encrypted-media" 
              allowFullScreen></iframe>
            :
            <CardContainer 
              activeCategoryInfo={activeCategoryInfo}
              activeCategoryName={activeCategoryName}
              addToFavorites={addToFavorites}
              favorites={favorites}
              updateCurrentCategory={updateCurrentCategory}
              next={next}
              previous={previous}/>
          }
        </main>
      }
    </div>

  );
};

Main.propTypes = {
  activeCategoryInfo: PropTypes.array,
  activeCategoryName: PropTypes.string,
  addToFavorites: PropTypes.func,
  favorites: PropTypes.array,
  updateCurrentCategory: PropTypes.func,
  next: PropTypes.string,
  previous: PropTypes.string,
  loading: PropTypes.bool
};

export default Main;