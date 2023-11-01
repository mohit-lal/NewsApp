import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    console.log('constructor' )

    super();
    this.state = {
      articles: this.articles,
      loading: false,

      
      
    }
  }

  async componentDidMount(){
    console.log('mount' )
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=27c97aacb18c4e54b4851b5b04810b62"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);
    this.setState({articles:parsedData.articles})


  }

  render() {
    console.log('render' )
    return (
      <div className='container my-3'>
        <h1>NewsMoneky - Top Headlines</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4'key={element.url} >
          <NewsItem title={element.title?element.title:""} description={element.description?element.description: ""} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>     
        })}
        </div> 
  
      </div>
    )
  }
}

export default News