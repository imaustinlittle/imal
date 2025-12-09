import './style.css';
import { projects } from './projects.js';

// --- Project Rendering ---
const projectsGrid = document.getElementById('projects-grid');

const createProjectCard = (project) => {
  return `
    <article class="project-card">
      <div class="card-image-wrapper">
        ${project.image ?
      `<img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">` :
      `<div class="project-placeholder"></div>`
    }
      </div>
      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-text-secondary flex-1">${project.description}</p>
      </div>
      <div class="p-6 bg-surface-secondary border-t border-white/10">
        <div class="card-tags mb-4">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" class="text-primary font-bold hover:text-primary-hover transition-colors inline-flex items-center gap-2">
          View Project 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </article>
  `;
};

const renderProjects = () => {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = projects.map(createProjectCard).join('');
};

renderProjects();

// --- Header Scroll Effect ---
const header = document.getElementById('header');

const handleScroll = () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    header.classList.remove('py-4');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('py-4');
  }
};

window.addEventListener('scroll', handleScroll);

// --- Mobile Menu ---
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
  const isExpanded = !mobileMenu.classList.contains('hidden');
  menuBtn.setAttribute('aria-expanded', isExpanded);
};

menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// --- Active Link Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const updateActiveLink = () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', updateActiveLink);
