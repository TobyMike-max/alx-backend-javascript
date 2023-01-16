export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building 
	    && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqt !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  set sqft(sqt) {
    if (typeof sqt !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqt;
  }
  get sqft() {
    return this._sqft;
  }
}
