const Article = ({ article }) => {
    return (
        <div className='article'>
            <h3>{ article.title }</h3>
            <p>{ article.source }</p>
            <p>{ article.date} </p>
        </div>
    )
}

export default Article
