import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chamikara Weerasinghe Portfolio",
    short_name: "Chamikara",
    description:
      "Software Engineering Undergraduate, DevOps Engineer Intern, and Full Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
