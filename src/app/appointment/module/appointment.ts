import { Client } from "../../client/module/client.module";

export interface Appointment {
    id:number
    client:Client
    motif:String
    status:String
    dateRdv:Date
    dateDemande:Date

}
