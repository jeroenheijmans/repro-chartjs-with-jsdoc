    // @ts-check

    /**
     * @typedef moment
     * @property {import('moment')} moment
     */

    /**
     * @typedef {import("chart.js")} Chart
     */

    document.addEventListener("DOMContentLoaded", () => {
      const ctx = document.getElementById("my-chart");
      const chartRef = new Chart(ctx, {
        type: "line",
        options: {
          scales: {
            x: { type: "time" },
            y: { min: 0, max: 10 },
          },
        },
        data: {
          datasets: [
            {
              label: 'Stuff',
              data: [
                { x: moment("2023-01-01"), y: 2 },
                { x: moment("2023-02-01"), y: 8 },
                { x: moment("2023-03-01"), y: 3 },
                { x: moment("2023-04-01"), y: 6 },
              ],
            },
          ],
        },
      });
    });
