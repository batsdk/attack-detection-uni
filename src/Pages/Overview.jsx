import React, { useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Overview = () => {
  const [barChartData, setBarChartData] = useState([
    {
      label: "Data Poisoning",
      value: "290",
    },
    {
      label: "Model Poisoning",
      value: "260",
    },
    {
      label: "Byzantine",
      value: "180",
    },
    {
      label: "Sybil",
      value: "140",
    },
  ]);

  // Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Attack Types and Number of Attacks",    //Set the chart caption
      subCaption: "",             //Set the chart subcaption
      xAxisName: "Attack Type",           //Set the x-axis name
      yAxisName: "Number of Attacks",  //Set the y-axis name
      numberSuffix: "",
      theme: "fusion"                 //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: barChartData
  }
};

  return (
    <div>
      <h1>Overview Page</h1>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Overview;
