export enum Gender {
    Unknown,
    Female,
    Male
}

export class Agent {
    public FirstName: string;
    public LastName: string;
    public CodeName: string;

    public Sex: Gender;
}