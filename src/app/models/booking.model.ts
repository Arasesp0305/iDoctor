export enum BookingStatus{
    CONFIRM="CONFIRM",
    PENDING="PENDING"
}
export class Booking {
    id:string;
    client:string;
    phone: string;
    email:string;
    persons:number;
    notes:string;
    date:string;
    dateCreation:string;
    status:BookingStatus

    constructor (id:string,client:string,phone:string,email:string,persons:number,notes:string,datetimeBooking:string,dateCreation:string,status:BookingStatus){
        this.id = id;
        this.client = client;
        this.phone = phone;
        this.email = email;
        this.persons = persons;
        this.notes = notes;
        this.date = datetimeBooking;
        this.dateCreation = dateCreation;
        this.status = status
    }
    getStatus(){
        return this.status == "CONFIRM" ? "Confirmada" : "Pendiente";
    }
    
    getDateForm():string{
        let date = new Date(this.date);
        let day = date.getDate().toString().padStart(2, '0');;
        let month = (date.getMonth()+1).toString().padStart(2, '0');;
        let year = date.getFullYear();
        let hour = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');;
    
        return `${year}-${month}-${day}T${hour}:${minutes}`
    }
}