export const Validation = (obj) => {
  if (obj.name === "") return { target: "name", message: "Name kiriting?" };
  if (obj.email === "") return { target: "email", message: "Email kiriting?" };
  if (obj.message === "")
    return { target: "message", message: "Message kiriting?" };

  return false;
};
