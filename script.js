const projects = [
  {
    name: "SkillActivate",
    theme: "skillactivate",
    category: "Research & publishing platform",
    type: "client",
    url: "https://skillactivate.in/",
    label: "Research platform",
    title: "Where academic excellence meets global impact.",
    description: "A connected home for journals, memberships, events, and research.",
    pills: ["Journals", "Memberships", "Events"],
  },
  {
    name: "JVK Technologies",
    theme: "jvk-books",
    category: "Academic book publishing",
    type: "client",
    url: "https://books.jvktech.com/",
    label: "Publishing",
    title: "A modern press for academic minds.",
    description: "A thoughtful publishing experience built for authors and educators.",
    pills: ["190+ titles", "For authors"],
  },
  {
    name: "JVK Tech",
    theme: "jvk-tech",
    category: "Research & technology services",
    type: "client",
    url: "https://jvktech.com/",
    label: "Professional services",
    title: "The art of scholarly precision.",
    description: "Clear, considered services for researchers and professionals.",
    pills: ["Research", "Technology"],
  },
  {
    name: "Ashvon Technologies",
    theme: "ashvon",
    category: "AI education & IT solutions",
    type: "client",
    url: "https://ashvontech.com/",
    label: "AI & technology",
    title: "Technology learning, built for what’s next.",
    description: "Practical technology education and modern solutions for business.",
    pills: ["AI", "Robotics", "Learning"],
  },
  {
    name: "Bhanu Silks",
    theme: "bhanu-silks",
    category: "Silk sarees & online retail",
    type: "client",
    url: "https://bhanusilks.com/",
    label: "Online store",
    title: "Handwoven tradition. Made to be treasured.",
    description: "An inviting storefront for silk sarees and craft.",
    pills: ["Silk sarees", "Shop"],
  },
  {
    name: "V The Techee Jobs",
    theme: "v-the-techee-jobs",
    category: "Jobs & career opportunities",
    type: "client",
    url: "https://vthetecheejobs.com/",
    label: "Jobs platform",
    title: "Find your next opportunity.",
    description: "A regularly updated destination for jobs, internships, and careers.",
    pills: ["Jobs", "Internships", "Career"],
  },
  {
    name: "V The Techee",
    theme: "v-the-techee",
    category: "Telugu jobs & career updates",
    type: "client",
    url: "https://vthetechee.com/",
    label: "Digital publication",
    title: "The latest opportunities, in Telugu.",
    description: "Job news, free courses, and useful updates for a growing community.",
    pills: ["Telugu", "Jobs", "Learning"],
  },
  {
    name: "1991 Group of Companies",
    theme: "1991-group",
    category: "Global recruitment & careers",
    type: "client",
    url: "https://1991groupofcompanies.com/",
    label: "Recruitment",
    title: "Global careers. A more transparent journey.",
    description: "A clear digital experience for overseas recruitment and candidate support.",
    pills: ["Careers", "Global", "Support"],
  },
  {
    name: "Luxeederma",
    theme: "luxeederma",
    category: "Skin & hair clinic",
    type: "github",
    url: "https://tarunteja87.github.io/luxeederma/",
    label: "GitHub Pages",
    title: "A more considered approach to skin and hair.",
    description: "A calming, approachable online presence for a care-focused clinic.",
    pills: ["Skin", "Hair", "Wellness"],
  },
  {
    name: "Menu Card",
    theme: "menu-card",
    category: "Digital menu experience",
    type: "github",
    url: "https://tarunteja87.github.io/menu-card/",
    label: "GitHub Pages",
    title: "A menu that’s ready to meet the table.",
    description: "A simple digital menu experience designed to make browsing easy.",
    pills: ["Digital menu", "Hospitality"],
  },
  {
    name: "SNR Nest",
    theme: "snr-nest",
    category: "Recruitment & workforce solutions",
    type: "github",
    url: "https://snrnest.in/",
    label: "Workforce solutions",
    title: "Building opportunities. Empowering careers.",
    description: "Connecting people, skills, and businesses for meaningful growth.",
    pills: ["Hiring", "Workforce", "Careers"],
  },
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCount = document.querySelector("#project-count");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.type = project.type;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Visit ${project.name} website (opens in a new tab)`);

  const preview = document.createElement("div");
  preview.className = `project-preview preview-${project.theme}`;

  const topline = document.createElement("div");
  topline.className = "preview-topline";
  const brand = document.createElement("span");
  brand.textContent = project.name;
  const badge = document.createElement("span");
  badge.className = "preview-badge";
  badge.textContent = project.label;
  topline.append(brand, badge);

  const body = document.createElement("div");
  body.className = "preview-body";
  const kicker = document.createElement("p");
  kicker.className = "preview-kicker";
  kicker.textContent = project.category;
  const title = document.createElement("h3");
  title.className = "preview-title";
  title.textContent = project.title;
  const description = document.createElement("p");
  description.className = "preview-description";
  description.textContent = project.description;
  const pills = document.createElement("div");
  pills.className = "preview-pills";
  project.pills.forEach((value) => {
    const pill = document.createElement("span");
    pill.textContent = value;
    pills.append(pill);
  });
  body.append(kicker, title, description, pills);

  const art = document.createElement("div");
  art.className = "preview-art";
  art.setAttribute("aria-hidden", "true");
  preview.append(topline, body, art);
  link.append(preview);

  const meta = document.createElement("div");
  meta.className = "project-meta";
  const details = document.createElement("div");
  const name = document.createElement("h3");
  name.className = "project-title";
  name.textContent = project.name;
  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = project.category;
  details.append(name, category);
  const open = document.createElement("span");
  open.className = "project-open";
  open.setAttribute("aria-hidden", "true");
  open.textContent = "↗";
  meta.append(details, open);

  card.append(link, meta);
  return card;
}

projects.forEach((project) => projectGrid.append(createProjectCard(project)));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;
    projectGrid.querySelectorAll(".project-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.type === filter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCount.textContent = String(visibleCount);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("is-open", !expanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
