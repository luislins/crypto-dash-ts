declare type loginRequest = {
  email: string;
  password: string;
};

declare type loginResponse = {
  token: string;
};

declare type genericError = {
  error: string;
};

declare type UserType = {
  id: number;
  email: string;
  password?: string;
};
