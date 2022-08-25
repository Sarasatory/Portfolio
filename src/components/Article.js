import '../styles/components/Article.scss';

const Article = (props) => {
  console.log('PROPS', props.classSrcImg);

  return (
    <div className='article__sec-001'>
      <div
        className={`article__sec-001__col-001 csi ${props.classSrcImg}`}
      ></div>

      <div className='article__sec-001__col-002'>
        <h3 className='title-h3 articles strong-color'>{props.title}</h3>
        <p className='text-p'>{props.summary}</p>
        <a href={`${props.url}`} target='_blank'>
          <span className='btn-view-more-article text-p strong-color-light'>
            Leer
          </span>
        </a>
      </div>
    </div>
  );
};

export default Article;
