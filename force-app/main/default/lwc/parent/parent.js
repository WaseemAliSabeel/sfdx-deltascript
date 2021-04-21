import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {
    @track valueInp;
    handleSelect(event) {
        const textVal = event.detail;
        this.valueInp = textVal;
    }
}