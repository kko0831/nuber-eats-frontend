import React from "react";
import { PayPalButton } from 'react-paypal-button-v2';
import { toast, ToastContainer } from "react-toastify";

interface PaypalProps {
  successFunction: any;
  createOrder: any;
}

export const PayPal: React.FC<PaypalProps> = ({ successFunction, createOrder }) => {
  const notifyError = (text: string) => toast.error(`${text}`);
  const clientID = "AQU7x4Rg7fXuTKMhCYDm1sxWoGbbo1ixlgcuQ798xIBTM6T5k9hWtuFBn0Lz-OqQXDWBkSHdfIVCzXGv";
  return (
    <div>
      <ToastContainer />
      <PayPalButton
        currency="USD"
        onSuccess={successFunction}
        options={{
          clientId: clientID,
        }}
        onError={(e: any) => {
          notifyError(e.message);
        }}
        createOrder={createOrder}
      />	    
    </div>	  
  )
};