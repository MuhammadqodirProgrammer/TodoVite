import React from "react";
import { PreviteHeader } from "../components/PreviteHeader/PreviteHeader";
import { Routes, Route } from "react-router-dom";
import { PreviteHome } from "../pages/PreviteHome/PreviteHome";
import { Posts } from "../pages/Posts/Posts";
import { Users } from "../pages/Users/User";
export const Private = () => {
  return (
    <div>
      <PreviteHeader />
      <div className="container">
        <Routes>
          <Route index path="/" element={<PreviteHome />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h1 className="text-danger">Not found !!!</h1>} />
        </Routes>
      </div>
    </div>
  );
};
