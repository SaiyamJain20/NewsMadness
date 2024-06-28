import React, {useState, useEffect} from 'react'
import News from './News'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';


function NewsRow(props) {
    const [page, setPage] = useState(1);
    const pageSize = 15;
    // const [pageSize, setPageSize] = useState(15);
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async() => {
        setLoading(true);
        setPage(1);
        setArticle([]);
        setTotalResults(0);
        const apiKEY = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0b1bb2a2507c4856a05f094cc333c5f8&pagesize=${pageSize}&page=${page}`;
        let data = await fetch(apiKEY);
        let jsonData = await data.json();
        setTotalResults(jsonData.totalResults);
        // console.log(jsonData);
        setArticle(article.concat(jsonData.articles));
        setLoading(false);
    }

    useEffect(()=>{
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const apiKEY = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=0b1bb2a2507c4856a05f094cc333c5f8&pagesize=${pageSize}&page=${page + 1}`;
        setPage(page + 1);
        let data = await fetch(apiKEY);
        let jsonData = await data.json();
        setTotalResults(jsonData.totalResults);
        // console.log(jsonData);
        setArticle(article.concat(jsonData.articles));
        // setLoading(false);
    };

    return (
        <div className='container'>
            <InfiniteScroll dataLength={article.length} next={fetchMoreData} hasMore={article.length !== totalResults}>
                <div className="row my-3">
                    {loading?<Loading></Loading>:article.map((ele)=> {
                        if(ele)
                            return(<div className="col md-4" key={ele.url.concat(ele.urlToImage).concat(ele.description)}><News title={ele.title} desc={ele.description} imgUrl={ele.urlToImage} url={ele.url} date={ele.date}/></div>)
                        return <div className="container"></div>;
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default NewsRow
