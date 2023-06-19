export interface IUserInformationState {
    name?: string;
    emailUser?: string;
    imageUser?: string;
}

export interface IUserReducer {
    userReduce: IUserInformationState
}