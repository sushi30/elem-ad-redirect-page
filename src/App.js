import React, {useState} from 'react';
// import logo from './logo.svg';
import imageSrc from './instagram-top-part.png'
import firstImage from './img/image-1.png'
import secondImage from './img/image-2.png'
import thirdImage from './img/image-3.png'
import forthImage from './img/image-4.png'
import fifthImage from './img/image-5.png'
import sixthImage from './img/image-6.png'
import seventhImage from './img/image-7.png'
import eighthImage from './img/image-8.png'
import ninthImage from './img/image-9.png'
import bigImage from './img/image-1-big.png'

import './App.css';


const ImageItems = ({setPictureMode}) =>{
    const images = [firstImage, secondImage, thirdImage, forthImage, fifthImage, sixthImage, seventhImage, eighthImage, ninthImage];
    return (
        <div className={"images-container"}>
            {images.map(image => (
        <>
        <button className={"photo-button"} onClick={() =>{setPictureMode(true)}}>
            <img className="photo" src={image} height={260} width={320}/>
        </button>
        </>))}
        </div>);

};

const Page = () => {
    const [isPictureMode, setPictureMode] = useState(false);
    return (
        isPictureMode? (<div><button className={"photo-button"} onClick={() =>{setPictureMode(false)}}>
                <img src={bigImage} height={800}/> </button></div>) :
            (<div>
            <img src={imageSrc} height={500}/>
            <ImageItems setPictureMode={setPictureMode}/>
        </div>)
        //images things
    );
};

function App() {
  return (
    <div className="App">
            <Page/>
    </div>
  );
}


export default App;
