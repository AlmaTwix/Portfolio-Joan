document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project_list");
    const prevButton = document.querySelector(".prev_button");
    const nextButton = document.querySelector(".next_button");
    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjects();
        }
    });

    nextButton.addEventListener("click", () => {
        const numProjects = document.querySelectorAll(".project").length;
        if (currentIndex < numProjects - 1) {
            currentIndex++;
            updateProjects();
        }
    });

    function updateProjects() {
        const projects = document.querySelectorAll(".project");
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.classList.add("active");
            } else {
                project.classList.remove("active");
            }
        });
    }
});
