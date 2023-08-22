import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: "CEO & CTO jitendra",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  const [user, setUser] = useState([]);

  const url = "http://kamal.feedocenter.com/api/";
  useEffect(() => {
    const input = {
      name: "jitendra",
      email: "jitendra.ai.dev@gmail.com",
      mobile: "8340747194",
    };
    const Get = async () => {
      const { data } = await axios.post(url, input);

      setUser([data.data]);
    };
    Get();
  }, []);

  return (
    <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "100%", height: "30px", padding: "10px" }}></div>
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
      </div>
      <Tree orientation={"vertical"} data={orgChart} />
    </div>
  );
}
