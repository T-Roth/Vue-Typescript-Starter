import Moment from "moment";

export default class MonthSteps implements IMonthSteps {
  month: Date;
  dateSteps: IDateStep[];

  constructor(month: Date, dateSteps: IDateStep[]){
    this.month = month;
    this.dateSteps = dateSteps;
  }

  get key():string {
      return Moment(this.month).format("MMYYYY");
  }

  get monthName():string {
      return Moment(this.month).format("MMMM");
  }
}
