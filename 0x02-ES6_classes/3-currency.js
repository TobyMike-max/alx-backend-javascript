export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('code must be a string');
    if (typeof name !== 'string') throw TypeError('name must be a string');
    this._code = code;
    this._name = name;
  }

  set code(cd) {
    if (typeof cd !== 'string') throw TypeError('code must be a string');
    this._code = cd;
  }
  get code() {
    return this._code;
  }

  set name(nm) {
    if (typeof nm !== 'string') throw TypeError('name must be a string');
    this._name = nm;
  }
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
