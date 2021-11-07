import Article from './Article'

const Articles = ({ articles }) => {
    
    return (
        <>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}  
        </>
    )
}

export default Articles
