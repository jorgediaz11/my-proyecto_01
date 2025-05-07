// diccionario de datos 002

export type AnticipoSchema = {
    id:string;
    numero_solicitud?:string;
    fecha_solicitud:string;
    solicitante:string;
    importe:number;
    moneda:string;
    estado:string;
    motivo:string;
}

export type ResponseAnticipoSchema = {
    data:AnticipoSchema[];
    page_size:number;
    total_count:number;
    current_page:number;
}