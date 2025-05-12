import ProjectCard from '@/components/ProjectCard'
import React from 'react'

function ProjectsPage() {
  return (
    <div
      style={{backgroundImage:"url(/mountains.jpg)"}}
      className='min-h-screen w-full flex items-center justify-center bg-center bg-cover py-24'>
      <div className='container mx-auto px-4'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
          <ProjectCard
            title="Blog Application"
            description="Une plateforme de blogging complète avec WYSIWYG editor."
            imageUrl="/images/blog-preview.jpg"
            technologies={["Next.js", "MongoDB", "Tailwind"]}
            projectType="Web App"
            liveLink="https://monblog.com"
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