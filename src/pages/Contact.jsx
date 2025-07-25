import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Validation } from "../validation";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = {};
    for (const [key, value] of formData.entries()) {
      res[key] = value;
    }

    const validation = Validation(res);

    if (validation) {
      const { message, target } = validation;

      e.target[target].focus();
      toast.error(message);
    } else {
      console.log(t("submittedData"), res);
      toast.success(t("messageSent"));
      setForm(res);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        {t("contactUs")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          type="text"
          name="name"
          placeholder={t("yourName")}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base dark:bg-gray-800 dark:text-white"
        />

        <Input
          type="email"
          name="email"
          placeholder={t("yourEmail")}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base dark:bg-gray-800 dark:text-white"
        />

        <Textarea
          name="message"
          placeholder={t("yourMessage")}
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base dark:bg-gray-800 dark:text-white"
        />

        <Button
          variant="outline"
          type="submit"
          className="w-full cursor-pointer text-sm sm:text-base dark:bg-gray-800 dark:text-white"
        >
          {t("send")}
        </Button>
      </form>
    </div>
  );
}
