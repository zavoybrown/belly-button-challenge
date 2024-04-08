// assign enpoint url
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch JSON data and console log it
d3.json(url).then(function(data) {
   // console.log(data); to verify import
    // Building out the dropdown menu
    let select = d3.select("#selDataset");
    data.names.forEach((name) => {
        select.append("option")
            .text(name)
            .property("value", name);
    });

    // Event Listener for dropdown menu changes
    select.on("change", function () {
        let newSample = d3.select(this).property("value");
        optionChanged(newSample);
    });

    // first sample
    let firstSample = data.names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);

});

// build metadata panel
function buildMetadata(sample) {
    d3.json(url).then(function(data) {
        let metaData = data.metadata;
        let resultArray = metaData.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let PANEL = d3.select("#sample-metadata");

        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

// Function to build the charts
function buildCharts(sample) {
    d3.json(url).then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Build a Bar Chart
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [{
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }];

        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, barLayout);

        // Build a Bubble Chart
        let bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }];

        let bubbleLayout = {
            title: 'Bacteria Cultures Per Sample',
            showlegend: false,
            height: 600,
            width: 1200,
            xaxis: { title: 'OTU ID' },
            hovermode: 'closest'
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    });
}

// Function to change dropdown menu selections
function optionChanged(newSample) {
    console.log("Data Sample Changed to:", newSample);
    buildCharts(newSample);
    buildMetadata(newSample);
}