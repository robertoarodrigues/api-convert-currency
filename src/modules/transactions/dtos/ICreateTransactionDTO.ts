export default interface ICreateTransactionDTO {
    origincurrency: string;
    sourcevalue: number;
    destinationcurrency: string;
    targetvalue: number;
    conversionrate: number;
    user_id: string;
  }