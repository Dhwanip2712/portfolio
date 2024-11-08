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
//CLIMATE ACTION---------------------------------------------------------------------------------------------------------------------        
        "Carbon Footprint Data Visualisation System": {
            title: "Development and Automation of a Comphrehensive Carbon Footprint Data Visualisation System",
            tools: ["VBA", "Excel","DEFRA Conversion Factors","HESCET", "ESG"],
            situation: "The University of Bath committed to reducing its carbon footprint and improving environmental sustainability as part of broader ESG objectives. The project sought to enhance the accuracy and transparency of Scope 3 emissions calculations, particularly related to supply chain activities and business travel. The existing manual process for emissions data handling was labor-intensive, prone to errors, and lacked the ability to support the university’s goals for sustainability reporting and regulatory compliance.",
            task: "The task involved developing an integrated solution to automate the calculation of Scope 3 emissions, focusing on improving the reliability and efficiency of data management. The system needed to streamline emissions reporting processes, align with recognized ESG metrics, and provide a transparent overview of the university's carbon footprint, specifically targeting reductions in supply chain emissions and travel-related impacts.",
            action: `
            <ol>
            <div class="image-container"><img src="images/carbon1.png" alt="CarbonFootprint" class="modal-image"></div>
            <li><strong>Data Integration and Automation:</strong>
                <ul>
                    <li>Developed an automated tool using VBA and Excel to integrate diverse datasets, including supply chain, purchase card, and business travel information. The automated solution standardized data, reducing inconsistencies, and facilitated efficient data flow.</li>
                    <li>This tool contributed to sustainable supply chain management by improving the transparency and accuracy of emissions calculations, enhancing the data integrity necessary for reliable sustainability reports.</li>
                    <div class="image-container"><img src="images/carbon2.png" alt="CarbonFootprint" class="modal-image">
                                                 <img src="images/carbon3.png" alt="CarbonFootprint" class="modal-image"></div>
                </ul>
            </li>

            <li><strong>Emission Factor Mapping and Standardization:</strong>
                <ul>
                    <li>Leveraged DEFRA and HESCET conversion factors to calculate emissions from diverse data sources. This ensured the emissions were quantified following Environmental Impact Assessment (EIA) standards, aligning with recognized ESG metrics.</li>
                    <li>Standardized emission factors enhanced the university's ability to conduct consistent carbon footprint reduction efforts, reinforcing the accountability and comparability of emissions over different years.</li>
                    <div class="image-container"><img src="images/carbon4.png" alt="CarbonFootprint" class="modal-image">
                                                 <img src="images/carbon5.png" alt="CarbonFootprint" class="modal-image">
                                                 <img src="images/carbon6.png" alt="CarbonFootprint" class="modal-image"></div>
                    </ul>
            </li>   

            <li><strong>Data Preprocessing for ESG Compliance:</strong>
                <ul>
                    <li>Implemented systematic data cleaning to manage missing values and validated data formats, ensuring compliance with regulatory standards for emissions reporting. This data standardization strengthened the accuracy and transparency of the university’s emissions reporting, a key tenet of effective ESG governance.</li>
                    <li>These processes ensured data was prepared for ESG Risk Management, highlighting potential areas of concern and allowing the university to address carbon-related risks proactively.</li>
                </ul>
            </li>  
            
            <li><strong>Interactive Dashboard Development:</strong>
                <ul>
                    <li>Designed an interactive emissions dashboard in Tableau, allowing stakeholders to visualize emissions data, monitor KPIs, and assess trends across the university’s departments.</li>
                    <li>The dashboard provided insights into categories of emissions that contributed most significantly to the carbon footprint, thus supporting initiatives like carbon footprint reduction and enabling data-driven decision-making to align with the Sustainable Development Goals (SDGs).</li>
                </ul>
            </li> 

            <li><strong>Scalability and Flexibility for ESG Reporting:</strong>
                <ul>
                    <li>Designed the automated tool to be scalable and adaptable, supporting lifecycle assessments (LCA) of emissions for upcoming fiscal years. This scalability ensured that the university could continue to accurately track, analyze, and report emissions while adapting to changes in data sources.</li>
                    <li>The flexibility of the tool supported ongoing renewable energy transition efforts by integrating emissions data from future renewable projects into the sustainability reports.</li>
                </ul>
            </li> 
            </ol>
            <div class="image-container"><img src="images/carbon7.png" alt="CarbonFootprint" class="modal-image">
                                         <img src="images/carbon8.png" alt="CarbonFootprint" class="modal-image">
                                         <img src="images/carbon9.png" alt="CarbonFootprint" class="modal-image">
                                         <img src="images/carbon10.png" alt="CarbonFootprint" class="modal-image"></div>
                    
            `,
            result:`
            <p>The project resulted in an automated and scalable emissions calculation tool, complemented by an interactive dashboard featuring key sustainability KPIs. The automation of data integration reduced manual work and processing time significantly, allowing the university to focus on proactive emissions reductions and ESG performance improvements.</p>
            <p>The dashboard enhanced the transparency of emissions reporting, enabled effective tracking towards sustainability goals, and provided stakeholders with a clear understanding of areas needing attention. This improved the university's ability to communicate sustainability efforts, thereby bolstering its ESG reporting framework and contributing to stakeholder engagement.</p.
            `,
            reflection:`
             <p>This project reinforced the value of integrating sustainability initiatives with data automation to meet ESG targets effectively. The use of standardized emissions conversion factors supported regulatory compliance and enhanced the reliability of sustainability reporting. The visualization tools provided transparency, essential for informed decision-making aligned with sustainable development and carbon reduction initiatives. The project demonstrated how leveraging automation not only enhances operational efficiency but also ensures robust ESG compliance—an essential factor in aligning with international sustainability goals. This experience underscored the importance of embedding ESG principles into the operational and strategic aspects of sustainability reporting to foster resilience, transparency, and positive environmental impact.</p>        `
        },
//HR DASHBOARD---------------------------------------------------------------------------------------------------------------------        
        "HR Analytics Dashboard": {
            title: "HR Analytics Dashboard",
            tools: ["Power BI", "SQL"],
            situation: "An open-source HR dataset containing employee records, including attributes such as age, department, education, and job satisfaction ratings, was used to analyze employee attrition patterns. The aim was to derive insights that could improve employee retention by identifying underlying reasons for attrition.",
            task: "The task involved analyzing HR data to identify potential factors contributing to employee attrition and creating a dashboard to clearly visualize these insights. The purpose of the dashboard was to help HR professionals understand key trends and make informed decisions to address turnover.",
            action: "SQL was used to clean, transform, and preprocess the raw HR dataset to ensure accuracy and consistency. Queries were used to handle missing values, derive key attributes, and structure the data for analysis. After preprocessing, Power BI was employed to develop an interactive HR Analytics Dashboard, displaying crucial metrics such as overall attrition rate, department-wise attrition, education field breakdown, and employee age distribution. The dashboard incorporated visual elements like bar charts, pie charts, and tables to convey insights clearly and effectively.",
            result: "An interactive dashboard was built with essential KPIs, providing actionable insights into the patterns and key contributors to employee attrition. The SQL-prepared data and Power BI visualizations allowed HR professionals to make informed decisions, potentially reducing attrition by targeting at-risk groups with retention initiatives.",
            reflection:`
             "This project emphasized the importance of data preprocessing and data accuracy in ensuring the reliability of insights. The combination of SQL and Power BI enabled the creation of a comprehensive solution that transformed complex data into clear, actionable visualizations for decision-makers. It underscored the value of using SQL to prepare and structure data efficiently before visualization to enhance the overall effectiveness of analysis."
        <div class="image-container"><img src="images/dashboardhr.png" alt="HR Dashboard" class="modal-image"></div> 
        `
        },
//AIRBNB---------------------------------------------------------------------------------------------------------------------        
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

//FORECASTING---------------------------------------------------------------------------------------------------------------------        
        "Time Series Forecasting": {
            title: "Time Series Forecasting - Pneumatic Casings",
            tools: ["R", "ETS Model", "ARIMA", "Linear Regression", "Batch Forecasting","Error Meaures"],
            situation: "This project focused on forecasting the demand for pneumatic casings by leveraging time series analysis. The goal was to effectively manage inventory and improve decision-making for supply chain operations. The data used consisted of monthly records from 1982 to 1992, sourced from the Mcomp package in R, specifically using Series ID 1892.",
            task: "The task involved selecting appropriate time series models to forecast future demand for pneumatic casings. Three statistical models were utilized: regression, exponential smoothing, and ARIMA, each fitting different aspects of the time series data such as trends and seasonality. The work also aimed to analyze these models based on their performance using out-of-sample forecasts.",
            action: `
        <ol>
            <div class="image-container"><img src="images/For1.png" alt="Forecasting1" class="modal-image"><img src="images/For2.png" alt="Forecasting2" class="modal-image"></div>
            <li><strong>Manual Modelling:</strong>
                <ul>
                    <li><strong>Exploration and Decomposition of Data:</strong> Time series decomposition was carried out to identify and separate different components of the data, such as trend, seasonality, and residuals. This provided insights into the underlying patterns within the pneumatic casings dataset.</li>
                    <div class="image-container"><img src="images/For3.png" alt="Forecasting3" class="modal-image"></div>
                    <li><strong>Regression Modelling:</strong> A multiple linear regression model incorporating both trend and seasonality components was created to predict future demand. Residual diagnostics were performed to validate the model's suitability.</li>
                    <div class="image-container"><img src="images/For4.png" alt="Forecasting4" class="modal-image"></div>
                    <li><strong>Exponential Smoothing (ETS Model):</strong> The ETS (Additive, Additive, Additive) model with a damping parameter was utilized. This approach captured trend, error, and seasonality effectively, minimizing the mean squared error.</li>
                    <div class="image-container"><img src="images/For5.png" alt="Forecasting5" class="modal-image"></div>
                    <li><strong>ARIMA Modelling:</strong> An ARIMA (1,1,1)(0,1,1)[12] model was chosen to fit the data, accounting for both seasonal and non-seasonal aspects. Parameters were estimated by analyzing ACF and PACF plots.</li>
                    <div class="image-container"><img src="images/For6.png" alt="Forecasting6" class="modal-image"></div>
                </ul></li>
            <li><strong>Batch Forecasting:</strong>
                <ul>
                    <li><strong>Cross-Validation Windows Length (Training and Test Data):</strong> Cross-validation was implemented with rolling-origin windows, dividing the data into different training and testing sets to ensure reliable performance evaluation for each model.</li>
                    <li><strong>Evaluation using Error Measures:</strong> Forecast accuracy was evaluated using several error metrics such as RMSE, MAE, and MAPE. Additionally, the accuracy of the proposed models was compared with benchmark methods (e.g., simple exponential smoothing) to validate their effectiveness.</li>
                    <div class="image-container"><img src="images/For7.png" alt="Forecasting7" class="modal-image"></div>
                </ul></li></ol>
    `,
            result: `
            <p><strong>Comparing Accuracy of Proposed Model with Benchmarking Methods:</strong> The ARIMA model outperformed other models and benchmarks, with the lowest MAPE scores. It captured both trend and seasonality effectively, offering the most accurate predictions compared to naïve, SES, and global average approaches.</p>
            <p><strong>Forecasting Result based on Categories of Data:</strong> Produced final forecasts for the next 18 months, divided by seasonality and trend patterns. These forecasts helped optimize inventory planning, minimizing the risks of overstocking and shortages.</p>
            <p>The ARIMA model provided reliable demand predictions, supporting inventory optimization and reducing shortages over an 18-month period.</p>
        `,
            reflection: `
            <p>This project provided valuable experience in time series forecasting using multiple modelling techniques, including manual decomposition, exponential smoothing, and ARIMA. Key learnings included:</p>
        <ol>    
            <ul>
                <li>The importance of properly exploring and decomposing time series data to understand underlying components such as trend and seasonality.</li>
                <li>Understanding how to effectively apply and compare different forecasting methods like regression, exponential smoothing, and ARIMA.</li>
                <li>The critical role of cross-validation and error metrics in model selection to avoid overfitting and to ensure robust forecast accuracy.</li>
                <li>The benefits and challenges of ARIMA modelling for capturing both trend and seasonality, ultimately yielding more reliable forecasts for inventory optimization.</li>
            </ul>
            <div class="image-container"><img src="images/For8.png" alt="Forecasting8" class="modal-image"></div>
        </ol>    
        `,
        },

//OPTIMISATION MODEL---------------------------------------------------------------------------------------------------------------------                
        "GWR Optimization Model": {
            title: "Optimization and Spreadsheet Modelling for Great Western Railway (GWR)",
            tools: ["Excel", "VBA", "Ford-Fulkerson Algorithm"],
            situation: " The Great Western Railway (GWR), one of the oldest railway companies in the UK, needed a solution to optimize train routing and capacity planning during times of sudden demand spikes such as sports events and festivals. The goal was to develop a decision support system that would allow GWR route managers to determine the number of trains that could be dispatched between specific stations, and to optimize the utilization of the railway network segments.",
            task: " The task was to build a spreadsheet-based decision support system using Excel and VBA that would allow GWR to maximize the flow between selected stations in the network. The model had to incorporate user-friendly forms for selecting stations, adding new stations, modifying capacities, and resetting data as needed.",
            action: `
        <ol>
            <li><strong>Manual Modeling and Data Definition:</strong>
            <ul>
                <li>Defined the problem size by inputting stations and rail segment data into the model.</li>
                <li>Added all relevant network data including capacity and connectivity between nodes, using an interactive form in Excel.</li>
            </ul></li>
            <div class="image-container"><img src="images/GWR1.png" alt="Algorithm" class="modal-image"></div>
            
            <li><strong>Optimization using Spreadsheet Tools:</strong>
            <ul>
                <li>Built a spreadsheet-based interface to define flow problems, calculate capacity, and optimize network routes.</li>
                <li>Developed the GUI to input station data and visualize network flows, including calculating total flows per segment and their capacities.</li>
                <li>Implemented VBA macros for automating network analysis, computing maximum flows, and simulating train schedules.</li>
            </ul></li>
            <div class="image-container"><img src="images/GWR2.png" alt="Algorithm" class="modal-image">
            <img src="images/GWR3.png" alt="Algorithm" class="modal-image">
            <img src="images/GWR4.png" alt="Algorithm" class="modal-image">
            <img src="images/GWR5.png" alt="Algorithm" class="modal-image"></div>
            <li><strong>Result Calculation and Visualization:</strong>
            <ul>
                <li>Ran the optimization algorithm using a "Run the Algorithm" button in the tool to determine the maximum flow between specified origin and destination stations.</li>
                <li>Evaluated routes across multiple journeys, comparing the total flow and remaining capacity for all segments.</li>
                <li>Created outputs detailing maximum flows and presented the results graphically within the spreadsheet for each journey segment.</li>
            </ul></li>
        </ol>       
        `,
        result: `
        <ol><ul>
            <li>Successfully optimized train routes by determining the maximum flow through each segment.</li>
            <li>Demonstrated how GWR could efficiently allocate train schedules and manage congestion using interactive network planning tools.</li>
            <li>The final solution provided a practical demonstration of capacity utilization, with calculated flows for each rail segment, showing reductions in underutilization and effective handling of high-demand routes.</li>
        </ul></ol>
        <div class="image-container"><img src="images/GWR6.png" alt="Algorithm" class="modal-image"></div>
        `,
        reflection: " This project highlighted the effectiveness of spreadsheet modeling in decision support for complex networks. I gained a deeper understanding of VBA for automation and the use of maximum flow algorithms to solve real-world logistical challenges in railway scheduling.",

        },
    
//SOCIAL MEDIA MACHINE LEARNING---------------------------------------------------------------------------------------------------------------------                
        "Social Media User Segmentation": {
            title: "Social Media User Segmentation",
            tools: ["R", "k-means", "k-NN", "ggplot2"],
            situation: "The social media company 'Z' aimed to better understand its user base through analyzing data on user interactions, behaviors, and activity metrics. The company wanted to segment users into distinct groups to tailor marketing strategies, improve user engagement, and boost platform personalization.",
            task: "The goal was to conduct a clustering analysis to understand user segmentation, followed by building a predictive model to classify new users into the identified segments. This involved exploring the dataset, performing unsupervised clustering, and training a supervised classification model. The dataset consisted of various user activity metrics, such as post frequency, engagement level, and network activity.",
            action: `
            <div class="image-container"><img src="images/z1.png" alt="Dataset" class="modal-image"></div>
            <ol>
                <li><strong>Exploratory Data Analysis (EDA)</strong>
                    <ul>
                        <li>Conducted a comprehensive EDA using statistical and visualization techniques in R.</li>
                        <li>Variables like TotalPosts, InDegree, and LikeRate were analyzed using scatter plots, correlation matrices, and box plots to identify patterns and relationships in the data.</li>
                        <li>Discovered correlations between activity metrics such as OutDegree and InDegree.</li>
                    </ul>
                </li>
                <div class="image-container"><img src="images/z2.png" alt="Dataset" class="modal-image">
                    <img src="images/z3.png" alt="Dataset" class="modal-image"></div>        

                <li><strong>Unsupervised Learning - Cluster Analysis:</strong>
                    <ul>
                        <li>Performed cluster analysis using the k-means algorithm with k=3 based on the Elbow and Silhouette methods to segment users.</li>
                        <li>Users were grouped into three clusters representing different engagement levels: High Engagement, Moderate Engagement, and Passive Engagement.</li>
                        <li>Visualized cluster patterns and centroids using plots to understand the characteristics of each group.</li>
                    </ul>
                </li>
                <div class="image-container"><img src="images/z4.png" alt="Dataset" class="modal-image">
                        <img src="images/z5.png" alt="Dataset" class="modal-image"></div>

                <li><strong>Supervised Learning - Predictive Modelling:</strong>
                    <ul>
                        <li>Developed a k-NN classification model to predict the cluster for new users based on their activity data.</li>
                        <li>Defined optimal hyperparameters such as k to balance between bias and variance.</li>
                        <li>Evaluated the model using metrics like precision, recall, and F1-score, and optimized the model to achieve the best classification accuracy.</li>
                    </ul>
                </li>
                <div class="image-container"><img src="images/z6.png" alt="Dataset" class="modal-image"></div>
            </ol>        
        `,
        result:`
         The cluster analysis revealed three key user segments, each with distinct behaviors:
        <ol>    
            <ul>
                <li><strong>High Engagement Users:</strong> Users who posted frequently, participated in multiple subforums, and received high engagement.</li>
                <li><strong>Moderate Engagement Users:</strong> Users with steady engagement and medium post frequency.</li>
                <li><strong>Passive Users:</strong> Users with lower levels of posts and interactions.</li>
            </ul>
        </ol> 
        A predictive model was built to accurately classify new users into these segments. The result was an interactive segmentation system that provided essential insights into user behavior and allowed the company to tailor strategies to different user groups.
        <div class="image-container"><img src="images/7.png" alt="Dataset" class="modal-image">
        <img src="images/z8.png" alt="Dataset" class="modal-image">
        <img src="images/z9.png" alt="Dataset" class="modal-image"></div>
        ` ,
        reflection: "Through this project, it became evident that clustering and predictive modeling are powerful tools for understanding user behavior and enhancing engagement. The use of both unsupervised and supervised learning provided a holistic approach to understanding the social media platform's user base and delivering actionable insights. This experience highlighted the importance of integrating data mining techniques and predictive models to provide meaningful insights for business strategies and enhance customer experience.",
        },

//CALL CENTER SIMULATION---------------------------------------------------------------------------------------------------------------------                
        "Call Center Simulation": {
            title: "Call Center Simulation",
            tools: ["Arena Simulation Software","Excel"],
            situation: "This project aimed to simulate a small-scale call center operation to analyze customer flow, server utilization, and waiting times, focusing on improving customer satisfaction and operational efficiency.",
            task: "The goal was to create a simulation model to study the performance of a call center serving both premium and standard customers. The model aimed to identify bottlenecks, evaluate resource allocation, and explore operational policies that could enhance service efficiency.",
            action: `
            <div class="image-container"><img src="images/sim1.png" alt="Dataset" class="modal-image"></div>
            <ol>
                <li><strong>Model Development:</strong> Developed a simulation model using Arena software to represent the entire call center process, including customer arrival, call routing, server allocation, and feedback collection.
                    <ul>
                        <li><strong>Customer Segmentation: </strong> Categorized incoming calls into premium and standard customers based on their service requirements.</li>
                        <li><strong>Server Allocation Policy:</strong> Implemented a system that initially directed premium customers to experienced servers, and later re-routed complex calls to skilled servers for further assistance.</li>
                        <div class="image-container"><img src="images/sim2.png" alt="Dataset" class="modal-image"></div>
                        <li><strong>Feedback Mechanism:</strong> Incorporated a feedback collection system at the end of each call, with two analysts dedicated to processing customer responses in batches of 15.</li>
                        <div class="image-container"><img src="images/sim5.png" alt="Dataset" class="modal-image">
                        <img src="images/sim6.png" alt="Dataset" class="modal-image"></div>
                    </ul>
                </li>
                <li><strong>Scenario Testing:</strong> Conducted various scenario analyses, such as queue length-based routing, to evaluate the impact of different policies on customer waiting times, server utilization, and overall system efficiency.</li>
                <div class="image-container"><img src="images/sim3.png" alt="Dataset" class="modal-image">
                        <img src="images/sim4.png" alt="Dataset" class="modal-image"></div>

                <li><strong>Performance Evaluation:</strong> Utilized Arena output reports to evaluate key metrics such as server utilization, customer wait times, and feedback processing efficiency. Analyzed results in Excel to derive insights and propose potential improvements.</li>
                <li><strong>Optimization Implementation:</strong> Optimized server utilization by reducing the percentage of calls routed to experienced servers, thus balancing workloads and reducing customer wait times.</li>
            </ol>        
        `,
        result: "The simulation provided valuable insights into call center operations. The queue length-based routing system led to a reduction in waiting times for premium customers and balanced server utilization. The optimization measures resulted in a significant improvement in system performance, including reduced average waiting times for both premium and standard customers and increased customer satisfaction.",
        reflection: "This project emphasized the importance of effective resource allocation and adaptive customer routing in optimizing call center performance. The ability to implement and test different scenarios using Arena simulation provided valuable insights into the dynamics of service operations and highlighted areas for further efficiency gains.",
        },
    
//COCA COLA OPERATIONS STRATEGY---------------------------------------------------------------------------------------------------------------------                
        "Coca-Cola Operational Strategy Analysis": {
            title: "Coca-Cola Operational Strategy Analysis",
            tools: ["Operational Strategy Matrix","4V Framework","Kraljic Matrix","ESG Reporting Framework"],
            situation: "Coca-Cola, one of the most recognized beverage companies globally, operates an extensive and complex supply chain network. The company is currently facing significant environmental challenges, particularly related to its use of plastic packaging, which has drawn attention from both consumers and regulatory bodies concerned about its environmental impact.",
            task: "The aim was to analyze Coca-Cola’s operational strategy while linking it to Environmental, Social, and Governance (ESG) factors, focusing on how these initiatives are being embedded into their supply chain and operational management. The analysis also sought to assess the effectiveness of Coca-Cola's sustainability measures by using frameworks like the Operational Strategy (OS) Matrix, the 4V Framework, and ESG metrics.",
            action: `
            <ol>
            
                <li><strong>Operational Strategy Matrix (OS Matrix): </strong> Evaluated Coca-Cola’s operational strategy, particularly how ESG considerations were shaping decision-making regarding production, supply chain logistics, and quality assurance. Emphasis was placed on how Coca-Cola’s sustainability targets impacted processes such as the reduction of carbon emissions and improvements in waste management. The operational strategy was reshaped to focus on responsible production, including utilizing renewable energy, water conservation, and optimizing logistics for lower emissions.</li>
                <div class="image-container"><img src="images/cc1.png" alt="Dataset" class="modal-image"></div>
                <li><strong>4V Framework Application:</strong>
                    <ul>
                        <li><strong>Volume:</strong> Coca-Cola operates at a massive scale, meaning small operational changes can result in significant environmental impact reduction. ESG initiatives drove decisions to maximize operational efficiency while minimizing waste.</li>
                        <li><strong>Variety:</strong> Coca-Cola offers a wide range of beverages and packaging options. ESG initiatives impacted the decision to increase recyclable packaging and introduce plant-based and reusable materials for greater sustainability.</li>
                        <li><strong>Variation in Demand:</strong> Sustainable production systems allowed Coca-Cola to adapt flexibly to seasonal changes and demand variability, ensuring efficient use of resources while avoiding overproduction.</li>
                        <li><strong>Visibility:</strong> ESG reporting increased visibility within the supply chain, ensuring transparency in sourcing and production practices. Coca-Cola utilized digital dashboards for real-time reporting of carbon emissions, water usage, and progress on waste reduction.</li>
                    </ul>
                </li>
                <div class="image-container"><img src="images/cc2.png" alt="Dataset" class="modal-image"></div>

                <li><strong>Case Study - Sustainable Packaging Initiative:</strong> Focused on Coca-Cola’s efforts to reduce plastic use by committing to 100% recyclability by 2030. The operational shift involved investments in R&D for developing more sustainable packaging, like plant-based bottles and increasing the percentage of recycled PET (rPET) used in production.</li>
                <li><strong>Kraljic Matrix for Supplier Analysis:</strong> Analyzed Coca-Cola’s suppliers to identify critical relationships where ESG improvements could significantly reduce environmental impact. Coca-Cola implemented stronger monitoring systems with suppliers to ensure adherence to ethical sourcing practices, reduce environmental degradation, and ensure workers' rights, thereby mitigating potential risks related to non-compliance.</li>
                <div class="image-container"><img src="images/cc3.png" alt="Dataset" class="modal-image">
                <img src="images/cc4.png" alt="Dataset" class="modal-image"></div></div>
                <li><strong>ESG Integration and Operational Strategy Linkage:</strong></li>
                    <ul>
                        <li><strong>Environmental Impact:</strong> ESG-driven operational strategies led Coca-Cola to reassess its production and logistics approach, resulting in reduced energy consumption and carbon emissions through increased use of renewable energy in manufacturing facilities.</li>
                        <li><strong>Social Impact:</strong> Coca-Cola’s community engagement initiatives, like water stewardship programs, directly impacted their operations by ensuring sustainable access to key resources such as clean water in production areas.</li>
                        <li><strong>Governance Impact:</strong> The emphasis on governance required implementing strong compliance standards across the supply chain, ensuring responsible sourcing practices and promoting ethical supplier relationships. Governance principles influenced Coca-Cola’s operational strategies by embedding accountability and transparency, which helped mitigate risks and ensure operational continuity.</li>
                    </ul>
            </ol>        
        `,
        result: `The incorporation of ESG principles into Coca-Cola’s operational strategy had a profound effect on both performance and sustainability. Coca-Cola's efforts led to significant improvements, such as reducing emissions and energy costs, enhancing efficiency, and minimizing risks related to non-compliance. The development of recyclable packaging and improvements in waste management directly impacted operational processes, contributing to both environmental targets and cost savings. The integration of ESG into operations also helped strengthen brand reputation, fostered trust among consumers and investors, and demonstrated the value of aligning sustainability with profitability.
        <div class="image-container"><img src="images/cc5.png" alt="Dataset" class="modal-image"></div>`,
        reflection: "The incorporation of ESG principles into Coca-Cola’s operational strategy had a profound effect on both performance and sustainability. Coca-Cola's efforts led to significant improvements, such as reducing emissions and energy costs, enhancing efficiency, and minimizing risks related to non-compliance. The development of recyclable packaging and improvements in waste management directly impacted operational processes, contributing to both environmental targets and cost savings. The integration of ESG into operations also helped strengthen brand reputation, fostered trust among consumers and investors, and demonstrated the value of aligning sustainability with profitability.",
        
    },
        
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
        if (document.fullscreenElement) {
            document.exitFullscreen().then(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto"; // Reset body overflow
            });
        } else {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Reset body overflow
        }
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

    // Exit full-screen mode handling
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement && modal.style.display !== "none") {
            // Ensure modal remains open after exiting full-screen using ESC
            modal.style.display = "block";
        }
    });
});
