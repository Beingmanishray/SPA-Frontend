import React, { useContext } from "react";
import Button from "../common/Button";
import { ListContext } from "../../context/ListContext";

const Dashboard: React.FC = () => {
  const { list } = useContext(ListContext);
  console.log(list);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Button to="/list">Go to List</Button>
        <h1>Dashboard</h1>
      </div>
      <h2>Favorites List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {list ? list.map((item, index) => (
          item.favorite && <div key={index} style={{ flex: "1 0 30%", marginBottom: 16 }}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <div>
              <p>{item.title}</p>
            </div>
          </div>
        ))
      : <h4>No Data Found.</h4>}
      </div>
    </div>
  );
};

export default Dashboard;
