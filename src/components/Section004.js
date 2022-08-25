import '../styles/components/Section004.scss';

import TitleSection from './TitleSection';

const Section004 = (props) => {
  let spanStyle = {
    width: `${props.widthExp}px`,
    height: `${props.heightExp}px`,
    top: `${props.topExp}px`,
    left: `${props.leftExp}px`,
    borderColor: props.colorExp,
  };

  const exp = document.querySelectorAll('.js_exp');

  const handleClick = (ev) => {
    ev.preventDefault();

    props.handleClickExp(ev.currentTarget);

    exp.forEach((element) => {
      element.classList.remove('active');
      element.classList.add('inactive');
    });
    ev.currentTarget.classList.add('active');
    ev.currentTarget.classList.remove('inactive');
  };

  // Función que se lanza la primera vez que carga la página, para controlar el marcador preseccionado de la sección de experiencia.
  // Se ejecuta solo si el array está defindo, y la constante de estado "firstLoad" es "true".
  const handleClickZero = () => {
    if (exp[0] !== undefined && props.firstLoad) {
      props.handleClickExp(exp[0]);
    }
  };
  handleClickZero();

  let itemExp = '';

  itemExp = props.experiencesData.experience.map((item) => {
    if (item.id === '0') {
      return (
        <li id={item.id} className='js_exp active' onClick={handleClick}>
          <p className='text-p experience-list '>{item.company}</p>
        </li>
      );
    } else {
      return (
        <li id={item.id} className='js_exp inactive' onClick={handleClick}>
          <p className='text-p experience-list'>{item.company}</p>
        </li>
      );
    }
  });

  return (
    <section className='section004 snap-section' id='section004'>
      <div className='container'>
        <div className='container__sec-001'>
          <TitleSection
            number={props.sections.number}
            title={props.sections.title}
          />
        </div>
        <div className='container__sec-002'>
          <div className='container__sec-002--list'>
            <ul>
              {itemExp}
              <span className='marked-expereience' style={spanStyle}></span>
            </ul>
          </div>
          <div className='container__sec-002--info'>
            <h3 className='title-h3 experience white-space-jump'>
              <span className='strong-color dblock'>{props.titleExp} </span>
              {props.companyExp}
            </h3>

            <p className='text-p subtitle'>{props.dateExp}</p>
            <p className='white-space-jump text-p experience'>
              {props.paragraphExp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section004;
