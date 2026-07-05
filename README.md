# React-shop-filter
 e-commerce React app featuring product search and dynamic price-range filtering, powered by the DummyJSON API. Built with React hooks (useState, useEffect) for state management and real-time filtering.

# 🛍️ React E-Commerce Product Filter

An e-commerce web application built with **React**, allowing users to browse products, search by name, and filter results by price range. Product data is fetched in real time from the [DummyJSON API](https://dummyjson.com/).

---

## ✨ Features

- 🔍 **Search** — Find products instantly by typing a keyword.
- 💰 **Price Filter** — Filter products by predefined or custom price ranges.
- ⚡ **Real-time Updates** — Results update dynamically as filters change, no page reload.
- 📱 **Responsive Design** — Works smoothly across desktop and mobile screens.
- 🔗 **Live Data** — Product info (name, image, price, description) pulled from DummyJSON API.

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **useState** / **useEffect** for state and data fetching
- **DummyJSON API** as the data source
- **CSS** for styling and layout

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

---

## 🚀 Usage

1. Once the app loads, all products are fetched automatically from the API.
2. Use the **search bar** to look up a product by name.
3. Use the **price filter** to narrow down products within a certain price range.
4. Filtered results update instantly on the screen.

---

## 🌐 API Reference

This project uses the [DummyJSON Products API](https://dummyjson.com/docs/products):

```
GET https://dummyjson.com/products
```

Returns a list of products with fields like `title`, `price`, `thumbnail`, and `description`.

---



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues) or open a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
