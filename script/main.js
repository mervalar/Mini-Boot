document.addEventListener("DOMContentLoaded", () => {
    console.log("Bootstrap clone initialized!");
});

function closeAlert(element) {
    element.parentElement.style.opacity = "0";
    setTimeout(() => element.parentElement.remove(), 300);
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn.disabled");
  
    buttons.forEach((button) => {
      button.setAttribute("disabled", true);
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    // Popin functionality
    document.querySelectorAll(".popin-trigger").forEach(button => {
        button.addEventListener("click", function() {
            let target = document.querySelector(this.getAttribute("data-target"));
            if (target) {
                target.style.display = "flex";
            }
        });
    });

    document.querySelectorAll(".popin-dismiss").forEach(button => {
        button.addEventListener("click", function() {
            let modal = this.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
        }
    });

    // Tabs functionality
    document.querySelectorAll(".tab-list li").forEach(tab => {
        tab.addEventListener("click", function() {
            let targetSelector = this.getAttribute("data-target");
            let targetTab = document.querySelector(targetSelector);
            let tabList = this.closest(".tab-list"); // Liste des onglets
            let tabContent = tabList.nextElementSibling; // Conteneur des contenus d'onglets

            if (!targetTab || !tabContent) return;

            // Désactiver tous les onglets et leurs contenus dans le même groupe
            tabList.querySelectorAll("li").forEach(li => li.classList.remove("active"));
            tabContent.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

            // Activer l'onglet et son contenu
            this.classList.add("active");
            targetTab.classList.add("active");
        });
    });
        });
        // Optional: Add dynamic tooltip creation for elements without the .tooltip class
document.addEventListener("DOMContentLoaded", () => {
    const tooltipElements = document.querySelectorAll(".tooltip");
  
    tooltipElements.forEach((element) => {
      // Ensure the element has a title attribute
      if (!element.title) {
        console.warn("Element has no title attribute:", element);
        return;
      }
  
      // Add ARIA attributes for accessibility
      element.setAttribute("aria-describedby", `tooltip-${element.id || Math.random().toString(36).substring(2)}`);
    });
  });
        
        