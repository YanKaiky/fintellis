// import axios from 'axios';
// import BILLSTOPAYAPI from './bills.to.pay';

export interface IPayments {
  month: string;
  value: number;
}

export interface IPaymentsData {
  year: number;
  payments: IPayments[];
  total_payments: number;
}

const getValues = async (): Promise<IPaymentsData> => {
  try {
    // const response = await axios.get(BILLSTOPAYAPI, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
    //   }
    // });

    const response = {
      data: {
        year: 2022,
        payments: [
          {
            month: "January",
            value: 2500.00
          },
          {
            month: "February",
            value: 2500.00
          },
          {
            month: "March",
            value: 2500.00
          },
          {
            month: "April",
            value: 2500.00
          },
          {
            month: "May",
            value: 2500.00
          },
          {
            month: "June",
            value: 2500.00
          },
          {
            month: "July",
            value: 2500.00
          },
          {
            month: "August",
            value: 2500.00
          },
          {
            month: "September",
            value: 2500.00
          },
          {
            month: "October",
            value: 2500.00
          },
          {
            month: "November",
            value: 0.00
          },
          {
            month: "December",
            value: 0.00
          },
        ],
        total_payments: 25000,
      }
    }

    return response.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const BillsToPayService = {
  getValues,
};
