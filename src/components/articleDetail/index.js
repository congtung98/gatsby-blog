import React from 'react'

const ArticleDetail = props => (
  <>
  {console.log(props)}
    <section
      className="c-article-header"
      style={{ backgroundImage: `url(${props.image})` }}
    >
    <h2>{props.title}</h2>
    </section>
    <img src={props.image} />
    <div className="page">
      <div
        className="c-article-content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  </>
)

export default ArticleDetail