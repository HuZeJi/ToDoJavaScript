import '../css/components.css';
import webpackLogo from './../assets/img/webpack-logo.png';


export const sayHi = (name = 'No name') => {
    console.log(`Creating h1`);
    const h1 = document.createElement('h1');
    h1.innerText = `Hello ${name}!!!`;

    document.body.append(h1);
    
    //* Image from code
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);
};

