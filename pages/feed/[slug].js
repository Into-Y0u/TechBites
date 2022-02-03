import styles from '../../styles/Feed.module.css';
import { useRouter } from "next/router";
import Toolbar from '../../components/toolbar';




const Feed = ({ pageNumber, articles }) => {
    // console.log(articles);
    const router = useRouter();


    return (
        <div className='page-container' >
            <Toolbar/>
            <div className={styles.main}>
                {articles.map((articles,index) => (
                    
                    <div key={index} className={styles.post} >
                        <h1 onClick={() => window.location.href = articles.url }  >{articles.title}</h1>
                        <p>{articles.description}</p>
                        {!!articles.urlToImage && <img src={articles.urlToImage}/>}
                    </div>
                
                ))}
            </div>
            <div className={styles.paginator}>
                <button>
                    <div
                    
                        onClick={() => {
                            if (pageNumber > 1 ){
                                router.push(`/feed/${pageNumber-1}`)
                            }
                        }}
                        
                        className={pageNumber === 1 ? styles.disabled : styles.active}>
                            --Prev

                    </div>
                </button>
                <button>
                    <div style={{fontSize : "20px"}}  >
                        #{pageNumber}
                    </div>
                </button>
                <button>
                    <div
                        onClick={() => { router.push(`/feed/${pageNumber+1}`)}}
                        
                        className= {styles.active}>
                            Next--

                    </div>
                </button>
            </div>
            

            

        </div>



    )
}

export const getServerSideProps = async pageContext  => {
    const pageNumber = pageContext.query.slug;
    // const country = "us";                              {pageNumber === 5 ? styles.disabled :
    // const category = "technology";       || pageNumber > 5


    if ( !pageNumber || pageNumber < 1 ) {       
        return {
            props : {
                articles : [],
                pageNumber : 1 ,
            }
        }
    }

    const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?language=en&category=technology&pageSize=5&page=${pageNumber}` ,
    {
        headers :{
            Authorization : `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        }
    }
    );

    const apiJson = await apiResponse.json();
    // console.log(apiJson);
    const { articles } = apiJson ;
    return {
        props : {
            articles,
            pageNumber : Number.parseInt(pageNumber),
        }
    }
    
}

export default Feed;
