document.addEventListener("DOMContentLoaded", function () {
    // Modal functionality
    const modal = document.getElementById("projectModal");
    const closeButton = document.querySelector(".close-btn");
    const fullScreenButton = document.querySelector(".full-screen-btn");
    const modalContent = document.querySelector(".modal-content");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modalTools = document.getElementById("modal-tools");
    const modalLinks = document.getElementById("modal-links");
    const modalImages = document.getElementById("modal-images");

    // Project content data with detailed sections, images, and links
    const projects = {
        "HR Analytics Dashboard": {
            title: "HR Analytics Dashboard",
            tools: ["Power BI", "SQL"],
            situation: "Conducted a comprehensive analysis of HR data to gain insights into employee attrition patterns.",
            task: "Developed interactive dashboards to visualize workforce demographics.",
            action: "Collaborated with HR and IT teams to source data and build visualizations.",
            result: "Provided insights that helped reduce attrition by 15%.",
            reflection: "Learned the importance of cross-functional collaboration and data accuracy.",

        },
        "Airbnb Market Analysis, NYC": {
            title: "Airbnb Market Analysis, NYC",
            tools: ["R", "SQL","Empathy Maps"],
            situation: "This project aimed to explore and understand the gaps in Airbnb's accommodation offerings in New York City, with a particular focus on high-income solo business travelers. Airbnb is a leading platform for short-term stays but may not fully address the needs of specific demographics in highly competitive markets like New York.",
            task: " The goal was to conduct a gap analysis of Airbnb's offerings using data from the 'Inside Airbnb' repository. The focus was on identifying underserved segments and providing recommendations for a new accommodation service that could compete effectively by targeting high-income solo business travelers.",
            action: `
        <div class="image-container">
            <img src="images/empathy.png" alt="Empathy Map" class="modal-image">
        </div>  
        <p><strong>1. Empathy Mapping:</strong> Created empathy maps to understand the needs, experiences, and preferences of high-income solo business travelers. These insights highlighted the importance of location, amenities, and flexibility in booking.</p>
        <p><strong>2. Data Acquisition and Cleaning:</strong> Used the listings.csv file from the 'Inside Airbnb' repository, which included information on over 39,000 properties in NYC. The data was first cleaned to remove anomalies and missing values.</p>
        <p><strong>3. Exploratory Data Analysis (EDA):</strong> Utilized the R programming language, specifically the ggplot package, to create visual plots to understand room types, prices, availability, and amenities offered by Airbnb properties across various neighborhoods in NYC.</p>
        <p><strong>4. Gap Analysis:</strong> Compared Airbnb's current offerings with the specific needs of high-income business travelers. The analysis showed that some areas, such as Staten Island and the Bronx, had limited options for premium accommodations suitable for business use.</p>
        <p><strong>5. Visualizations:</strong> Generated plots and graphs such as room type distributions, price distributions, neighborhood availability, and amenities offered to highlight findings.</p>
        <div class="image-container">
            <img src="images/airbnb_eda1.png" alt="EDA1" class="modal-image">
            <img src="images/airbnb_eda2.png" alt="EDA2" class="modal-image">
            <img src="images/airbnb_eda3.png" alt="EDA3" class="modal-image">
        </div> 
    `,
        result: "The analysis found key gaps in Airbnb's current accommodation offerings for high-income business travelers, particularly in the availability of premium features such as dedicated workspaces, high-speed internet, and flexible booking options. There were also geographical gaps in luxury offerings outside Manhattan and parts of Brooklyn. Recommendations were made to develop properties with premium business-centric features in underserved neighborhoods, potentially gaining a competitive advantage by offering unique value propositions.",
        reflection: "This project provided valuable insights into Airbnb's limitations in addressing the needs of a specific segment of travelers. The use of empathy mapping was especially beneficial in identifying areas where new competitors could excel by providing better business amenities, instant booking, and a more comfortable environment. Through this project, I gained a deeper understanding of how to identify and analyze market gaps and leverage these insights to create a compelling business strategy.",

        },
        "Time Series Forecasting": {
            title: "Time Series Forecasting",
            tools: ["Python", "ARIMA", "Exponential Smoothing"],
            situation: "Needed to forecast monthly demand for pneumatic casings.",
            task: "Built predictive models to forecast demand and manage inventory.",
            action: "Used ARIMA and exponential smoothing techniques for prediction.",
            result: "Improved inventory management, reducing shortages by 20%.",
            reflection: "Learned about the complexities of time series forecasting.",
            // No links provided for this project
        },
        // Add other projects similarly
    };

    // Open modal with project details
    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const projectName = this.textContent.trim();

            if (projects[projectName]) {
                const project = projects[projectName];

                // Set modal title
                modalTitle.textContent = project.title;

                // Set tools content (tools section)
                modalTools.innerHTML = ""; // Clear previous tools
                project.tools.forEach(tool => {
                    const toolBadge = document.createElement("span");
                    toolBadge.className = "tool-badge";
                    toolBadge.textContent = tool;
                    modalTools.appendChild(toolBadge);
                });

                // Set body content (excluding tools)
                let bodyContent = `
                    <h3>Situation</h3>
                    <p>${project.situation}</p>
                    <h3>Task</h3>
                    <p>${project.task}</p>
                    <h3>Action</h3>
                    <p>${project.action}</p>
                    <h3>Result</h3>
                    <p>${project.result}</p>
                    <h3>Reflection</h3>
                    <p>${project.reflection}</p>
                `;
                modalBody.innerHTML = bodyContent;

                // Set links content (optional links section)
                modalLinks.innerHTML = ""; // Clear previous links
                if (project.links && project.links.length > 0) {
                    let linksContent = "<h3>Links</h3><ul>";
                    project.links.forEach(linkObj => {
                        linksContent += `<li><a href="${linkObj.url}" target="_blank">${linkObj.label}</a></li>`;
                    });
                    linksContent += "</ul>";
                    modalLinks.innerHTML = linksContent;
                }

                // Set images content (images section)
                modalImages.innerHTML = ""; // Clear previous images
                if (project.images && project.images.length > 0) {
                    project.images.forEach(imageSrc => {
                        const imgElement = document.createElement("img");
                        imgElement.src = imageSrc;
                        imgElement.alt = project.title;
                        imgElement.className = "modal-image";
                        modalImages.appendChild(imgElement);
                    });
                }

                // Display the modal
                modal.style.display = "block";
                console.log("Modal opened for project:", projectName); // Debug log
            } else {
                console.warn("Project not found:", projectName);
            }
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        console.log("Modal closed via close button"); // Debug log
    });

    // Toggle full-screen mode
    fullScreenButton.addEventListener("click", function () {
        if (!document.fullscreenElement) {
            modalContent.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            console.log("Modal closed by clicking outside content"); // Debug log
        }
    });
});
