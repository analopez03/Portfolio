export interface Project {
  id: number;
  name: string;
  description: string;
  src: string;
  technology: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Aplicación web Raices Viajeras",
    description:
      "Raíces Viajeras es una aplicación web desarrollada bajo metodología Agile, cuyo objetivo es ofrecer a los usuarios una forma sencilla yatractiva de descubrir, reservar y compartir experiencias de turismo sostenible.",
    src: "../img/proyecto1.webp",
    technology: ["Bootstrap"],
    link: "https://github.com/PageCrafters/Raices-Viajeras",
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción del proyecto 2",
    src: "https://via.placeholder.com/150",
    technology: ["Tecnología 2"],
    link: "",
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Descripción del proyecto 3",
    src: "https://via.placeholder.com/150",
    technology: ["Tecnología 3", "Tecnología 4"],
    link: "",
  },
  {
    id: 4,
    name: "Proyecto 4",
    description: "Descripción del proyecto 4",
    src: "",
    technology: ["React"],
    link: "",
  },
];
