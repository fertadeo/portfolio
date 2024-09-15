
import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Acerca de mi </h1>
			<p className="text-lg hover:bg-green-900"> Hola! Soy desarrollador Fullstack al termino de mi carrera de Tec. en Desarrollo Web y Aplicaciones mobiles del ISPC </p>
		</div>
	);
}
