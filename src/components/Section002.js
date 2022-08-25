import '../styles/components/Section002.scss';

import TitleSection from './TitleSection';

const Section002 = (props) => {
  const circles = document.querySelectorAll('.circle');

  const handleMouseOver = () => {
    circles.forEach((circle) => {
      circle.classList.add('center');
    });
  };

  const handleMouseOut = () => {
    circles.forEach((circle) => {
      circle.classList.remove('center');
    });
  };

  return (
    <section className='section002 snap-section' id='section002'>
      <div className='container'>
        <div className='container__sec-001'>
          <TitleSection
            number={props.sections.number}
            title={props.sections.title}
          />
          <div className='paragraphs'>
            <p className='text-p strong'>
              Soy una apasionada de la tecnología y el diseño. Soy inquieta,
              curiosa y perfeccionista.
            </p>

            <p className='text-p'>
              Me encanta compartir y aprender, por lo que me resulta fácil
              trabajar en equipo y aportar al mismo.
            </p>

            <p className='text-p'>
              También soy una persona organizada, con capacidad de planificación
              y la calma para pensar bien en qué pasos hay que dar a fin de
              conseguir el mejor resultado posible. Le pongo mimo al detalle, y
              trato de entender las necesidades reales de los proyectos y las
              personas que los impulsan.
            </p>

            <p className='text-p'>
              Soy perseverante, aprendo rápido, y trato de estar reciclándome
              constantemente.
            </p>

            <p className='text-p strong-color'>
              Actualmente estoy buscando nuevas oportunidades de empleo.
            </p>
          </div>
        </div>
        <div className='container__sec-002'>
          <div className='container__sec-002__circles'>
            <div className='circle circle-001'></div>
            <div className='circle circle-002'></div>
            <div className='circle circle-003'></div>
            <div
              className='circle img-profile'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section002;
