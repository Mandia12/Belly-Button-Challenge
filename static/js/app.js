// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filteredMetadata = metadata.filter(sampleObj => sampleObj.id == sample);
    let first_result = filteredMetadata[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(first_result).forEach(([key, value]) => {
      panel.append('h6').text(`${key}: ${value}`)
    })
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filteredSamples = samples.filter(sampleObj =>sampleObj.id === sample);

    // Get the otu_ids, otu_labels, and sample_values
    let otuIds = filteredSamples[0].otu_ids;
    let otuLabels = filteredSamples[0].otu_labels;
    let sampleValues = filteredSamples[0].sample_values;

    // Build a Bubble Chart
    let bubbleChart = {
      x: otuIds,
      y: sampleValues,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth'
      },
      text: otuLabels
    };

    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {title: 'OTU ID'},
      yaxis: {title: 'Number of Bacteria'},
      hovermode: 'closest'
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', [bubbleChart], bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otuIds.slice(0,10).map(otuId => `OTU ${otuId}`);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let barChart = {
      x: sampleValues.slice(0, 10).reverse(),
      y: yticks.reverse(),
      text: otuLabels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'
    };

    let barLayout = {
      title: 'Top 10 OTUs Found',
      margin: { t: 30, l: 150 }
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', [barChart], barLayout);
    });
  }

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropDown = d3.select("#selDataset")

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((sample) => {
      dropDown.append('option').text(sample).property('value', sample)
    });

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();

