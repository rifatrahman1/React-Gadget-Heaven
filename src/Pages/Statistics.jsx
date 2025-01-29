import { useEffect } from "react";
import Chart from "../Components/ChartData";


const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
      }, []);
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold">Statistics</h1>
            <Chart></Chart>
        </div>
    );
};

export default Statistics;