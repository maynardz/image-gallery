import React from 'react';
import './Favorites.css';

const Favorites = props => {
  // console.log(props);

  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    let favs = []

    let imgs = Object.keys(localStorage).map(k => localStorage.getItem(k));
    let parsed = imgs.map(img => JSON.parse(img));

    parsed.map(obj => obj.favorited ? favs.push(obj) : <div></div>);

    setFavorites(favs);
  }, []);

  return (
    <div>
      <div className='favorites-container'>
        {
          favorites.length === 0 ? (
            <div style={{ height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{ color: 'whitesmoke' }}>You have not added any favorites yet</p>
            </div>
          ) : (
            favorites.map((image, index) => (
              image.favorited ? (
                <div className='img-container' key={index}>
                  <img className='fav' src={`../../${image.image_id}.jpg`} />
                </div>
              ) : <div></div>
            ))
          )
        }
      </div>
      <div className='clear-container'>
        <p onClick={() => props.clearLocalStorage()}>CLEAR</p>
      </div>
    </div>
  )
}

export default Favorites;