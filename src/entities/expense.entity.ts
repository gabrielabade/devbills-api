type ExpenseProps = {
  _id?: string;
  title: string;
  color: string;
  amount: number;
};

export class Expense {
  public _id?: string;
  public title: string;
  public color: string;
  public amount: number;

  constructor({ _id, title, amount, color }: ExpenseProps) {
    this._id = _id;
    this.title = title;
    this.amount = amount;
    this.color = color;
  }
}
