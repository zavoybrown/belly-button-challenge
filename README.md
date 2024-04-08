# belly-button-challenge
Module 14 challenge

```markdown
# Data Visualization with D3.js and Plotly

This repository contains code for visualizing sample data using D3.js and Plotly. The code fetches JSON data from a specified endpoint URL and builds interactive charts based on the selected samples.

## Usage

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser.
3. Select a sample from the dropdown menu to visualize its data.

## How it works

### Fetching Data

The code fetches JSON data from a specified endpoint URL (`https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`) using D3.js's `d3.json()` method.

### Building Dropdown Menu

Upon successfully fetching the data, the code dynamically populates a dropdown menu (`#selDataset`) with sample names. This allows users to select different samples for visualization.

### Building Metadata Panel

The `buildMetadata(sample)` function fetches metadata associated with the selected sample and displays it in a panel (`#sample-metadata`). Metadata includes information such as demographic data associated with the sample.

### Building Charts

The `buildCharts(sample)` function builds two types of charts based on the selected sample:

1. **Bar Chart**: Displays the top 10 bacteria cultures found in the sample.
2. **Bubble Chart**: Visualizes the distribution of bacteria cultures per sample using bubble markers.

### Changing Dropdown Selection

The `optionChanged(newSample)` function is called whenever the user selects a new sample from the dropdown menu. It updates both the metadata panel and the charts with data corresponding to the newly selected sample.

## Dependencies

- D3.js: A JavaScript library for manipulating documents based on data.
- Plotly: An open-source JavaScript library for creating interactive web-based visualizations.

## Author

Matt Zavala

## Resources
utilized BCS learning xpert for debugging and formatting purposes
utilized sample examples of challenge from github
collaborated with classmate Chuchu Wang