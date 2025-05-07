// diccionario de datos 002

interface DebitNoticeSchema {
    fecha_emision: string;
    cliente: string;
    moneda: string;
    tipo_cambio?: number;
    condicion_pago: string;
    estado: string;
  }