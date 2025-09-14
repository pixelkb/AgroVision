# AgroVision: GenAI-Powered Plant Disease and Nutrient Deficiency Detection using Image-Based Deep Learning — Bolt

Agriculture faces large-scale losses from late or inaccurate detection of plant diseases and nutrient deficiencies. FAO estimates that 20–40% of global food production is lost annually, and smallholder farmers often lack affordable, rapid diagnostic tools. AgroVision is a lightweight, multilingual PWA (web + mobile) that allows farmers to diagnose crop issues by uploading or capturing leaf images. The app integrates Generative AI for realistic data augmentation and uses state-of-the-art deep learning models (MobileNet, DenseNet, InceptionResNet, and custom CNNs) to identify diseases and nutrient deficiencies with high accuracy and provide immediate, actionable remedies in English and Hindi.

**Key features**
- Upload or capture leaf images (camera / drag-and-drop)
- Real-time prediction (disease/deficiency name + confidence)
- Suggested remedies (EN / HI) and “save to history” for each report
- Dataset Insights: class distributions, model accuracy comparisons, real vs. GenAI images
- Authentication (Sign Up / Log In) and user history (stored locally/MongoDB)
- Offline-capable PWA optimized for low-end Android phones
- Mock/stubbed backend API for easy frontend demos and switchable production endpoints (Flask/FastAPI + MongoDB)


