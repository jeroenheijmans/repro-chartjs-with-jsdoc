# Repro: ChartJS with JSDOC

This repository is a minimal scenario to reproduce [the scenario for a specific Stack Overflow question](https://stackoverflow.com/q/77466760/419956).

## Repro

To create this repro, simple steps were followed:

1. `npm init` with just about all defaults
1. `npm install chart.js chartjs-adapter-moment moment`
1. Create the `index.html` file
1. Create the `app.js` file

Then open the repository with vscode:

- Outcome: red error for `new Chart(...)`
- Expected: intellisense for `Chart`
