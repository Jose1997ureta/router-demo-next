"use client";

interface Props {
	error: Error;
}

export default function Error({ error }: Props) {
	return <div>ErrorPage {error.message}</div>;
}
