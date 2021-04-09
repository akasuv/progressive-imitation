import createLink from "../components/Link";

export default {
  title: "HTML/Link",
};

export const Basic = () =>
  createLink({ label: "basic link", href: "https:google.com", primary: true });
