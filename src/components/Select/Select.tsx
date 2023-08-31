import Option from "./Option/Option";
import "./Select.css";

import React from "react";

export default function Select() {
	return (
		<div className="select-container">
			<select name="languages" id="languages">
				<Option value={"en-En"} text={"ENG"} icon={"./"} />
				<Option value={"es-Es"} text={"ESP"} icon={"./"} />
				<Option value={"pt-PT"} text={"PT"} icon={"./"} />
			</select>
		</div>
	);
}
