import React, { useState } from "react";

export default function PlayersPresentation({ players }) {
	const [selectedPlayer, setPlayer] = useState(null);

	return (
		<div className="container">
			{players.map((player) => (
				<div className="column" key={player.id}>
					<div className="card">
						<img src={player.img} alt={player.name} />
						<h3>{player.name}</h3>
						<p className="title">{player.club}</p>
						<p>
							<button
								onClick={() => {
									setPlayer(player);
									window.location.href = "#popup1";
								}}
							>
								Detail
							</button>
						</p>
					</div>
				</div>
			))}
			<div id="popup1" className="overlay">
				{selectedPlayer && (
					<div className="popup">
						<img
							src={selectedPlayer.img}
							alt={selectedPlayer.name}
						/>
						<h2>{selectedPlayer.name}</h2>

						<a className="close" href="#">
							&times;
						</a>

						<div className="content">{selectedPlayer.info}</div>
					</div>
				)}
			</div>
		</div>
	);
}
