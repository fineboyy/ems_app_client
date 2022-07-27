import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRefreshMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import FullScreenLoader from "../../components/Loader/FullScreenLoader/FullScreenLoader";

export const RequireRefresh = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation(-1)


  const [refresh, { isSuccess, isError }] = useRefreshMutation();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    !token && verifyRefreshToken()
  },[])
  const verifyRefreshToken = async () => {
      try {
      const data = await refresh().unwrap();
      await dispatch(setCredentials({ ...data }));
      navigate(location) 
      console.log("Data", data);
    } catch (error) {
      console.log(error);
    }
  };

  if(token || isSuccess || isError) return <Outlet />
   return <FullScreenLoader />
};
