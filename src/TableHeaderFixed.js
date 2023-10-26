import { useRef, useEffect } from "react";
const TableHeaderFixed = () => {
  const tableRef = useRef();
  const usersData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
    { id: 4, name: "Eva Brown", email: "eva.brown@example.com" },
  ];
  useEffect(() => {
    const table = tableRef.current;
    const header = table.querySelector("thead");

    const handleScroll = () => {
      if (window.pageYOffset > table.offsetTop) {
        // header.classList.add("sticky-top");
      } else {
        // header.classList.remove("sticky-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Tr = () => {
    return (
      <>
        {usersData.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </>
    );
  };
  return (
    <>
      <table className="table" ref={tableRef}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <Tr></Tr>
        </tbody>
      </table>

      {/* css code */}
      {/* <div style={{ postion: "relative", height: "100%" }}>
        <button>
          jitendra
          <table className="table table-info ">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{" "}
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </button>
      </div> */}
    </>
  );
};

export default TableHeaderFixed;
