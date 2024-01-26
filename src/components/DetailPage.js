import React from "react";
import { useParams } from "react-router-dom";
import { PlayersData } from "../shared/ListOfPlayers";

export default function Detail() {
	const { id } = useParams();
	const player = PlayersData.find((obj) => obj.id === String(id));
	let cost = player.cost.toLocaleString();
	return (
		<div className="container">
			<div className="card">
				<div className="badge">{player.name}</div>
				<div className="product-tumb">
					<img src={`../${player.img}`} alt="" />
				</div>

				<div className="product-details">
					<h4>{player.club}</h4>
					<div className="product-price">Market value: {cost}</div>
					<p>{player.info}</p>
					<div className="product-bottom-details"></div>
				</div>
			</div>
		</div>
	);
}
