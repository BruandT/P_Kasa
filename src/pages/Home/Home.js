import Card from '../../components/Card/Card';
import "./Home.css"

function Home() {
    
    return (
        <>
        <main>        
        <div id="main-top">  
        <div id="main-top-overlay">      
        <h1 id="home-h1">Chez vous, partout et ailleurs</h1>
        </div>
        </div>
        <div id="main-bottom">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </main>
        </>
        )
    }

export default Home;