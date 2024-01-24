"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Button className="hover:bg-orange-400" radius="full" onPress={() => setCount(count + 1)}>
			Count is {count}
		</Button>
	);
};
