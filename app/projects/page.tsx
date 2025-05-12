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
            title="API de Gestion de Contacts"
            description="Une API RESTful pour gérer des contacts avec authentification et validation."
            technologies={["Express", "MongoDB", "JWT"]}
            projectType="RESTful API"
            features={[
              "Authentification par JWT",
              "Validation de données",
              "Rate limiting",
              "Documentation Swagger"
            ]}
            stats={[
              {label: "Endpoints", value: "24"},
              {label: "Tests", value: "97% couverture"}
            ]}
            githubLink="https://github.com/moncompte/api-contacts"
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
          <ProjectCard
            title="Application Mobile"
            description="Une application mobile pour suivre vos habitudes quotidiennes et améliorer votre productivité."
            imageUrl="/images/mobile-app.jpg"
            technologies={["React Native", "Firebase", "Redux"]}
            projectType="Mobile App"
            features={[
              "Mode hors ligne",
              "Notifications personnalisées",
              "Synchronisation multi-appareils"
            ]}
            githubLink="https://github.com/moncompte/mobile-app"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage