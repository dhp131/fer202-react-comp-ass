import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
	const idFromURL = useParams();
	console.log(idFromURL.id);
	return <div>DetailPage</div>;
}
