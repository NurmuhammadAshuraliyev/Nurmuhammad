import { useTranslation } from "react-i18next";
export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Express.js",
    "NestJS",
    "Docker",
    "AWS",
    "JWT",
    "Nginx",
    "Git",
    "Git Actions",
    "Prisma ORM",
    "React.js",
    "Tailwind CSS",
    "REST API",
  ];
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-neutral-900 dark:text-neutral-100">
        {t("myskills.title")}
      </h2>

      <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
        {t("myskills.description")}
      </p>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-xs sm:text-sm md:text-base font-medium transition-transform duration-200 hover:-translate-y-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
