import '../styles/components/Section007.scss';

import TitleSection from './TitleSection';

const Section007 = (props) => {
  return (
    <section className='section007 snap-section' id='section007'>
      <div className='container'>
        <div className='container__sec-001'>
          <TitleSection
            number={props.sections.number}
            title={props.sections.title}
          />
        </div>
        <div className='container__sec-002'>
          <p className='title-h3 contact'>¿Algún proyecto en mente?</p>
          <p className='text-p contact'>
            Cuéntame tu idea y veamos qué podemos crear ^^
          </p>
          <p className='text-p contact--email strong-color'>
            <a href='mailto:sarasatorynb@gmail.com'>sarasatorynb@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section007;
