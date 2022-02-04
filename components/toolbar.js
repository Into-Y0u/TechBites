import styles from '../styles/Toolbar.module.css';
import { useRouter } from "next/router";

const Toolbar = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.header}>
                <div className= {styles.headerlogo}  style ={{textShadow :"5px 8px 8px #25272c" }}>Tech Bites</div>
                <div  className= {styles.headerlink}  >
                    <div onClick={() => router.push('/')} >Home</div>
                    <div onClick={() => router.push('/feed/1')} >Feed</div>
                    <div onClick={() => router.push('/eom')} >Me??</div>
                    {/* <div onClick={() => window.location.href = 'https://'} >Facebook</div> */}
                </div>
            </div>
        </>
    )
}

export default Toolbar
