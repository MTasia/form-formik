import './index.css'
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Document from "./components/Document/Document";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="forms">
                <Form/>
                <Document/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
