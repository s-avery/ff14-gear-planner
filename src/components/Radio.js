// !IMPORT ZONE
import { useState } from "react";

const Radio = ({
	gearPieces,
	setGearPieces,
	setRadioValue,
	radioValue,
	characterList,
}) => {
	let newGearArray = [...gearPieces];
	// !Component
	return (
		<div className="charCreate__gearChoices">
			{newGearArray.map((gearPiece) => {
				return (
					<>
						<div className="charCreate__option">
							<p>{gearPiece.pieceName}</p>

							{/* //*No Need */}
							<div className="charCreate__radioContainer">
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`noNeed${gearPiece.pieceName}`}
										value={false}
										onChange={() => {
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted = "noNeed";
													// console.log(thingy);
													setGearPieces(newGearArray);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`noNeed${gearPiece.pieceName}`}
										className="charCreate__noNeed"
									>
										don't need it
									</label>
								</div>

								{/* //*Want It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`want${gearPiece.pieceName}`}
										value={true}
										onChange={() => {
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted = "want";
													setGearPieces(newGearArray);
													// console.log(thingy);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`want${gearPiece.pieceName}`}
										className="charCreate__want"
									>
										want it
									</label>
								</div>

								{/* //*Got It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`got${gearPiece.pieceName}`}
										value={false}
										onChange={() => {
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted = "got";
													setGearPieces(newGearArray);

													// console.log(thingy);
													// console.log(newGearArray);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`got${gearPiece.pieceName}`}
										className="charCreate__got"
									>
										got it
									</label>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Radio;
