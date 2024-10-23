import { Guides } from "@content";

export function sortGuides(guides: Guides[]) {
  return guides.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });
}
