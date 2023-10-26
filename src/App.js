import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Tree from "react-d3-tree";
import axios from "axios";
import { tree } from "./data";
import Team from "./Team";
import TeamTypesComponent from "./TeamTypesComponent";
import Etable from "./Etable";
import Cjitendra from "./Cjitendra";
import TableHeaderFixed from "./TableHeaderFixed";
const a = [1, 4, 4, 54];

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
// const orgChart = {
//   name: "CEO & CTO jitendra",
//   children: [
//     {
//       name: "Manager",
//       attributes: {
//         department: "Production",
//       },
//       children: [
//         {
//           name: "Foreman",
//           attributes: {
//             department: "Fabrication",
//           },
//           children: [
//             {
//               name: "Worker",
//             },
//           ],
//         },
//         {
//           name: "Foreman",
//           attributes: {
//             department: "Assembly",
//           },
//           children: [
//             {
//               name: "Worker",
//             },
//           ],
//         },
//         {
//           name: "Foreman",
//           attributes: {
//             department: "Assembly",
//           },
//           children: [
//             {
//               name: "Worker",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export default function OrgChartTree() {
  // Syed Aribya
  const [user, setUser] = useState([]);
  // const url = ["https://dummyjson.com/products", "https://dummyjson.com/carts"];

  // const takeUrl = (url) => {
  //   url.map(async (url_item, i) => {
  //     const { data } = await axios.get(url_item);
  //     data.products.map((products) => {
  //       console.log(products.id);
  //       // console.log(data.carts.map((item) => products.id === item.id));
  //     });
  //   });
  // };

  // useEffect(() => {
  //   takeUrl(url);
  // }, [url]);

  // console.log(tree.value.teamTypes.map((tema) => tema.roleLevels));

  const GetProxyUsers = ({ proxyUsers }) => {
    const length = proxyUsers.length;
    const [max, setMax] = useState(2);
    const [cliked, setClicked] = useState();
    return (
      <>
        <button
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          type="button"
          onClick={() => max !== length && setMax(max + 1)}
        >
          {length - max}
        </button>
        {proxyUsers.slice(0, max).map((user, index) => (
          <li>
            <button
              type="button"
              // onMouseLeave={() => setClicked()}
              onClick={() => setClicked(index)}
            >
              {user.titleName}
              <br />
              {user.firstNameAndLastName}
            </button>
            {index === cliked && (
              <ul>
                <button>
                  <li>{user.activeInd}</li>
                  <li>{user.email}</li>
                  <li>{user.firstName}</li>
                  <li>{user.firstNameAndLastName}</li>
                  <li>{user.id}</li>
                  <li>{user.lastName}</li>
                  <li>{user.officePhoneNumber}</li>
                  <li>{user.phoneNumber}</li>
                  <li>{user.titleName}</li>
                  <li>{user.upiNumber}</li>
                </button>
              </ul>
            )}
          </li>
        ))}
      </>
    );
  };

  const obj1 = [
    { name: "test1", age: 25 },
    { name: "test2", age: 25 },
    { name: "test3", age: 26 },
  ];

  const obj2 = [
    { name: "test1", age: 25 },
    { name: "test6", age: 25 },
    { name: "test3", age: 26 },
  ];

  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  obj1.map((item) =>
    obj2.map((item2) => {
      if (shallowEqual(item, item2)) {
        console.log("joy", item);
      }
    })
  );

  // function compareObjects(obj1, obj2) {
  //   const keys1 = Object.keys(obj1);
  //   const keys2 = Object.keys(obj2);

  //   if (keys1.length !== keys2.length) {
  //     return false;
  //   }

  //   return keys1.every((key) => obj1[key] === obj2[key]);
  // }

  // const result = obj1.filter((item1) =>
  //   obj2.some((item2) => compareObjects(item1, item2))
  // );

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://ninjassite-production.up.railway.app/chapter"
      );
      console.log(data);
    })();
  }, []);

  return (
    <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="courses">Courses</Link>
          <br />
          <Link to="hi">Hi</Link>
          <br />
        </nav>
        <Routes>
          <Route path="/" element={"<Home />"} />
          <Route path="/hi/*" element={<Cjitendra />} />
          {/* <Route
            path="/courses"
            element={
              <div className="Page">
                <h1>You are in the Courses page!</h1>
                <h3>URL: localhost:3000/courses</h3>
                <div className="courses-nav">
                  <Link to="/courses/search">Search</Link>
                  <Link to="/courses/list">List</Link>
                </div>
                <Outlet />
              </div>
            }
          >
            <Route path="search" element={<TeamTypesComponent data={tree} />} />
            <Route path="list" element={"<List />"} />
          </Route> */}
        </Routes>
      </Router>

      {/* <div style={{ width: "100%", height: "30px", padding: "10px" }}></div>
      <div>
        {!user && <small>Loading...</small>}
        {user &&
          user.map((item) => (
            <ul>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.mobile}</li>
            </ul>
          ))}
      </div> */}
      {/* <div>
        {tree.value.teamTypes.map((item) => (
          <>
            <button>{item.teamTypeName}</button>
            <ul>
              {item.roleLevels.map((role) => (
                <li>
                  {role.roleLevelNme}
                  <ul>
                    {role.roles.map((roleItem) => (
                      <li>
                        {roleItem.roleName}
                        <ul>
                          <GetProxyUsers proxyUsers={roleItem.proxyUsers} />
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div> */}
      {/* <Tree orientation={"vertical"} data={orgChart} /> */}
      {/* <Team teamData={tree} /> */}
      {/* <TeamTypesComponent data={tree} /> */}

      {/* <Etable /> */}

      <TableHeaderFixed />
    </div>
  );
}
