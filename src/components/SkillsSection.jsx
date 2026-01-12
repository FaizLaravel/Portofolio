const skills = [
  {
    id: 1,
    skill: "HTLM",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "Laravel",
  },
  {
    id: 4,
    skill: "Vue.js",
  },
  {
    id: 5,
    skill: "Typscript",
  },
  {
    id: 6,
    skill: "React.js",
  },
];
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto">
          Teknologi yang saya gunakan untuk membangun aplikasi web modern dan
          siap produksi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border p-2 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {skill.skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
