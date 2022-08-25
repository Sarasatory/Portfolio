import '../styles/components/Section003.scss';

import TitleSection from './TitleSection';

const Section003 = (props) => {
  return (
    <section className='section003 snap-section' id='section003'>
      <div className='container'>
        <div className='profile-line profile-line001'>
          <TitleSection
            className='title-section'
            number={props.sections.number}
            title={props.sections.title}
          />
        </div>
        <div className='profile-line profile-line002'>
          <h3 className='title-h3 profile'>Desarrolladora Frontend</h3>

          <p className='text-p subtitle'>Formación en Bootcamp Adalab - 2022</p>
          <p className='text-p'>
            Puede haber belleza en la programación. Soluciones simples,
            optimizadas y funcionales, fáciles de entender y fáciles de
            mantener.
          </p>
          <p className='text-p skills-title strong-color'>Skills</p>

          <p className='skills-line'>
            <span className='skills-tag'>HTML5</span>
            <span className='skills-tag'>CSS3</span>
            <span className='skills-tag'>SCSS (Sass)</span>
            <span className='skills-tag'>Flexbox</span>
            <span className='skills-tag'>Grid</span>
            <span className='skills-tag'>Animaciones</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>JavaScript</span>
            <span className='skills-tag'>React</span>
            <span className='skills-tag'>APIs</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>Node.JS</span>
            <span className='skills-tag'>Express</span>
            <span className='skills-tag'>SQL (SQLite)</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>Git (GitHub)</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>VS Code</span>
            <span className='skills-tag'>Gulp</span>
            <span className='skills-tag'>NPM</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>Scrum</span>
          </p>
        </div>

        <div className='profile-line profile-line003'>
          <h3 className='title-h3 profile'>Diseñadora UX/UI</h3>

          <p className='text-p subtitle'>
            Formación en Bootcamp Ironhack - 2019
          </p>
          <p className='text-p'>
            Un buen diseño tiene la capacidad de hacerte conectar con las
            personas, y de conseguir con ellas los logros que te habías marcado.
          </p>
          <p className='text-p skills-title strong-color'>Skills</p>

          <p className='skills-line'>
            <span className='skills-tag'>UX Strategy</span>
            <span className='skills-tag'>Interaction Design</span>
            <span className='skills-tag'>Visual Design</span>
            <span className='skills-tag'>Style Guides</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>Human Centered Design</span>
            <span className='skills-tag'>Design Thinking</span>
            <span className='skills-tag'>Atomic Design</span>
          </p>

          <p className='skills-line'>
            <span className='skills-tag'>Figma</span>
            <span className='skills-tag'>Sketch</span>
            <span className='skills-tag'>InVison</span>
            <span className='skills-tag'>Zeplin</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section003;
