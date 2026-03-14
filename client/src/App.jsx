import React, { useEffect } from "react";
import Home from "./pages/home";
import Auth from "./pages/Auth";
import InterviewPage from "./pages/InterviewPage.jsx";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice.js";

export const ServerUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {
          withCredentials: true,
        });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/interview" element={<InterviewPage />}></Route>
    </Routes>
  );
};

export default App;
