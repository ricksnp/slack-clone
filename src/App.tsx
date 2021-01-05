import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  // Pull the current user in (if signed in)
  const [{user}] = useStateValue();
  return (
    // BEM
    <div className="app">
      {/* User must be logged in to proceed to the application */}
      <Router>
        {!user ? (
          <Login/>
        ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
