import { Counter } from "@/components/counter";
import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Acerca de mi </h1>
			<Counter/>
		</div>
	);
}
