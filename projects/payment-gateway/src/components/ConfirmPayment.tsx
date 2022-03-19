import React, { useState } from "react";
import { PaymentOption } from "../types/utils";
import Dialog from "./Dialog";
import SuccessPayment from './SuccessPayment';

type Props = {
    onYes: () => void,
    onNo: () => void,
    paymentOption: PaymentOption
}

const ConfirmPayment = ( { onYes, onNo, paymentOption } : Props ) => {
    const [ showSuccess, setShowSuccess ] = useState( false );

    if( showSuccess ) {
        return (
            <SuccessPayment
                onClose={onYes}
                paymentOption={paymentOption}
            />
        );
    } else {
        return (
            <Dialog>
                <div style={{ textAlign: 'center' }}>
                    <h3>Proceed to complete the payment</h3>
                    <button
                        className="btn btn-cancel"
                        onClick={onNo}
                    >
                        No
                    </button>
                    <button
                        className="btn btn-confirm"
                        onClick={() => setShowSuccess( true )}
                    >
                        Yes
                    </button>
                </div>
            </Dialog>
        )
    }
};

export default ConfirmPayment;
