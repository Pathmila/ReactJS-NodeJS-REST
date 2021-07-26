import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Item/home.jsx";
import AddItem from "./Components/Item/addItem.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>            
                <Route exact path="/" component={Home} />   
                    <Route exact path="/add" component={AddItem} />    
                </Switch>
            </div>
        </Router>
    );
}

export default App;
