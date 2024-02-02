import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async (data) => {
            try {
                // Fetch data from your Node.js server
                const response = await axios.get(
                    "http://localhost:3000/api/v1/get-data"
                );
                setCryptoData(response.data);
                // console.log("Crypto Data:", response.data);

                console.log();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    // let num = num + 1;
    let counter = 0;
    // setTimeout(function () {
    //     location.reload();
    // }, 5000);

    return (
        <div>
            <header className="bg-gray-800 text-white p-4 pl-10 pr-10 flex justify-between items-center">
                <h1 className="text-4xl font-bold cursor-pointer" style={{ color: "#6CCACB" }}>
                    HODLINFO
                </h1>
                <div className="flex items-center space-x-4">
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        BUY BTC
                    </button> */}
                    <button className="hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl" style={{ backgroundColor: "#3DC6C1" }}>
                        Connect Telegram
                    </button>
                </div>
            </header>
            <div className="py-10" style={{ backgroundColor: "#191d28" }}>
                {/* <h2
                    className="text-2xl font-bold text-center mb-4"
                    style={{ color: "#818389" }}
                >
                    Best Price to Trade
                </h2> */}
                <table className="table-auto w-full text-gray-800">
                    <thead style={{ color: "#818389" }} className="cursor-pointer">
                        <tr className="text-xl">
                            <th className="p-2">#</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Last Traded Price</th>
                            <th className="p-2">Buy Price</th>
                            <th className="p-2">Sell Price</th>
                            <th className="p-2">Volume</th>
                            <th className="p-2">Base unit</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: "#818389" }}>
                        {cryptoData.map((data) => {
                            counter++;
                            let lastNumber = new Intl.NumberFormat("en-IN").format(data.last);
                            let buyNumber = new Intl.NumberFormat("en-IN").format(data.buy);
                            let sellNumber = new Intl.NumberFormat("en-IN").format(data.sell);
                            let volumeNumber = new Intl.NumberFormat("en-IN").format(data.volume);

                            return (
                                <tr key={data.name} className="text-white text-center text-xl font-bold p-2" >
                                    <td className="p-2" style={{ backgroundColor: "#2E3241" }}>{counter}</td>
                                    <td className="p-2 " style={{ backgroundColor: "#2E3241" }} >{data.name}</td>
                                    <td className="p-2" style={{ backgroundColor: "#2E3241" }}>₹ {lastNumber}</td>
                                    <td className="p-2 " style={{ backgroundColor: "#2E3241" }}>₹ {buyNumber}</td>
                                    <td className="p-2 " style={{ backgroundColor: "#2E3241" }}>₹ {sellNumber}</td>
                                    <td className="p-2 " style={{ backgroundColor: "#2E3241" }}>{volumeNumber}</td>
                                    <td className="p-2 " style={{ backgroundColor: "#2E3241" }}>{data.base_unit}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Dashboard;
