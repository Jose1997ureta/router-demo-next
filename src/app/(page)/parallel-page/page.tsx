import Link from "next/link";

export default function ParallelPage() {
	return (
		<div>
			<ul>
				<li>
					<Link href={"/parallel-page/1"}>Parallel 1</Link>
				</li>
				<li>
					<Link href={"/parallel-page/2"}>Parallel 2</Link>
				</li>
			</ul>
		</div>
	);
}
