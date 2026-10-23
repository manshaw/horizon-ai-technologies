export const services = [
  { title: 'Artificial Intelligence and Machine Learning', text: 'Custom models for prediction, classification and recommendation, trained on your data and deployed into your workflow.', icon: ['M11 16a5 5 0 1010 0 5 5 0 10-10 0', 'M16 3v6M16 23v6M3 16h6M23 16h6M7 7l4 4M21 21l4 4M25 7l-4 4M11 21l-4 4'] },
  { title: 'Computer Vision', text: 'Detection, counting and monitoring from drone, satellite and camera imagery, including crop health and field analysis.', icon: ['M2 16s5-9 14-9 14 9 14 9-5 9-14 9S2 16 2 16z', 'M12 16a4 4 0 108 0 4 4 0 10-8 0'] },
  { title: 'Data Analytics', text: 'Dashboards and pipelines that clean, combine and explain your data so teams can act on it.', icon: ['M4 27V5M4 27h24', 'M9 21l6-7 5 4 7-10'] },
  { title: 'Software Development', text: 'Web platforms, mobile apps and internal tools built with modern, maintainable stacks.', icon: ['M11 9l-7 7 7 7M21 9l7 7-7 7M18 6l-4 20'] },
  { title: 'Automation', text: 'Replace repetitive manual work with reliable workflows, integrations and scheduled intelligence.', icon: ['M12 16a4 4 0 108 0 4 4 0 10-8 0', 'M16 4v4M16 24v4M4 16h4M24 16h4M8 8l3 3M21 21l3 3M24 8l-3 3M11 21l-3 3'] },
  { title: 'Cloud, IT Consulting and R&D', text: 'Architecture advice, cloud migration and applied research to help you choose the right technology. We also train teams in software and data skills.', icon: ['M9 24a6 6 0 010-12 8 8 0 0115-2 5 5 0 011 14z'] },
];

export const stages = [
  { title: 'Capture', text: 'Drones fly over the field and collect high-resolution multispectral images.', img: '/images/capture.jpg', alt: 'Two drones capturing images over a crop field', caption: 'Multispectral drone imagery captured over the field' },
  { title: 'Stitch', text: 'Overlapping images are stitched into one georeferenced orthomosaic of the whole field.', img: '/images/ortho.jpg', alt: 'Orthomosaic of a crop field', caption: 'Orthomosaic generation' },
  { title: 'Analyse', text: 'Customized AI models scan the imagery and locate every plant, weed or problem area.', img: '/images/volunteer-canola.jpg', alt: 'Bounding box detections on drone imagery', caption: 'Detections through customized AI models' },
  { title: 'Map', text: 'Results are turned into maps, such as NDVI, that show field health at a glance.', img: '/images/ndvi.jpg', alt: 'NDVI field health map', caption: 'NDVI map showing field health' },
  { title: 'Act', text: 'Reports summarise what was found, how severe it is and where, so teams can act on it.', img: '/images/report.jpg', alt: 'Volunteer canola detection report', caption: 'Detection report with severity levels and counts per acre', cls: 'rp' },
];

export const features = [
  ['Seed production quality assurance', 'Detect volunteer plants and off-types that can contaminate a seed lot.'],
  ['Oilseed crop monitoring', 'Track emergence, growth and health in oilseed crops such as canola.'],
  ['Plant stand count', 'Count every plant to measure emergence and find gaps.'],
  ['Weed detection', 'Find weeds and identify the species so treatment is targeted.'],
  ['Net crop area', 'Separate non-crop land from planted area for accurate acreage.'],
  ['Crop health maps', 'NDVI maps show vigor and stress across the whole field.'],
  ['Inspection reports', 'Clear reports with counts, severity levels and maps for seed companies, inspectors and growers.'],
  ['Custom AI models', 'Models trained for your crop, variety and field conditions.'],
];

export const projects = [
  { title: 'Seed production quality assurance', text: 'Volunteer canola and other off-type plants are detected from drone imagery and counted per acre, so seed fields can be checked for purity.', img: '/images/volunteer-canola.jpg', alt: 'Volunteer canola detections in a field' },
  { title: 'Plant stand count', text: 'Every plant is detected and counted to measure emergence and stand establishment across the field.', img: '/images/stand-count.jpg', alt: 'Potato plants detected and counted' },
  { title: 'Weed detection', text: 'Weeds are located and identified by species, such as lambs quarter, kochia and wild buckwheat, so treatment can be targeted.', img: '/images/weed.jpg', alt: 'Weed species detected on drone imagery' },
  { title: 'Net crop area calculation', text: 'Non-crop areas are separated from the planted area to give accurate net crop acres for every field.', img: '/images/net-crop.jpg', alt: 'Net crop area map with field statistics' },
];

export const faqs = [
  ['What does HorizonAI do?', 'We build AI, computer vision, data analytics and software systems, and provide IT consulting and training.'],
  ['Do you only work in agriculture?', 'No. Agriculture is our flagship area, but the same methods apply to infrastructure, energy, business analytics and more.'],
  ['Can you build a custom platform for us?', 'Yes. We design and develop web and mobile platforms around your workflow, from prototype to production.'],
  ['How do we get started?', 'Send us a short description of your project through the contact page and we will reply with next steps.'],
];