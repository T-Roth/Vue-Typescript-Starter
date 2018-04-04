import Moment from "moment";

export default class DateStep implements IDateStep {
  stepCountDate: Date;
  stepCountTotal: number;

  get key():string {
    return Moment(this.stepCountDate).format("DDMMYYYY");
  }

  get enabledFlag(): boolean {
    return Moment().diff(Moment(this.stepCountDate), "day") >=0;
  }

  constructor(date: Date, stepCount:number){
    this.stepCountDate = date;
    this.stepCountTotal = stepCount;
  }
}
