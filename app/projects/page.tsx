import ProjectCard from '@/components/ProjectCard'
import React from 'react'

function ProjectsPage() {
  return (
    <div
      style={{backgroundImage:"url(mountains.jpg)"}}
      className='min-h-screen w-full flex items-center justify-center bg-center bg-cover py-24'>
      <div className='container mx-auto px-4'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
          <ProjectCard
            title="Asthma Risk"
            description="Development of an asthma risk prediction application combining a machine learning model (Random Forest) trained on clinical data with real-time weather data from the OpenWeatherMap API. Integration of a caching system, calculation of weather-related risk factors, and evaluation of the combined probability of an asthma attack."
            imageUrl="asthma.png"
            technologies={["joblib", "scikit-learn", "pandas", "NumPy","React" ,"Tailwind"]}
            projectType="AI application"
            features={[
              "Machine Learning Integration: Trained a Random Forest model on clinical data to predict asthma risk.",
              "Real-Time Weather Data: Fetched and integrated live meteorological data using the OpenWeatherMap API.",
              "Combined Risk Evaluation: Merged clinical and environmental factors to compute the overall probability of an asthma attack.",
              "Caching System: Implemented a cache mechanism to reduce redundant API calls and improve performance.",
              "Risk Factor Computation: Analyzed specific weather indicators (e.g. humidity, temperature, air quality) to quantify their impact on asthma.",
              "Modular Architecture: Designed the application with a clean separation between data collection, processing, prediction, and UI layers.",
              "User Interface (optional): (If applicable) Developed a user-friendly interface for displaying risk levels and weather insights."
            ]}
            
            githubLink="https://github.com/moncompte/blog"
          />
          <ProjectCard
            title="Handling Missing Data (Heart Disease Dataset)"
            description="A data science project focused on analyzing and handling missing values in a medical dataset (heart disease). Various imputation and deletion techniques were applied and evaluated using classification models like Random Forest and XGBoost."
            technologies={["Pandas" , "Numpy", "scikit-learn", "xgboost", "missingno", "matplotlib"]}
            projectType="Data Science"
            features={[
              "Analyzed missing data using statistics and visual tools (missingno)",
              "Applied multiple imputation strategies: mean, median, constant, KNN, , Forward Fill - Backward Fill - Linear Interpolation , linear regression(random forest).",
              "Used deletion methods: Pairwise , Listewise , dropping entire column.",
              "Trained and evaluated models to compare accuracy across methods."
            ]}
            stats={[
              {label: "Dataset", value: "1K entrées"},
            ]}
            
            githubLink="https://github.com/moncompte/api-contacts"
          />
          <ProjectCard
            title=" Fake News Detection – Text Classification"
            description="Developed a binary classifier to detect fake news from real news using text data. The project included full preprocessing of text, feature engineering, and model comparison."
            technologies={["Python", "NLTK", "spaCy", "scikit-learn", "matplotlib"]}
            projectType="Data Science"
            features={[
              "Analyzed dataset and class distribution (Fake vs Real).",
              "Cleaned and normalized text (stopword removal, stemming, lemmatization).",
              "Extracted linguistic features (POS tagging: nouns, verbs, adjectives).",
              "Represented text as vectors using CountVectorizer.",
              "Trained multiple models: Logistic Regression, Decision Trees, Random Forest, Voting Classifier.",
              "Applied cross-validation (KFold) for model robustness.",
              "Evaluated each method using precision and recall metrics."
            ]}
            stats={[
              {label: "Dataset", value: "6K entrées"},
            ]}
            githubLink="https://github.com/moncompte/mobile-app"
          />
          <ProjectCard
            title="Algorithme de Prédiction"
            description="Un modèle de machine learning pour prédire les tendances de marché."
            technologies={["Python", "TensorFlow", "Pandas"]}
            projectType="Data Science"
            features={[
              "Précision de 92%",
              "Optimisé pour CPU et GPU",
              "Importation de données automatisée"
            ]}
            stats={[
              {label: "Dataset", value: "50K entrées"},
              {label: "Temps d'entraînement", value: "2.3h"}
            ]}
            githubLink="https://github.com/moncompte/prediction-modele"
          />
          
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage