import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const limit = 10;

  const fetchProducts = async (currentPage: number) => {
    setLoading(true);
    setError(null);

    const skip = currentPage * limit;

    try {
      const res = await axios.get<ProductResponse>(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      setProducts(res.data.products);
      setTotal(res.data.total);
    } catch {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  const fetch = async () => {
    await fetchProducts(page);
  };
  fetch();
}, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10,
        }}
      >
        {!loading &&
          !error &&
          products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
              <img src={p.thumbnail} width={100} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
            </div>
          ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0 || loading}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page + 1} / {totalPages || 1}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading || page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;