import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
//import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StudentDashboardPage from "./pages/StudentDashboard";
import CoachSignUpPage from "./pages/CoachSignUp";
import CoachProfile from "./pages/CoachProfile";
import EnrollmentConfirmation from "./pages/EnrollmentConfirmation";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/StuDashboard" component={StudentDashboardPage} />
            <Route path="/CoachSignUp" component={CoachSignUpPage} />
            <Route path="/CoachProfile" component={CoachProfile} />
            <Route
              path="/EnrollmentConfirmation"
              component={EnrollmentConfirmation}
            />

            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
