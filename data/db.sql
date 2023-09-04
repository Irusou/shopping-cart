create table carts (
	cart_id int primary key
);

create table users (
	user_id int primary key,
    user_name varchar(20) not null,
    user_password varchar(20) not null,
    cart_id int,
    
    foreign key (cart_id) references carts(cart_id)
);

create table items (
	item_id int primary key,
    item_name varchar(20) not null,
    item_description varchar(60),
    item_price float not null default 0.0,
    item_imageURL varchar(200)
);

create table cartitems (
	cart_id int,
    item_id int,
    primary key (cart_id, item_id),
    foreign key (cart_id) references carts(cart_id),
    foreign key (item_id) references items(item_id)
);