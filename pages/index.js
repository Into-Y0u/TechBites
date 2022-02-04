import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <div className='page-container'>
      <Toolbar/>
      <div>
          <div className= {styles.header} >
              Hi There ! <br/><br/>
              This is a News Web App ; built with NextJS Framework and free API from NewsAPI.org . 
              <br/>
              <br/>
              This web app provides you current technology news from round the world. As Its using an API , it refreshes automatically and brings the latest news headline everyday. On clicking thr headline you can actually visit the parent news website and read the news in details.. 
              <br/>
              Okay, No more talk . You just click on the feed and enjoy.. 

              <br/>
              <br/>
              <br/>
              Bye-bye😊
      
            
          </div>
          
      </div>

      


    </div>
  )
}
