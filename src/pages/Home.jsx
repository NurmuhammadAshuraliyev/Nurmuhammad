import { useTranslation } from "react-i18next";
import Socials from "../components/Socials";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="flex mt-40 flex-col items-center text-center px-4">
      <h1 className="text-2xl select-none sm:text-4xl md:text-6xl lg:text-6xl font-extrabold text-center tracking-tight">
        {t("hero")}
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
        {t("subtitle")}
      </p>
      <Socials />
    </section>
  );
}
