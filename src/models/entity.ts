export type User = {
  name: string;
};

export type Experience = {
  title: string;
  date: string;
  iconBg: string;
  icon: string;
  company_name: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};
