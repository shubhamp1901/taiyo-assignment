import React from "react";
import ReactApexChart from "react-apexcharts";




class ApexChart extends React.Component<
  { cases: any; deaths: any; recovered: any },
  any
> {


  constructor(props: any) {
    super(props);
    // console.log(Object.entries(props.data));

    this.state = {
      series: [
        // cases
        {
          name: "Cases",  
          data: props.cases,
          fill: {
            colors: ["rgba(255, 196, 83, 0.5)"],
          },
         
        },
        // recovered
        {
          name: "recovered",
          data: props.recovered,
          fill: {
            colors: ["rgba(68, 227, 119,0.5)"],
          },
        },
        // deaths
        {
          name: "deaths",
          data: props.deaths,
          fill: {
            colors: ["rgba(241, 77, 77, 0.5)"],
          },
        },
      ],
      options: {
        chart: {
          id: "area-datetime",
          type: "datetime",
          height: 350,
          zoom: {
            autoScaleYaxis: true,
          },
        },
        annotations: {
          yaxis: [
            {
              y: 30,
              borderColor: "#999",
              label: {
                show: true,
                // text: "Support",
                style: {
                  color: "#fff",
                  background: "#00E396",
                },
              },
            },
          ],
          xaxis: [
            {
              x: new Date("14 Nov 2012").getTime(),
              borderColor: "#999",
              yAxisIndex: 0,
              label: {
                show: true,
                // text: "Rally",
                style: {
                  color: "#fff",
                  background: "#775DD0",
                },
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
        },
        xaxis: {
          type: "datetime",
          // min: new Date("01 Mar 2012").getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
      },

      selection: "one_year",
    };
  }

  render() {
    return (
      <div id="chart">

        <div id="chart-timeline">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={500}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;
