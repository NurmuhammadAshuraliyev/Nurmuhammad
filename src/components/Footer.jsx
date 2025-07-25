import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center py-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {t("footer.copyright", { year })}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mt-1">
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
}
