import React from "react";
import { PlayersData } from "../shared/ListOfPlayers";
import { useState } from "react";

export default function Players() {
	const [selectedPlayer, setPlayer] = useState(null);

	return (
		<div className="container">
			{PlayersData.map((currentPlayer) => (
				<div className="column" key={currentPlayer.id}>
					<div className="card">
						<img src={currentPlayer.img} alt={currentPlayer.name} />
						<h3>{currentPlayer.name}</h3>
						<p className="title">{currentPlayer.club}</p>
						<p>
							<button
								onClick={() => {
									setPlayer(currentPlayer);
								}}
							>
								<a href="#popup1" id="openPopUp">
									Detail
								</a>
							</button>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
