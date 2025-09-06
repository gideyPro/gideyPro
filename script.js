document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById('projects-container');
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                const projectName = document.createElement('h3');
                projectName.textContent = project.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;

                const projectLink = document.createElement('a');
                projectLink.href = project.link;
                projectLink.textContent = 'View Project';
                projectLink.target = '_blank';

                const technologiesList = document.createElement('ul');
                project.technologies.forEach(tech => {
                    const technologyItem = document.createElement('li');
                    technologyItem.textContent = tech;
                    technologiesList.appendChild(technologyItem);
                });

                projectCard.appendChild(projectName);
                projectCard.appendChild(projectDescription);
                projectCard.appendChild(projectLink);
                projectCard.appendChild(technologiesList);

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
