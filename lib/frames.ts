export type Frame = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function projectFrames(project: {
  title: string;
  place: string;
  photos: readonly string[];
}): Frame[] {
  return project.photos.map((src, index) => ({
    src,
    width: 705,
    height: 550,
    alt: `${project.title} in ${project.place}. Foto ${index + 1} van ${project.photos.length}.`,
  }));
}
