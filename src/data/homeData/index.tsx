import { StaticImageData } from "next/image";
import homeImage from "../../assets/images/homeImage.png";

export interface Item {
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;
}

export const publications: Item[] = [
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
  },
];

export const projects: Item[] = [
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },

  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },

  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },
  {
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
  },

  // Add more items
];

export const trainings: Item[] = [
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description:
      "Training Description : Our training courses are certified by professional recognised bodies",
  },
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description:
      "Training Description : Our training courses are certified by professional recognised bodies",
  },
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description:
      "Training Description : Our training courses are certified by professional recognised bodies",
  },
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description:
      "Training Description : Our training courses are certified by professional recognised bodies",
  },
  // Add more items
];
