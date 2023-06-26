import Card from '../../components/Card/Card';
import "./Home.css";
import datas from "../../data/data.json";


function Home() {    
    
    return (
        <>
        <main>        
        <div className="main-top-home">  
        <div className="main-top-overlay">      
        <h1 className="home-h1">Chez vous, partout et ailleurs</h1>
        </div>
        </div>
        <div className="main-bottom">

        {datas.map((data, index) =>{
                const { id, title, cover} = data;

                return (            
                <Card key={index} id={id} title={title} img={cover}/>
                )
        })}
        </div>
        </main>
        </>
        )
    }

export default Home;