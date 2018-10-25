export class Order {
    private _timeOfDate: string;
    private _orders: string;

    constructor(public order: string) {
      this._timeOfDate = this.getTimeDay();
    }

    private getTimeDay() {
        const separatorPositon = this.order.indexOf(',');
        this._orders = '';
        return (this.order.substr(0, separatorPositon)).replace(/\s+/g, '');
    }

    get timeOfDate(): string {
        return this._timeOfDate;
    }

    get orders(): string {
        const separatorPositon = this.order.indexOf(',');
        const newString = this.order.slice(separatorPositon + 1, this.order.length + 1);
        let numberOrders = newString.split(",").map(Number);
        let ordersLiteral;


        numberOrders = numberOrders.sort((a, b) => a - b);


        if (this.timeOfDate.toLowerCase() == 'morning') {
            let rep = 1;
            ordersLiteral = numberOrders.map((number): string => {
                if (number == 1) return 'Eggs';
                if (number == 2) return 'Toast';
                if (number == 3) return 'Coffee';

                return 'Error';
            });

            for (let i = 0; i < ordersLiteral.length; i++) {
                const orderItem = ordersLiteral[i];
                const lastItem = ordersLiteral.length-1;

                if (this._orders) {
                    const repOrder = (this._orders.match(new RegExp(orderItem, 'g')) || []).length;

                    if (repOrder > 0 && orderItem !== 'Coffee') {
                        this._orders = `${this._orders}Error`;
                        break;
                    }

                    if (repOrder > 0 && orderItem === 'Coffee') {
                        rep = rep + 1;
                        continue;
                    }
                }

                if (orderItem !== 'Error') {
                    this._orders = `${this._orders}${orderItem}${lastItem == i ? '' : ', '}`;
                }

                if (orderItem == 'Error'){
                    this._orders = `${this._orders}${orderItem}${lastItem == i ? '' : ', '}`;
                    break;
                }
            }

            this._orders = rep > 1 ? this._orders.replace('Coffee,', `Coffee(x${rep})`) : this._orders;
        }


        if (this.timeOfDate.toLowerCase() == 'night') {
            let rep = 1;
            ordersLiteral = numberOrders.map((number): string => {
                if (number == 1) return 'Steak';
                if (number == 2) return 'Potato';
                if (number == 3) return 'Wine';
                if (number == 4) return 'Cake';

                return 'Error';
            });

            for (let i = 0; i < ordersLiteral.length; i++) {
                const orderItem = ordersLiteral[i];
                const lastItem = ordersLiteral.length - 1;

                if (this._orders) {
                    const repOrder = (this._orders.match(new RegExp(orderItem, 'g')) || []).length;

                    if (repOrder > 0 && orderItem !== 'Potato') {
                        this._orders = `${this._orders}Error`;
                        break;
                    }

                    if (repOrder > 0 && orderItem === 'Potato') {
                        rep = rep + 1;
                        continue;
                    }
                }

                if (orderItem !== 'Error') {
                    this._orders = `${this._orders}${orderItem}${lastItem == i ? '' : ', '}`;
                }

                if (orderItem == 'Error') {
                    this._orders = `${this._orders}${orderItem}${lastItem == i ? '' : ', '}`;
                    break;
                }
            }
            this._orders = rep > 1 ? this._orders.replace('Potato', `Potato(x${rep})`) : this._orders;
        }

        return this._orders;
    }
}

