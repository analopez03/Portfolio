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
    technology: ["Illustrator"],
    link: "",
  },
  {
    id: 3,
    name: "Postal Navidad",
    description: "Postal para navidad diseñado con illustrator",
    src: "../img/navidad.webp",
    technology: ["Illustrator"],
    link: "",
  },
  {
    id: 4,
    name: "Prototipo de troquelado",
    description: "troquelado de un envase de chocolate",
    src: "../img/prototipo.webp",
    technology: ["Illustrator"],
    link: "",
  },
];
