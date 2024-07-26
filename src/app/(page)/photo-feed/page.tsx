import Link from "next/link";

export default function PhotoFeedPage() {
	return (
		<div className="min-h-screen p-2">
			<div className="grid grid-cols-4 gap-3">
				{Array.from({ length: 5 }, (_, index) => index).map((el) => (
					<Link key={el} href={`/photo-feed/${el + 1}`}>
						<div className="flex justify-center items-center p-2 border shadow-md rounded-sm cursor-pointer">
							<p className="text-sm ">Item {el + 1}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
