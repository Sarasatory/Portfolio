import '../styles/components/Nav.scss';

import React from 'react';

import { useRef } from 'react';

const Nav = React.forwardRef((props) => {
  //
  // VARIABLES Y CONSTANTES GENERALES:
  //

  const refMenuBtn = useRef(null);
  const refNav = useRef(null);

  // Recojo en un array la información de todos los enlaces "a".
  const links = document.querySelectorAll('.js_link');
  let html = [];

  //
  // FUNCIONES MANEJADORAS
  //

  // Recojo en un objeto la información limpia del enlace seleccionado, para después mediante la función "props.handleLink(targetLink)" enviarlo a "App.js".
  // Recojo los datos de ancho, desplazamientos izquierdo y superior, y sección actual.
  const sendToAppFun = (i) => {
    const targetLink = {
      widthLink: links[i].offsetWidth,
      leftLink: links[i].offsetLeft,
      topLink: links[i].offsetTop,
      section: props.currentSection,
    };

    // Envio la información recogida en el objeto "targetLink" a "App.js".
    props.handleLink(targetLink);
  };

  // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
  const aLinkStateFun = (i) => {
    links.forEach((element) => {
      element.classList.remove('active');
      element.classList.add('inactive');
    });
    links[i].classList.add('active');
    links[i].classList.remove('inactive');
  };

  // Recojo la sección actual mediante su "id" y meto su valor numérico en la variable "i" con la que trabajaré en las funciones "sendToAppFun(i)" y "aLinkStateFun(i)".
  const currentUrlFun = () => {
    let i = 0;
    if (props.currentURL === 'section001') {
      i = 0;
    } else if (props.currentURL === 'section002') {
      i = 1;
    } else if (props.currentURL === 'section003') {
      i = 2;
    } else if (props.currentURL === 'section004') {
      i = 3;
    } else if (props.currentURL === 'section005') {
      i = 4;
    } else if (props.currentURL === 'section006') {
      i = 5;
    } else if (props.currentURL === 'section007') {
      i = 6;
    }
    return i;
  };

  //
  // FUNCIONES GENERALES
  //

  // Desplazamiento con el ratón.
  if (props.currentSectionState === true) {
    // Recojo la sección actual.
    let i = currentUrlFun();

    sendToAppFun(i);

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  // Al clickar sobre los enlaces.
  const handleClick = () => {
    // Recojo la sección actual.
    let i = currentUrlFun();

    sendToAppFun(i);

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  };

  // Al recargar la página.
  if (props.currentSection !== '') {
    // Recojo la sección actual.
    let i = currentUrlFun();

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  const changeVisibilityBtn = () => {
    refMenuBtn.current.classList.add('hidden');
    refNav.current.classList.remove('unfloat');
    refNav.current.classList.add('float');
  };

  const changeVisibilityNav = () => {
    refMenuBtn.current.classList.remove('hidden');
    refNav.current.classList.add('unfloat');
    refNav.current.classList.remove('float');
  };

  const handleMouseOver = () => {
    refNav.current.classList.add('float');
    refNav.current.classList.remove('unfloat');
  };

  const handleMouseOut = () => {
    refNav.current.classList.add('unfloat');
    refNav.current.classList.remove('float');
  };

  for (let i = 0; i < props.sections.length; i++) {
    html[i] = (
      <li onClick={handleClick}>
        <a
          href={`#section00${i + 1}`}
          id={`key00${i}`}
          className='inactive js_link'
        >
          <span className='number'>{props.sections[i].number}.</span>
          <span className='title'>{props.sections[i].title}</span>
        </a>
      </li>
    );
  }

  return (
    <>
      <div className='menu-btn' ref={refMenuBtn} onClick={changeVisibilityBtn}>
        <div className='iconBtn iconMenuSat'></div>
      </div>

      <div
        className='nav unfloat'
        ref={refNav}
        onClick={changeVisibilityNav}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ul>{html}</ul>
      </div>
    </>
  );
});

export default Nav;
