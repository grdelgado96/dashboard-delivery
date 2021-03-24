
export interface ShopsList{
    id:string;
    name:string;
    logo:string;
    address:string;
}

export interface ShopsParams{
    name:string;
    lat:string;
    lng:string;
}
export interface Shops{
    stockProd: [string],
    id:string;
    name:string;
    lat:string;
    lng:string;
    image: string;
    Images:[string];
}