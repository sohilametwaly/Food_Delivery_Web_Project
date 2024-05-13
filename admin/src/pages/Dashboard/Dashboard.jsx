import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const url = "http://localhost:3000";

  const [orders, setOrders] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  //   const [state, setState] = useState({
  //     options: {
  //       Chart: {
  //         type: "line",
  //       },
  //       tooltip: {
  //         theme: "default",
  //       },
  //       colors: ["#ff6347"],
  //       dataLabels: {
  //         enable: true,
  //       },
  //       stroke: {
  //         curve: "smooth",
  //       },
  //       title: {
  //         text: "Sales Trend",
  //         align: "left",
  //       },
  //       grid: {
  //         borderColor: "#000000",
  //       },
  //       markers: {
  //         size: 1,
  //       },
  //       xaxis: {
  //         categories: [],
  //         title: {
  //           text: "Date",
  //         },
  //       },
  //       yaxis: {
  //         title: {
  //           text: "Sales",
  //         },
  //         min: 0,
  //       },
  //       legend: {
  //         position: "top",
  //         horizontalAlign: "right",
  //         floating: true,
  //         offsetX: -5,
  //         offsetY: -25,
  //       },
  //     },
  //     series: [{ name: "Sales", data: [] }],
  //   });

  const fetchdisplayInfo = async () => {
    const response1 = await axios.get(`${url}/api/order/list`);
    const response2 = await axios.get(`${url}/api/user/list`);
    if (response1.data.success && response2.data.success) {
      setOrders(response1.data.data);
      setNumberOfUsers(response2.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchdisplayInfo();
  }, []);

  //   useEffect(() => {
  //     if (orders.length > 0) {
  //       const formattedOrders = orders.map((order) =>
  //         order.items.map((item) => ({ x: item._id, y: item.category }))
  //       );
  //       setState((prevState) => ({
  //         ...prevState,
  //         options: {
  //           ...prevState.options,
  //           xaxis: {
  //             categories: formattedOrders.map((item) => item.x),
  //           },
  //         },
  //         series: [
  //           { name: "Sales", data: formattedOrders.map((item) => item.y) },
  //         ],
  //       }));
  //     }
  //   }, [orders]);

  //orders.map((order) => order.items.map((item) => item.name)),

  const chartData = {
    options: {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: orders
          .map((order) => order.items.map((item) => item.name))
          .flat(),
        title: {
          text: "Items",
        },
      },
      yaxis: {
        title: {
          text: "Quantity",
        },
      },
      tooltip: {
        enabled: false, // Disable default tooltip
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top",
            offsetY: -30,
            style: {
              fontSize: "12px",
              colors: ["#ff6347"],
            },
            formatter: function (val, opts) {
              const itemName = opts.w.globals.labels[opts.dataPointIndex];
              const quantity = opts.w.globals.series[0][opts.dataPointIndex];
              return `${itemName}: ${quantity}`;
            },
          },
        },
      },
    },
    series: [
      {
        name: "Quantity",
        data: orders.flatMap((order) =>
          order.items.map((item) => item.quantity)
        ),
      },
    ],
  };
  const totalSales = orders.reduce((finalTotal, order) => {
    return (
      finalTotal +
      order.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  }, 0);

  return (
    <div className="w-[80%] m-auto  flex flex-col gap-[80px] pt-[2%] ">
      <div className="flex gap-3 justify-between  font-custom">
        <div className="text-center p-2 rounded-[10%] shadow-2xl w-[20%] h-[30%]">
          <h2 className="font-bold text-[25px] text-[#ff6347]">Sales</h2>
          <p className="text-gray-500">${totalSales}</p>
        </div>
        <div className="text-center p-2 rounded-[10%] shadow-2xl w-[20%] h-[30%]">
          <h2 className="font-bold text-[25px] text-[#ff6347]">customers</h2>
          <p className="text-gray-500">{numberOfUsers}</p>
        </div>
        <div className="text-center p-2 rounded-[10%] shadow-2xl w-[20%] h-[30%]">
          <h2 className="font-bold text-[25px] text-[#ff6347]">All Orders</h2>
          <p className="text-gray-500">{orders.length}</p>
        </div>
      </div>
      <div>
        <div>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
