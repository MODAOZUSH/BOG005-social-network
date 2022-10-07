//import { updateProfile } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { onNavigate } from '../main.js';
import { createUser, profile } from '../lib/firebase.js';

export const register = () => {
  const container = document.createElement('section');
  container.className = 'containerRegister';

  const containerItemRegister = document.createElement('article');
  containerItemRegister.className = 'containerItemRegister';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Travelers';

  const subTitle = document.createElement('h3');
  subTitle.className = 'subTitle';
  subTitle.textContent = 'Por el mundo';

  const imageLogo = document.createElement('img');
  imageLogo.src = './img/Logo-red-social.png';
  imageLogo.alt = 'Imagen logo Travelers';
  imageLogo.className = 'logoRed';

  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';

  const buttonSign = document.createElement('button');
  buttonSign.className = 'buttonEnter';
  buttonSign.textContent = 'Registrarme';

  const buttonBack = document.createElement('button');
  buttonBack.className = 'buttonBack';

  const divButtonBack = document.createElement('div');
  divButtonBack.className = 'divButtonBack';

  const textBackButton = document.createElement('p');
  textBackButton.textContent = 'Regresar';
  textBackButton.setAttribute('id', 'textBackButton');

  const imageBack = document.createElement('img');
  imageBack.src = './img/flecha-izquierda.png';
  imageBack.alt = 'Back';
  imageBack.className = 'imageBack';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo Electrónico';
  inputEmail.setAttribute('id', 'emailSignup');
  inputEmail.setAttribute('required', '');

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Nombre';
  inputName.setAttribute('required', '');
  inputName.setAttribute('id', 'name');

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.setAttribute('id', 'passwordSignup');
  inputPassword.setAttribute('required', '');

  const emailText = document.createElement('p');
  emailText.textContent = 'Escribe tu correo:';

  const nameText = document.createElement('p');
  nameText.textContent = 'Escribe tu nombre:';

  const passwordText = document.createElement('p');
  passwordText.textContent = 'Contraseña';

  const errorText = document.createElement('p');
  errorText.setAttribute('id', 'errorText');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;
    const nameUser = document.getElementById('name').value;

    createUser(email, password)
      .then((credential) => {
        const user = credential.user;
        console.log(user);
        profile(user, nameUser)
          .then(() => {
            onNavigate('/wall');
            console.log(user);
            // ...
          })
          .catch(() => {

          });

      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          errorText.textContent = 'Este correo ya se encuentra registrado';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = 'La contraseña debe tener al menos 6 carácteres';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = 'El correo es inválido';
        }
      });
  });

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  divButtonBack.append(imageBack, textBackButton);

  buttonBack.appendChild(divButtonBack);

  container.append(
    title,
    subTitle,
    imageLogo,
    formRegister,
    errorText,
  );

  formRegister.append(
    nameText,
    inputName,
    emailText,
    inputEmail,
    passwordText,
    inputPassword,
    buttonSign,
    buttonBack,
  );

  containerItemRegister.append(container, formRegister)

  return containerItemRegister;

}
// export { updateProfile };

