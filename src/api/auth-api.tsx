import api from "./api";

async function login(req: loginRequest) {
  const { data, status } = await api.post<loginResponse>("auth/login", req);
  return data;
}

async function signUp(req: loginRequest) {
  const { data, status } = await api.post<loginResponse>("auth/signup", req);
  return data;
}

export { login, signUp };
