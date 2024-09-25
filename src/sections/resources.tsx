import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Book,
  ClipboardList,
  Code,
  GitMerge,
  Hammer,
  HelpCircle,
  Layout,
  Users,
} from "lucide-react";

export function Resources() {
  const resources = [
    {
      icon: <Users size={30} />,
      title: "Comunidades de Desarrolladores",
      description:
        "Espacios donde puedes compartir conocimientos, hacer preguntas y resolver dudas con otros desarrolladores apasionados.",
    },
    {
      icon: <Book size={30} />,
      title: "Lugares para Aprender",
      description:
        "Plataformas que ofrecen una variedad de cursos de desarrollo web para mejorar tus habilidades y conocimientos.",
    },
    {
      icon: <Code size={30} />,
      title: "Lugares para Practicar",
      description:
        "Sitios donde puedes realizar ejercicios y desafíos prácticos para aplicar y reforzar tus habilidades de codificación.",
    },
    {
      icon: <Hammer size={30} />,
      title: "Herramientas Útiles",
      description:
        "Recursos y aplicaciones que te ayudarán a optimizar y mejorar tu flujo de trabajo diario en el desarrollo.",
    },
    {
      icon: <ClipboardList size={30} />,
      title: "Documentación",
      description:
        "Guías y documentación oficial sobre tecnologías populares, que ofrecen las mejores prácticas y recursos útiles.",
    },
    {
      icon: <Layout size={30} />,
      title: "Bibliotecas y Frameworks",
      description:
        "Colecciones de código preconstruido que te permiten acelerar el desarrollo y mejorar la calidad de tus proyectos.",
    },
    {
      icon: <HelpCircle size={30} />,
      title: "Recursos de Diseño",
      description:
        "Herramientas y recursos que te ayudarán a mejorar la estética y usabilidad de tus proyectos de desarrollo.",
    },
    {
      icon: <GitMerge size={30} />,
      title: "Proyectos de Código Abierto",
      description:
        "Iniciativas colaborativas donde puedes aprender, contribuir y colaborar con otros desarrolladores en proyectos abiertos.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Recursos para Desarrolladores</h2>
      <p className="mb-8">
        Si estás buscando recursos útiles para cualquier propósito, explora la
        página de Recursos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <Card key={index} className="rounded-lg text-center">
            <CardHeader className="justify-center items-center">
              <div className="mb-4 border-2 p-4 rounded-full border-dashed">
                {resource.icon}
              </div>
              <h3 className="text-lg font-semibold">{resource.title}</h3>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                {resource.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
