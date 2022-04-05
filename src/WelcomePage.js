import React from "react";

import PaymentPage from "./PaymentPage"

const WelcomePage = ({ handleLogout, handlePayment, hasPayment, setHasPayment }) => {
    return (
        <section className="welcome">
            <nav>
                <h2>Welcome to Kapmed</h2>
                <button onClick={handlePayment}>Payment</button>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            {hasPayment ? 
                (<PaymentPage/>) 
                : 
                (<h2> </h2>)
            }
        </section>
    )
}

export default WelcomePage