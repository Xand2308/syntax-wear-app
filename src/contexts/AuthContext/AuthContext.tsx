import { createContext, useContext } from "react";

export type User = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  avatarUrl: string;
  phone: string;
  cpf: string;
  birthdate: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type RegisterImput = Credentials & {
  firstname: string;
  lastname: string;
  phone: string;
  cpf: string;
  birthdate: string;
};

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    // loading: boolean;
    // error: string | null;
    signIn: (credentials: Credentials) => Promise<void>;
    register: (data: RegisterImput) => Promise<void>;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function useAuth(){
    return useContext(AuthContext);
}