// import { Route, Routes,   } from "react-router";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
const Cjitendra = () => {
  return (
    <>
      <Link to="jay">jay</Link>
      <br />
      <Link to="jay1">jay1</Link>
      <br />
      <Link to="jay2">jay2</Link>
      <br />
      <Routes>
        <Route path="jay" element="jitendra" />
        <Route path="jay1" element="jitendra1" />
        <Route path="jay2" element="jitendra2" />
      </Routes>
    </>
  );
};
export default Cjitendra;
