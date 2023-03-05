import React from 'react';
import './App.css';

import {
  Routes, 
  Route, 
  useNavigate
} from 'react-router-dom';

import Splash from './components/Splash/Splash';
import Favorites from './components/Splash/Favorites/Favorites';

import { HomeRounded } from 'grommet-icons';

function App() {
  const navigate = useNavigate();

  // const [state, setState] = React.useState({});
  const [images, setImages] = React.useState({});
  
  const updateLocalStorage = (id) => {
    localStorage.setItem(`image${id.image_id}`, JSON.stringify({image_id: id.image_id, favorited: true}));

    let imgs = Object.keys(localStorage).map(k => localStorage.getItem(k));
    let parsed = imgs.map(img => JSON.parse(img));
    setImages(images => ({ ...images, images: parsed}));
  };

  React.useEffect(() => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map( async num => {
      if (localStorage.getItem(`image${num}`)) {
        let imgs = Object.keys(localStorage).map(k => localStorage.getItem(k));
        let parsed = imgs.map(img => JSON.parse(img));
        setImages(images => ({ ...images, images: parsed}));
      } else {
        localStorage.setItem(`image${num}`, JSON.stringify({image_id: num, favorited: false}))
      }
    })
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <div id="App">
      <Routes>
        <Route index element={ <Splash updateLocalStorage={updateLocalStorage} images={images} />} />
        <Route path='/favorites' element={<Favorites clearLocalStorage={clearLocalStorage} />} /> 
      </Routes>
      <footer>
        <p>ZSM.DEV</p>
        <HomeRounded onClick={() => navigate('/')} />
        <p onClick={() => navigate('/favorites')}>FAVORITES</p>
      </footer>
    </div>
  );
}

export default App;