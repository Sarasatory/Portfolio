import '../styles/components/Section005.scss';

import TitleSection from './TitleSection';
import Project from './Project';

const Section005 = (props) => {
  let htmlProjectDev = '';

  htmlProjectDev = props.projectDev.map((item) => {
    if (item.id < props.projectDev.length) {
      return (
        <Project
          classSrcImg={item.classSrcImgDev}
          title={item.title}
          description={item.description}
          skills={item.skills}
          url={item.url}
        />
      );
    }
  });

  let htmlProjectDes = '';

  htmlProjectDes = props.projectDes.map((item) => {
    if (item.id < props.projectDes.length) {
      return (
        <Project
          classSrcImg={item.classSrcImgDes}
          title={item.title}
          description={item.description}
          skills={item.skills}
          url={item.url}
        />
      );
    }
  });

  return (
    <section className='section005 snap-section' id='section005'>
      <div className='container'>
        <div className='container__sec-001'>
          <TitleSection
            number={props.sections.number}
            title={props.sections.title}
          />
        </div>
        <div className='container__sec-002'>
          <div className='container__sec-002--col-001'>
            <div className='container__sec-002--col-001 sub-text'>
              <h3 className='title-h3 work strong-color rotate-90'>
                Desarrollo Frontend
              </h3>
            </div>
            <div className='container__sec-002--col-001 sub-col'>
              {htmlProjectDev}
              <a href='https://github.com/Sarasatory' target='_blank'>
                <span className='btn-view-more-work text-p strong-color-light'>
                  Ver más
                  <div className='iconBtn iconGithub'></div>
                </span>
              </a>
            </div>
          </div>
          <div className='container__sec-002--col-002'>
            <div className='container__sec-002--col-002 sub-col'>
              <div className='space-top'></div>
              {htmlProjectDes}
              <a href='https://www.behance.net/sarasatory' target='_blank'>
                <span className='btn-view-more-work text-p strong-color-light'>
                  Ver más
                  <div className='iconBtn iconBehance'></div>
                </span>
              </a>
            </div>
            <div className='container__sec-002--col-002 sub-text'>
              <h3 className='title-h3 work strong-color rotate90'>
                Diseño UX/UI
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section005;
