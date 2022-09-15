import { onNavigate } from '../main.js';
import { signInWithPopup, provider, auth } from '../lib/firebase.js';

export const welcome = () => {
  const container = document.createElement('section');
  container.className = 'containerWelcome';

  const imageLogo = document.createElement('img');
  imageLogo.src = './img/Logo-red-social.png';
  imageLogo.alt = 'Imagen logo Travelers';
  imageLogo.className = 'logoRed';

  const title = document.createElement('h1');
  title.textContent = 'Travelers';
  title.className = 'title';

  const slogan = document.createElement('p');
  slogan.textContent = 'Sitio para compartir tus experiencias por el mundo.';
  slogan.className = 'slogan';

  const registerText = document.createElement('p');
  registerText.textContent = '¿No tienes una cuenta?';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresar con correo';
  buttonLogin.className = 'buttons';

  const orText = document.createElement('p');
  orText.textContent = 'o';

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.setAttribute('id', 'buttonGoogle');
  const divGoogle = document.createElement('div');
  const textGoogle = document.createElement('p');
  textGoogle.textContent = 'Ingresar con Google';
  textGoogle.setAttribute('id', 'textGoogle');
  const imageGoogle = document.createElement('img');
  imageGoogle.src = './img/logo-google.png';
  imageGoogle.alt = 'Google';
  imageGoogle.className = 'imageGoogle';


  const buttonSignUp = document.createElement('button');
  buttonSignUp.className = 'buttonSignUp';
  buttonSignUp.textContent = 'Regístrate.';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonLoginGoogle.addEventListener('click', () => {
   signInWithPopup(auth, provider)
   .then((result) => {
      onNavigate('/wall');
  }) .catch((error) => {
   // const errorCode = error.code;
    // const errorMessage = error.message;
  }); 
  });

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/register');
  });

  divGoogle.append(imageGoogle, textGoogle);
  buttonLoginGoogle.appendChild(divGoogle);


  container.append(
    imageLogo,
    title,
    slogan,
    buttonLogin,
    orText,
    buttonLoginGoogle,
    registerText,
    buttonSignUp,
  );

  

  return container;
};
