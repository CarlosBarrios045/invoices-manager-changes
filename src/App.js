import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Invoices from "./pages/Invoices";
import Details from "./pages/Details";

// Components
import Bar from "./components/Molecules/Bar";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Bar />
        <Switch>
          <Route exact path="/" component={Invoices} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
