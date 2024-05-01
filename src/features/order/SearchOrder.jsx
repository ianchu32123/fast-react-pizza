import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setquery] = useState("");
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigation(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Order..."
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="4 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 sm:w-64
        sm:focus:w-72"
      />
    </form>
  );
}
