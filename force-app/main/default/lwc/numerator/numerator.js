import { LightningElement,api } from 'lwc';

export default class Numerator extends LightningElement {


    // @api counter = 0;

    _currentCount = 0;
    priorCount = 0;

    @api
    get counter() {
      return this._currentCount;
    }
    set counter(value) {
      this.priorCount = this._currentCount;
      this._currentCount = value;
    }

    @api
    maximizeCounter() {
      this.counter += 1000000;
      // get set (this.counter) += 1000000;
      // this._currentCount += 1000000;
    }

    handleIncrement() {
      this.counter+=10;
    }


    handleDecrement() {
      this.counter-=10;
    }

    handleMultiply(event) {
        this.counter *= event.detail;
      }

}