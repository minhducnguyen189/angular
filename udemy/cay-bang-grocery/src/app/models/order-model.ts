import { FormControl } from "@angular/forms";

export interface Order {
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    phone: FormControl;
    address: FormControl;
    sex: FormControl;
}