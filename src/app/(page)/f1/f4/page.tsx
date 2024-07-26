import Link from "next/link";
import React from "react";

export default function F4Page() {
	return (
		<div>
			<p>F4Page</p>
			<Link href={"/f1/f3"} className="underline">
				F3
			</Link>
			<Link href={"/about"} className="underline">
				About
			</Link>
		</div>
	);
}
