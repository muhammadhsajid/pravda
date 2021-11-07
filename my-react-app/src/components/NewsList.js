import NewsItem from "./NewsItem"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    
useEffect(() => {
    const getArticles = async () => {
        const res = await Axios.get(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=5ef0393bf9dd4571a0be26e65e10b9a2"
            );
        setArticles(res.data.articles);
        console.log(res);
    };
    getArticles();
}, []);

    return <div>
        {articles.map(({title, description, url, urlToImage}) => (
            <NewsItem 
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
            />
        ))}
    </div>
};

export default NewsList;
