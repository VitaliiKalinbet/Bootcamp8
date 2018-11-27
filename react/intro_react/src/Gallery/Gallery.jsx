import React from 'react';
import './Gallery.css';

const Gallery = () => {
    let imgArr = [{src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 1}, {src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 2}, {src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 3}, {src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 4}, {src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 5}, {src: 'https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg.pagespeed.ce.oFe_4-D0Vt.jpg', id: 6}];
    return (
        <div className='gallery'>
            {imgArr.map(el => <img src={el.src} alt='gallery-item' key={el.id}/>)}
        </div>
    );
};

export default Gallery;