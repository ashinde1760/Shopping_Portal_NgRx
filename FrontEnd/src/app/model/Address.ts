

export class Address {

    Area: string;
    Landmark: string;
    Pincode:string;
    Town: string;
    State: string;

    constructor(Area: string, Landmark: string,Pincode:string, Town: string, State: string) {
        this.Area = Area;
        this.Landmark = Landmark;
        this.Pincode=Pincode;
        this.Town = Town;
        this.State = State;
    }
}
