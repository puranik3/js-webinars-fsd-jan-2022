import React, { ReactNode } from "react";

import "./Dialog.css";

type Props = {
    children: ReactNode
}

const Dialog = ( { children } : Props ) => {
    console.log( children );

    return (
        <div className="dialog-overlay">
            <div className="dialog">{children}</div>
        </div>
    );
};

export default Dialog;
