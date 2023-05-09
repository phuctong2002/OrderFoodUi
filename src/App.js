import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicPath, privatePath, adminPath } from "./router";
import axios from "axios";
import Auth from "./components/Auth";

axios.defaults.baseURL = process.env.REACT_APP_SERVER;

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicPath.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page/>
              </Layout>
            } />;
          })}
          <Route element={<Auth/>}>
            {
              privatePath.map( (route, index)=>{
                const Page = route.component;
                const Layout = route.layout;
                return <Route key={index} path={route.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
                }/>
              })
            }
            {
              adminPath.map( (route, index)=>{
                const Page = route.component;
                const Layout = route.layout;
                const SubLayout = route.subLayout;
                return <Route key={index} path={route.path} element={
                  <Layout>
                    <SubLayout>
                      <Page/>
                    </SubLayout>
                  </Layout>
                }/>
              })
            }
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
