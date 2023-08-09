export interface IRegisterReqBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ILoginReqBody {
    email: string;
    password: string;
}