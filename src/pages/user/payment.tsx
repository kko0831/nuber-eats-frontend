import { gql, useMutation } from "@apollo/client";
import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPal } from "../../components/paypal";
import { useMe } from "../../hooks/useMe";
import {
  createPayment,
  createPaymentVariables,
} from "../../__generated__/createPayment";

const CREATE_PAYMENT_MUTATION = gql`
  mutation createPayment($input: CreatePaymentInput!) {
    createPayment(input: $input) {
      ok
      error
    }
  }
`;

interface IParams {
  restaurantId: string;
}

export const Payment = () => {
  const { restaurantId } = useParams<IParams>();
  const notifyError = (text: string) => toast.error(`${text}`);
  const notifySuccess = (text: string) => toast.success(`${text}`);
  const notifyWarn = (text: string) => toast.warn(`${text}`);
  const onCompleted = (data: createPayment) => {
    if (data.createPayment.ok) {
      notifySuccess("Your restaurant is being promoted!");
    }
  };
  const [createPaymentMutation, { loading }] = useMutation<
    createPayment,
    createPaymentVariables
  >(CREATE_PAYMENT_MUTATION, {
    onCompleted,
  });
  // const successFunction = useCallback(async (details, data) => {
  //   console.log("Details---------->", details);
  //   console.log("Data------------->", data);
  //   notifyWarn('Please wait for payment progress...');
  //   try {
  //     createPaymentMutation({
  //       variables: {
  //         input: {
  //           transactionId: data?.orderID,
  //           restaurantId: +restaurantId,
  //         },
  //       },
  //     });
  //   } catch (e) {
  //     notifyError(e.message);
  //   }
  //   return;
  // }, [])
  const successFunction = (details: any, data: any) => {
    console.log("Details---------->", details);
    alert("Transaction completed by " + details.payer.name.given_name);

    notifyWarn("Please wait for payment progress...");
    try {
      createPaymentMutation({
        variables: {
          input: {
            transactionId: data?.orderID,
            restaurantId: +restaurantId,
          },
        },
      });
    } catch (e) {
      notifyError(e.message);
    }
    return;
  };
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          reference_id: 1234,
          description: "Attempt n.1 for Quote ID 1234",
          amount: {
            currency_code: "USD",
            value: 14.4,
            breakdown: {
              item_total: { currency_code: "USD", value: "12" },
              shipping: { currency_code: "USD", value: "1" },
              tax_total: { currency_code: "USD", value: "1.4" },
              discount: { currency_code: "USD", value: "0" },
            },
          },
          items: [
            {
              name: 'OnePlus 6 T-rex 12" name for 14"" blabla " more double quotes',
              unit_amount: {
                currency_code: "USD",
                value: 12,
              },
              tax: {
                currency_code: "USD",
                value: 1.4,
              },
              quantity: 1,
              sku: "The stock keeping unit",
              category: "PHYSICAL_GOODS",
            },
          ],
          shipping: {
            address: {
              address_line_1: "Some line 1",
              address_line_2: "Some line 2",
              admin_area_2: "Some city",
              admin_area_1: "some state",
              postal_code: "12345",
              country_code: "GB",
            },
          },
        },
      ],
    });
  };
  const promotionPrice = 5;
  return (
    <div className="container flex flex-col items-center mt-52">
      <Helmet>
        <title>Buy Promotion | Uber Eats</title>
      </Helmet>
      <div className="grid max-w-screen-sm gap-3 mt-5 w-full mb-5">
        <h4 className="font-semibold text-2xl mb-3">
          Buy Promotion: ${`${promotionPrice}`}
        </h4>
        <PayPal successFunction={successFunction} createOrder={createOrder} />
      </div>
      <ToastContainer />
    </div>
  );
};
