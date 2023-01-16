export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(am) {
    if (typeof am !== 'string') throw TypeError('amount must be a string');
    this._amount = am;
  }
  get amount() {
    return this._amount;
  }

  set currency(curr) {
    if (typeof curr !== 'object') throw TypeError('currency must be an object');
    this._currency = curr;
  }
  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
