import Image from 'next/image'
import styles from '../styles/EOM.module.css';
import Toolbar from '../components/toolbar' ;

const eom = () => {
    return (
        <div className="page-container" >
            <Toolbar/>
            <div className={styles.header}>
                <h1>About Me..</h1>

                <p>Hello!! , <br/> This is Arghya . <br/> I am a B.Tech undergraduate ; Currently in 4th year .
                <br/> <br/> 
                    Technology excites me and I am always in awe of the change it drives in the world. 
                    <br/> Certain skills that I have worked with include Data Structures and Algorithms (Py + cpp), Web Development (NodeJs, MySQL , ReactJs) & Machine Learning Enthusiast (Python). And what I might lack in skills I make up for with my determination to learn.
                    <br/> <br/> 
                    Outside of tech, I am a Movie lover, an amature EDM Producer and have spent my college days nurturing a lot of side hobbies along with studies.
                    <br/> <br/> 
                    
                    Connect with me</p>
                <div>
                    <button  onClick={() => window.location.href = 'https://www.linkedin.com/in/arghyadev-sarkar/'} >LinkedIn </button>
                    <button  onClick={() => window.location.href = 'https://www.into-y0u.github.io/Portfolio1/'} >Portfolio </button>
                    
                </div>
                
            </div>
        </div>
    )
}

export default eom
