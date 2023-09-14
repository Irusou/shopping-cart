import Item from "../../Item";
import "./Card.css";

interface CardProps {
	item: Item;
	key: number;
}

export default function Card({ item }: CardProps) {
	let EUR = new Intl.NumberFormat("pt-PT", {
		style: "currency",
		currency: "EUR",
		localeMatcher: "best fit",
	});

	return (
		<>
			<div className="card-container" key={item.item_id}>
				<img src={item.item_imageURL} />
				<div className="card-details">
					<h2>
						<span>{item.item_name}</span>
						<span>{EUR.format(Math.round(item.item_price))}</span>
					</h2>
					<p>{item.item_description}</p>
				</div>
				<button>Add to cart</button>
			</div>
		</>
	);
}
