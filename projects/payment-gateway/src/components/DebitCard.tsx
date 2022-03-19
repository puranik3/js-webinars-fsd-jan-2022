// rcc
import React, { Component, ChangeEvent, FormEvent } from 'react';
import ConfirmPayment from './ConfirmPayment';
import { PaymentOption } from '../types/utils';
import { range } from '../utils/array';

type State = {
    cardNumber: number,
    nameOnCard: string,
    monthValue: number,
    yearValue: number,
    cvvNumber: number,
    showConfirmation: boolean
};

class DebitCard extends Component<{}, State> {
    static initialState = {
        cardNumber: 0,
        nameOnCard: '',
        monthValue: 0,
        yearValue: 0,
        cvvNumber: 0,
        showConfirmation: false
    };

    state = {
        ...DebitCard.initialState
    };

    payHandler = ( event : ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        } as unknown as State);
    }

    valueChange = ( event : ChangeEvent<HTMLSelectElement> ) => {
        const { name, value } = event.target;

        this.setState({
            [name]: parseInt( value )
        } as unknown as State);
    }

    submitHandler = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log( this.state );
        this.setState({
            showConfirmation: true
        });
    }

    onCancel = () => {
        this.setState({
            showConfirmation: false
        });
    }

    reset = () => {
        this.setState({
            ...DebitCard.initialState
        });
    };

// class DebitCard extends Component<{ x : number, y : string }, State> {
    // constructor( props : { x : number, y : string } ) {
    //     super( props ); // this.props = props;

    //     this.state = {
    //         cardNumber: 0,
    //         nameOnCard: '',
    //         monthValue: 0,
    //         yearValue: 0,
    //         cvvNumber: 0,
    //         showConfirmation: false
    //     };
    // }

    render() {
        const { cardNumber, nameOnCard, monthValue, yearValue, cvvNumber, showConfirmation } = this.state;

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="cnum">Credit card number</label>:
                                    <br/>
                                    (12 digit number)
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        id="cnum"
                                        name="cardNumber"
                                        min="100000000000"
                                        max="999999999999"
                                        placeholder="xxxx-xxxx-xxxx"
                                        value={cardNumber}
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>:
                                    <br/>
                                    (as on the card)
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="name"
                                        name="nameOnCard"
                                        placeholder="John Doe"
                                        value={nameOnCard}
                                        onChange={this.payHandler}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="expDate">Expiry date</label>:
                                </td>
                                <td>
                                    <select
                                        id="month"
                                        name="monthValue"
                                        value={monthValue}
                                        onChange={this.valueChange}
                                    >
                                        <option value="">mm</option>
                                        {
                                            range( 1, 12 ).map(
                                                val => (
                                                    <option
                                                        key={val}
                                                        value={val}
                                                    >
                                                        {('' + val).padStart( 2, '0' )}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                    <select
                                        id="year"
                                        name="yearValue"
                                        value={yearValue}
                                        onChange={this.valueChange}
                                    >
                                        <option value="">yyyy</option>
                                        {
                                            range( 2022, 2033 ).map(
                                                val => (
                                                    <option
                                                        key={val}
                                                        value={val}
                                                    >
                                                        {val}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cvvNum">CVV Number</label>:
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cvvNum"
                                        name="cvvNumber"
                                        placeholder="123"
                                        min="100"
                                        max="999"
                                        value={cvvNumber}
                                        onChange={this.payHandler}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit" className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                    showConfirmation && (
                        <ConfirmPayment
                            onYes={this.reset}
                            onNo={this.onCancel}
                            paymentOption={PaymentOption.CARD}
                        />
                        /* <Dialog>
                             <p>Hello dialog</p>
                             <button>Ok</button>
                        </Dialog> */
                    )
                }
            </>
        )
    }
}

export default DebitCard;