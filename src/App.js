import React, { useMemo } from "react";
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
  const input = {
    name: "jitendra",
    email: "jitendra.ai.dev@gmail.com",
    mobile: "8340747194",
  };
  const url = "http://kamal.feedocenter.com/api/";

  const Get = async () => {
    const { data } = await axios.post(url, input);
    console.log(data);
  };

  useMemo(() => {
    Get();
  }, []);

  return (
    <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
      <Tree orientation={"vertical"} data={orgChart} />
    </div>
  );
}
