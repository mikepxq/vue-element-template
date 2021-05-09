declare interface UserState {
  token: string;
  id: string;
  username: string;
  userAuth: string;
}
declare interface UserStore {
  state(): UserState;
}

//
declare type ResDataLogin = {
  token: string;
  id: number | string;
};
declare type ReqDataLogin = {
  username: string;
  password: string;
};
declare type ReqDataUserInfo = {
  id: string;
};
declare type ResDataUserInfo = {
  username: string;
};
