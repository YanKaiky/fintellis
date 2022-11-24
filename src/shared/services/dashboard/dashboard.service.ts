// import axios from 'axios';
// import DASHBOARDAPI from './dashboard';

export interface IContinentsValuesData {

}

export interface IDashboardPaymentsReceives {
  month: string;
  value: number;
}

export interface IDashboardData {
  year: number;
  payments: IDashboardPaymentsReceives[];
  receives: IDashboardPaymentsReceives[];
  total_payments: number;
  total_received: number;
}

const getValues = async (): Promise<IDashboardData> => {
  try {
    // const response = await axios.get(DASHBOARDAPI, {
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
        receives: [
          {
            month: "January",
            value: 500.00
          },
          {
            month: "February",
            value: 500.00
          },
          {
            month: "March",
            value: 500.00
          },
          {
            month: "April",
            value: 500.00
          },
          {
            month: "May",
            value: 500.00
          },
          {
            month: "June",
            value: 500.00
          },
          {
            month: "July",
            value: 500.00
          },
          {
            month: "August",
            value: 500.00
          },
          {
            month: "September",
            value: 500.00
          },
          {
            month: "October",
            value: 500.00
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
        total_received: 5000
      }
    }

    return response.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const DashboardService = {
  getValues,
};
