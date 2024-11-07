const { Client } = require("pg");
require("dotenv").config();

const SQL1 = 
`
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO categories (category_name)
VALUES
('Breads'),
('Fruits'),
('Vegetables'),
('Drinks');
`;

const SQL2 = 
`
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  item_name VARCHAR(100) UNIQUE NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER DEFAULT 0,
  price NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO items (item_name, category_id, quantity, price)
VALUES
('Sourdough Bread', 1, 20, 4.99),
('Soda Bread', 1, 30, 4.99),
('Apple', 2, 50, 0.99),
('Orange', 2, 50, 0.99),
('Carrot', 3, 100, 0.49),
('Broccoli', 3, 100, 2.49),
('Apple Juice', 4, 30, 2.99),
('Orange Juice', 4, 30, 2.99)
`;



async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  });
  await client.connect();
  await client.query(SQL1);
  await client.query(SQL2);
  await client.end();
  console.log("done");
}

main();


