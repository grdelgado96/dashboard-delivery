
export interface RestaurantList{
    id:string;
    name:string;
    logo:string;
    address:string;
}

export interface RestaurantParams{
    name:string;
    lat:string;
    lng:string;
    address:string;
}
export interface Restaurant{
    menus: [string],
    id:string;
    name:string;
    lat:string;
    lng:string;
    image: string;
    Images:[string];
    address:string;
}