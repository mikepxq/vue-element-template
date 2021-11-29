declare interface UserState {
  token: string;
  id: string;
  username: string;
  userAuth: string;
}
declare interface UserStore {
  state(): UserState;
}
