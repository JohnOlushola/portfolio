const projects = [
  {
    name: "TJWHO E-Commerce Store",
    link: "https://www.tjwho.co/",
  },
  {
    name: "Bias Mitigation with regularisation and reweighing",
    link: "https://github.com/JohnOlushola/bias-mitigation",
  },
  {
    name: "Adaptive Climate Pathways - Logistic Regression",
    link: "https://github.com/JohnOlushola/adaptive_climate_pathways",
  },
  {
    name: "Hackathon: Political Spending UK",
    link: "https://github.com/JohnOlushola/political_spending_uk",
  },
  {
    name: "Bookstore",
    link: "https://johnolushola.github.io/bookstore/",
  },
];

export default function ProjectPage() {
  return (
    <div>
      <ul className="mt-8">
        {projects.map((project, index) => (
          <li key={`project_item_${index}`} className="text-8xl">
            <a href={project.link}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
