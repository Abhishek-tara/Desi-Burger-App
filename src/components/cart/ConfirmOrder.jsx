import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
       <main>
        <h1>Confirm Order</h1>
        <form >
            <div>
                <label >Cash on Delivery</label>
                <input type="radio" name='payment' />
            </div>
            <div>
                <label >Online Payment</label>
                <input type="radio" name='payment' />
            </div>
            <button type="submit">Pay Now</button>
        </form>
       </main>
    </section>
  )
}

export default ConfirmOrder;