import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog"
import Blogdetails from "./components/Blogdetails";
import Notfound from "./components/Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
            <Switch>
              <Route path="/AddBlog" component={AddBlog}/>
              <Route path="/EditBlog/:id" component={EditBlog}/>
              <Route path="/blogs/:id" component={Blogdetails}/>
              <Route exact path="/" component={Home}/>
              <Route component={Notfound} path="*"/>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
