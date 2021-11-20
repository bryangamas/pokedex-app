export const user = {
  username: "bgamas",
  password: "test1234",
};

export const userDetails: UserEntity = {
  username: "bgamas",
  firstName: "Bryan",
  lastName: "Gama",
  email: "me@bryangama.com",
};

export interface UserEntity {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
