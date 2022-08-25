import '../styles/components/Section006.scss';

import Article from './Article';
import TitleSection from './TitleSection';

const Section006 = (props) => {
  let htmlArticle = '';
  htmlArticle = props.articles.map((item) => {
    if (item.id < props.articles.length) {
      return (
        <Article
          classSrcImg={item.classSrcImgArt}
          title={item.title}
          summary={item.summary}
          url={item.url}
        />
      );
    }
  });

  return (
    <section className='section006 snap-section' id='section006'>
      <div className='container'>
        <div className='container__sec-001'>
          <TitleSection
            number={props.sections.number}
            title={props.sections.title}
          />
        </div>
        {htmlArticle}
      </div>
    </section>
  );
};

export default Section006;
