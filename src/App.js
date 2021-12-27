import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RequestRide from "./Pages/RequestRide/RequestRide";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import MyPlans from "./Pages/MyPlans/MyPlans";
import ManagePlans from "./Pages/ManagePlans/ManagePlans";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/requestride">
              <RequestRide></RequestRide>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myplans">
              <MyPlans></MyPlans>
            </PrivateRoute>
            <PrivateRoute path="/manageplans">
              <ManagePlans></ManagePlans>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
