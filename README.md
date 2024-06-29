# Belly Button Biodiversity Dashboard

## Project Overview

This project is an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) were present in more than 70% of people, while the rest were relatively rare.

## Features

- Dropdown menu to select different test subjects
- Demographic information panel that updates based on the selected individual
- Bar chart displaying the top 10 OTUs found in the selected individual
- Bubble chart representing all OTUs found in the selected individual
- Charts update automatically when a new sample is selected

## Technologies Used

- JavaScript
- D3.js for data manipulation and binding
- Plotly.js for creating the charts
- HTML/CSS for structure and styling

## How to Use

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Use the dropdown menu to select different test subjects.
4. Observe how the demographic information and charts update based on your selection.

## Data Source

The data is loaded from the following JSON file:
https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json

## File Structure

- `index.html`: The main HTML file that structures the dashboard
- `static/js/app.js`: The JavaScript file containing the logic for creating and updating the charts
- `static/css/style.css`: (If applicable) CSS file for additional styling

## Functions

- `init()`: Initializes the dashboard with the first sample
- `optionChanged(newSample)`: Handles updates when a new sample is selected
- `buildMetadata(sample)`: Populates the demographic information panel
- `buildCharts(sample)`: Creates the bar chart and bubble chart

## Future Improvements

- Add additional visualizations to explore the data further
- Implement responsive design for better mobile experience
- Add filters to allow users to explore specific types of bacteria

## Contributors

[Your Name]
