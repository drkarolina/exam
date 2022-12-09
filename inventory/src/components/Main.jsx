import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Index.jsx";
import ItemsPage from "./items/Items.jsx";
import HistoryPage from "./history/History.jsx";
import CreateItem from "./items/CreateItem.jsx";
import UpdateItem from "./items/UpdateItem.jsx";
import CreateHistory from "./history/CreateHistory.jsx";
import UpdateHistory from "./history/UpdateHistory.jsx";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
        <Route exact path="/items" element={<ItemsPage />}></Route>
        <Route exact path="/history" element={<HistoryPage />}></Route>
        <Route exact path="/create-item" element={<CreateItem />}></Route>
        <Route exact path="/update-item/:id" element={<UpdateItem />}></Route>
        <Route exact path="/create-history" element={<CreateHistory />}></Route>
        <Route
          exact
          path="/update-history/:id"
          element={<UpdateHistory />}
        ></Route>
      </Routes>
    </>
  );
};

export default Main;
