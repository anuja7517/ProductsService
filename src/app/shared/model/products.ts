export interface Iproduct {
    
    pname: string;
    pdetails: string;
    pstatus: ProductsStatus;
    id: string;
}
//enum creat
export enum ProductsStatus {
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered  = " Delivered"
}