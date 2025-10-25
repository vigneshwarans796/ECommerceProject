-- -----------------------------
-- Table structure for Product
-- -----------------------------
DROP TABLE IF EXISTS Product;
CREATE TABLE Product (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DOUBLE,
    quantity INT,
    imageUrl VARCHAR(500)
);

-- -----------------------------
-- Insert sample products
-- -----------------------------
INSERT INTO Product (name, description, price, quantity, imageUrl) VALUES
('Apple iPhone 15 Pro Max 256GB', '6.7-inch Super Retina XDR display, A17 Bionic chip, 5G capable, Pro camera system.', 129999, 10, 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg'),
('Samsung Galaxy S23 Ultra 512GB', '6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 200MP camera, S Pen support', 124999, 15, 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg'),
('Sony WH-1000XM5 Wireless Headphones', 'Industry-leading noise cancellation, 30-hour battery life, touch sensor controls.', 29990, 20, 'https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg'),
('Dell XPS 13 9310 Laptop', 'Intel Core i7, 16GB RAM, 512GB SSD, 13.4-inch InfinityEdge display.', 119990, 8, 'https://m.media-amazon.com/images/I/91KKKqE7gdL._SX679_.jpg'),
('Apple Watch Series 8 GPS + Cellular', '45mm display, blood oxygen and ECG apps, crash detection, swimproof.', 54900, 25, 'https://m.media-amazon.com/images/I/71XMTLtZd5L._SX679_.jpg'),
('Nike Air Zoom Pegasus 40 Running Shoes', 'Lightweight running shoes with responsive cushioning, breathable mesh upper.', 7500, 22, 'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1abaae51-d7c4-4ca6-8e2b-8133b90d168b/AIR+ZOOM+PEGASUS+40.png'),
('Samsung Galaxy Tab S9 11-inch Tablet', 'Android tablet with Snapdragon 8 Gen 2, 8GB RAM, 128GB storage, S Pen support.', 59999, 13, 'https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-s11/buy/TS11-KV_PC_1600x864.jpg?imbypass=true'),
('Bose SoundLink Revolve+ Bluetooth Speaker', '360-degree sound, deep bass, 16-hour battery life, water-resistant.', 19999, 20, 'https://m.media-amazon.com/images/I/71eJQYXTVxL._SX569_.jpg'),
('Logitech MX Master 3 Advanced Wireless Mouse', 'Ergonomic design, customizable buttons, fast scrolling, USB-C rechargeable.', 7999, 25, 'https://m.media-amazon.com/images/I/31kOPvuYXLL._SY300_SX300_QL70_FMwebp_.jpg'),
('Canon EOS R10 Mirrorless Camera', '24.2MP, 4K video, Dual Pixel CMOS AF, Wi-Fi & Bluetooth.', 84999, 8, 'https://m.media-amazon.com/images/I/51H2xUSRiqL._SY300_SX300_QL70_FMwebp_.jpg');

-- -----------------------------
-- Table structure for User
-- -----------------------------
DROP TABLE IF EXISTS User;
CREATE TABLE User (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(50)
);

-- -----------------------------
-- Insert sample users
-- -----------------------------
INSERT INTO User (name, email, password, role) VALUES
('Test User', 'testuser@example.com', '123456', 'USER'),
('Bob Smith', 'bob@example.com', 'bob123', 'SELLER'),
('Diana Prince', 'diana@example.com', 'diana123', 'USER'),
('Ethan Hunt', 'ethan@example.com', 'ethan123', 'USER'),
('Alice Johnson', 'alice@example.com', 'alice123', 'USER');
