import { badTitles } from "./constants";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const checkAndGetTitle = (markdown: string) => {
  const lines = markdown.split("\n").map((line) => line.trim());
  const firstLine = lines[0].toLowerCase().trim();
  if (
    !firstLine.startsWith("#") ||
    firstLine === "#" ||
    badTitles.includes(firstLine.replace("#", "").trim())
  ) {
    return;
  }

  return lines[0].replace("#", "").trim();
};

export const getContent = (markdown: string) => {
  const lines = markdown.split("\n");
  const content = lines.slice(1);
  return { lines, content };
};
