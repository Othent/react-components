export { default as Button } from "./Button";
export { default as Avatar } from "./Avatar";
export { default as UserInfo } from "./UserInfo";
export interface UserData {
  contract_id: string;
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
}
