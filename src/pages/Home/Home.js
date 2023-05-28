import Card from '../../components/Card/Card';
import "./Home.css";
import datas from "../data.json";


function Home() {    
    
    return (
        <>
        <main>        
        <div id="main-top-home">  
        <div className="main-top-overlay">      
        <h1 id="home-h1">Chez vous, partout et ailleurs</h1>
        </div>
        </div>
        <div id="main-bottom">

        {datas.map((data) =>{
                const { id, title, cover} = data;

                return (            
                <Card id={id} title={title} img={cover}/>
                )
        })}
        </div>
        </main>
        </>
        )
    }

export default Home;