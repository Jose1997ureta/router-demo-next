import Link from "next/link";

export default function F1Page() {
	return (
		<div>
			<p>F1Page</p>
			<Link href={"/f1/f2"} className="underline">
				F2
			</Link>
		</div>
	);
}
