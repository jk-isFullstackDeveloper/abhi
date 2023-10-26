import ExpandableTable from "./ExpandableTable";

const Etable = () => {
  const data = [
    { id: 1, name: "jitendra", details: "Details for Item 1" },
    { id: 2, name: "jay", details: "Details for Item 2" },
    { id: 3, name: "Sakshi", details: "Details for Item 3" },
  ];

  return (
    <div className="App">
      <h1>Expandable Table</h1>
      <ExpandableTable data={data} />
    </div>
  );
};

export default Etable;
