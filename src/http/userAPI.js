import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (login, password) => {
  const { data } = await $host.post("/api/user/registration", {
    login,
    password,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (login, password) => {
  const { data } = await $host.post("/api/user/login", { login, password });
  localStorage.setItem("token", data.token);
  const decodedToken = jwtDecode(data.token);
  const userId = decodedToken.id;
  localStorage.setItem("userId", userId);
  console.log("log", localStorage)
  return jwtDecode(data.token);
};

export const check = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const { data } = await $authHost.get("/api/user/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } else {
    throw new Error("No token available");
  }
};
