import React, { useState } from "react";
import Input from "../components/Input";
import Icons from "../assets/svg";

import { useMutation } from "react-query";
import { http } from "../services/appService";
import { useNavigate } from "react-router-dom";
import useNotifications from "../hooks/useNotifications";

interface IProps {
  email: string;
  password: string;
}

const Login = () => {
  const [userDetail, setUserDetail] = useState<IProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { openNotifications } = useNotifications();

  const handleChange = (e: any) => {
    setUserDetail({
      ...userDetail,
      [e?.target.name]: e?.target.value,
    });
  };

  const { isLoading, mutate } = useMutation(
    (formItem: IProps) => {
      return http.post("/auth/login/", formItem);
    },
    {
      onSuccess({ data }) {
        openNotifications({ type: "success", message: "Login successfully" });
        localStorage.setItem("token", data?.data?.token);
        navigate("/");
      },
      onError(err) {},
    }
  );

  return (
    <div className='flex items-center justify-center h-screen w-[100%]'>
      <div className='w-[50%]'>
        <div className='flex flex-col items-left justify-end my-3'>
          <Icons.ReubecomLogo />
          <h1 className='font-bold my-3'>
            Hi Welcome, Kindly Login to continue
          </h1>
        </div>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            mutate(userDetail);
          }}
        >
          <Input
            placeholder='Email'
            name='email'
            customStyle={{ marginBottom: "10px" }}
            onChange={handleChange}
          />
          <Input
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <button
            style={{
              backgroundColor: "#D10121",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              width: "100%",
            }}
            type='submit'
            className='px-2 py-2 mt-5 text-center flex items-center justify-center cursor-pointer'
          >
            <p className='text-center font-bold'>
              {!isLoading ? "Login" : "Loading"}
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
