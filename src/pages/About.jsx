import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-10 md:py-10 max-w-4xl">
      <div className="space-y-6 text-left">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {t("aboutt.p1")}
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white leading-tight">
          {t("aboutt.p2")}
        </h1>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("aboutt.p3")}
        </p>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("aboutt.p4")}
        </p>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("aboutt.p5")}
        </p>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="text-sm sm:text-base italic text-gray-800 dark:text-gray-200">
            {t("aboutt.p6")}
          </p>
        </div>
      </div>
    </section>
  );
}
