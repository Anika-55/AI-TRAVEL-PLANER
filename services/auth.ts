import api from "../lib/api";

export type AuthUser = {
  id: string;
  name: string | null;
  email: string;
  avatar: string | null;
  role: "USER" | "ADMIN";
};

export type AuthResponse = {
  user: AuthUser;
  token: string;
};

export async function login(email: string, password: string) {
  const { data } = await api.post<AuthResponse>("/auth/login", { email, password });
  return data;
}

export async function register(input: {
  name: string;
  email: string;
  password: string;
}) {
  const { data } = await api.post<AuthResponse>("/auth/register", input);
  return data;
}
