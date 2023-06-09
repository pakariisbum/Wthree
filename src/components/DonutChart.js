import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [this.props.value],
      options: {
        chart: {
          height: 120,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              show: false,
              margin: 20,
              size: "72%",
              background: "#fff",
              dropShadow: {
                enabled: false,
              },
            },
            track: {
              background: this.props.background
                ? this.props.background
                : "rgba(67, 186, 255, 0.1)",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
            },

            dataLabels: {
              show: false,
              value: {
                offsetY: -7,
                color: "#111",
                fontSize: "20px",
                show: true,
              },
            },
          },
        },
        fill: {
          colors: [
            this.props.color ? this.props.color : "#be9a78",
            "rgba(67, 186, 255, 0.1)",
          ],
        },
        stroke: {},
        labels: [""],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={120}
        />
      </div>
    );
  }
}

export default DonutChart;
