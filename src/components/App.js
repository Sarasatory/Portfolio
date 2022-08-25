import '../styles/App.scss';

import { useState } from 'react';
import { useEffect } from 'react';
import useObserver from '../services/useObserver';
import localStorage from '../services/localStorage';

import experiencesData from '../data/experiences.json';
import projectsDev from '../data/projectsDev.json';
import projectsDes from '../data/projectsDes.json';
import articles from '../data/articles.json';

import Nav from './Nav';
import Section001 from './Section001';
import Section002 from './Section002';
import Section003 from './Section003';
import Section004 from './Section004';
import Section005 from './Section005';
import Section006 from './Section006';
import Section007 from './Section007';
import Stain001 from './Stain001';
import Stain002 from './Stain002';
import Stain003 from './Stain003';

function App() {
  //
  // CONSTANTES DE ESTADO
  //
  const [widthLink, setWidthLink] = useState('');
  const [leftLink, setLeftLink] = useState('');
  const [topLink, setTopLink] = useState(0);

  const [currentSection, setCurrentSection] = useState('');
  const [currentSectionState, setCurrentSectionState] = useState('');

  const [currentURL, setCurrentURL] = useState('');

  const [widthExp, setWidthExp] = useState('');
  const [heightExp, setHeightExp] = useState('');
  const [leftExp, setLeftExp] = useState('');
  const [topExp, setTopExp] = useState(0);
  const [colorExp, setColorExp] = useState('');
  const [transformExp, setTransformExp] = useState('');

  const [titleExp, setTitleExp] = useState(experiencesData.experience[0].title);
  const [dateExp, setDateExp] = useState('');
  const [companyExp, setCompanyExp] = useState('');
  const [paragraphExp, setParagraphExp] = useState(
    experiencesData.experience[0].paragraph
  );

  const [firstLoad, setFirstLoad] = useState(true);
  //
  // VARIABLES Y CONSTANTES GENERALES
  //
  const sections = [
    { number: '01', title: 'Inicio' },
    { number: '02', title: 'Sobre mí' },
    { number: '03', title: 'Mi perfil' },
    { number: '04', title: 'Experiencia' },
    { number: '05', title: 'Proyectos' },
    { number: '06', title: 'Artículos' },
    { number: '07', title: 'Contacto' },
  ];

  const colorsExp = '#ffa24b';

  //
  // CUSTOM HOOKS
  //
  // Observa la intersección de los elementos elegidos (en este caso las secciones) con el viewport y devuelve información útil al respecto.
  // Realizado con el tutorial: https://www.youtube.com/watch?v=jvpS8wdy9xg&list=PLWJxnDLEFlnVQlQ7c4G_SyHQcFT4GsPGR&index=2
  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  //
  // HOOKS DEPENDIENTES DEL CUSTOM HOOK
  //

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-section');
    setElements(sections);
  }, [setElements]);

  useEffect(() => {
    if (entries[0]) {
      setCurrentSection(entries[0].target.id);
      setCurrentSectionState(entries[0].isIntersecting);
    }
  }, [observer, entries]);

  //
  // HOOKS
  //

  // Defino cómo se comportará el navegador al recargar la página.
  // Pendiente de revisión.
  useEffect(() => {
    // const currentURL = localStorage.get('currentURL', '/');
    // window.location.hash = currentURL.hash;
    // window.location.hash = currentURL;
    window.location.hash = '';
  }, []);

  // Al renderizar la página compruebo si existe o no el valor de "targetLink" almacenado en "localStorage".
  // Si no existe, renderiza la página sin entrar en la función "handleLink". Y si existe, ejecuta esa función con "targetLink" como argumento.
  useEffect(() => {
    // Intento obtener del "localStorage" la información almacenada del objeto "targetLink".
    // Si no existe le asigno el valor "null".
    const targetLink = localStorage.get('targetLink', null);

    // Si existe, llamo a la función "handleLink(targetLink)" con ese objeto como parámetro.
    if (targetLink !== null) {
      handleLink(targetLink);
    }
  }, []);

  //
  // FUNCIONES MANEJADORAS
  //

  // Actualizo los valores de las constantes de estado que almacenan los datos de ancho, desplazamientos izquierdo y superior, color y sección actual.
  // También guardo en "localStorage" los valores del objeto con esa información "targetLink" que viene como argumento desde "Nav.js", y la sección actual para la URL "currentURL".
  const handleLink = (targetLink) => {
    // Actualizo las constantes de estado.
    setWidthLink(targetLink.widthLink);
    setLeftLink(targetLink.leftLink);
    setTopLink(targetLink.topLink);

    // Guardo el objeto "targetLink" en "locaStorage".
    localStorage.set('targetLink', targetLink);

    // Guardo el dato "currentURL" en "locaStorage".
    const currentURL = `${targetLink.section}`;
    localStorage.set('currentURL', currentURL);
    setCurrentURL(currentURL);
  };

  const handleClickExp = (targetExp) => {
    // Actualiza esta constante de estado, que funciona como conmutador para que en "sectión004.js" solo se ejecute la función  "handleClickZero" si su valor es true (el que tiene por defecto la primera vez que carga la página).
    setFirstLoad(false);

    setWidthExp(targetExp.getBoundingClientRect().width);
    setHeightExp(targetExp.getBoundingClientRect().height);
    setLeftExp(targetExp.offsetLeft);
    setTopExp(targetExp.offsetTop);
    setColorExp(colorsExp[targetExp.id]);

    setTitleExp(experiencesData.experience[targetExp.id].title);
    setDateExp(experiencesData.experience[targetExp.id].date);
    setCompanyExp(experiencesData.experience[targetExp.id].company);
    setParagraphExp(experiencesData.experience[targetExp.id].paragraph);

    setTransformExp('none');
  };

  //
  // FUNCIONES GENERALES
  //

  return (
    <div class='app'>
      <Stain001 />
      <Stain002 />
      <Stain003 />

      <Nav
        handleLink={handleLink}
        widthLink={widthLink}
        leftLink={leftLink}
        topLink={topLink}
        currentSection={currentSection}
        currentSectionState={currentSectionState}
        currentURL={currentURL}
        sections={sections}
      />

      <Section001 />
      <Section002 sections={sections[1]} />
      <Section003 sections={sections[2]} />
      <Section004
        sections={sections[3]}
        handleClickExp={handleClickExp}
        heightExp={heightExp}
        widthExp={widthExp}
        leftExp={leftExp}
        topExp={topExp}
        colorExp={colorExp}
        transformExp={transformExp}
        experiencesData={experiencesData}
        titleExp={titleExp}
        dateExp={dateExp}
        companyExp={companyExp}
        paragraphExp={paragraphExp}
        firstLoad={firstLoad}
      />
      <Section005
        sections={sections[4]}
        projectDev={projectsDev.project}
        projectDes={projectsDes.project}
      />
      <Section006 sections={sections[5]} articles={articles.article} />
      <Section007 sections={sections[6]} />
    </div>
  );
}

export default App;
