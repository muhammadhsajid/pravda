import { useState } from 'react'
import Header from './components/Header';
//import Articles from './components/Articles';
import NewsList from './components/NewsList';
//import './App.css';
/*
function getNews() {
  fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apikey=5ef0393bf9dd4571a0be26e65e10b9a2', {headers: new Headers({"X-Requested-With":"Pravda"})})
  .then(a => a.json())
  .then(response => {
    for(var i=0; i < response.articles.length; i++) {
      document.getElementById("output").innerHTML +=
      "<div style='padding-top: 20px;'><img style='float:left; width: 150px;' src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"</h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+" <a href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a></div>";
    }
  })
}

const App = () => {
  const [domesticNews, setArticles] = useState([
    {
      id: 1,
      title: 'Alec Baldwin\'s shooting accident likened to Jon-Erik Hexum, Brandon Lee’s deaths',
      date: 'October 22, 2021',
      source: 'Fox News',
  },
  {
      id: 2,
      title: 'At least 8 dead and many injured after crowd surge at Travis Scott\'s Astroworld Festival in Houston, officials say',
      date: "November 6, 2021",
      source: 'CNN',
  },
  {
      id: 3,
      title: 'U.S. Federal Appeals Court Freezes Biden\'s Vaccine Rule for Companies',
      date: 'November 6, 2021',
      source: 'US News',
  },
])
const [foreignNews] = useState([
  {
      id: 4,
      title: 'Iraqi PM al-Kadhimi survives Baghdad \'assassination attempt\'',
      date: 'November 6, 2021',
      source: 'BBC News',
  },
  {
    id: 5,
    title: 'COVID-19: Number of booster jabs administered in UK reaches 10 million',
    date: 'November 7, 2021',
    source: 'Sky News',
  },
  {
    id: 6,
    title: 'Sudan security forces fire tear gas at anti-coup protesters',
    date: 'November 7, 2021',
    source: 'Al Jazeera',
  },
])
  return (
    <div className="container">
      <Header />
      <div className="container-child">
        <h2>Domestic News</h2>
        <NewsList />
      </div>
      <div className="container-child">
        <h2>Foreign News</h2>
        <Articles articles={foreignNews}/>
      </div>
    </div>
  );
}
*/
function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-child" style={{backgroundColor: '#fff0f0'}}>
        <h2>Domestic News</h2>
        <NewsList />
      </div>
      <div className="container-child">
        <h2>Foreign News</h2>

      </div>
    </div>
  );
}

export default App;
