export class Company {
  companyName: string;
  startDate: number;
  street: string;
  zipCode: number;
  city: string;
  mail: string;

  constructor(obj?: any) {
    this.companyName = obj ? obj.companyName : '';
    this.startDate = obj ? obj.startDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.mail = obj ? obj.mail : '';
  }

  public toJSON() {
    return {
      companyName: this.companyName,
      startDate: this.startDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      mail: this.mail,
    };
  }
}
