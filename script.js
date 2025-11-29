document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const viewMoreBtn = document.getElementById('view-more-btn');
    let projects = [];
    let projectsToShow = 2;

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;
            displayProjects();
        })
        .catch(error => console.error('Error fetching projects:', error));

    function displayProjects() {
        projectsContainer.innerHTML = '';
        const projectsToDisplay = projects.slice(0, projectsToShow);

        projectsToDisplay.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });

        if (projectsToShow >= projects.length) {
            viewMoreBtn.style.display = 'none';
        }
    }

    function createProjectCard(project) {
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

        return projectCard;
    }

    viewMoreBtn.addEventListener('click', () => {
        projectsToShow += 2;
        displayProjects();
    });
});
