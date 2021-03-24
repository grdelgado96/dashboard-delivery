export interface Token{
    access_token:string;
    expires_in:Number;
    token_type:string;
    scope:string;
    refresh_token: string;
}
export interface UserInfo{
    client_id:string;
    client_secret:string;
    grant_type:string;
    username:string;
    password:string;
}
export interface CurrentUserData{
    id:string;
    name:string;
    bussines;
    nif:string;
    surnames:string;
    phone:string;
    image:string
}
export interface bussines{
    id:string;
    name:string;
}