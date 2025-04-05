import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(10);
  const pageRef = useRef(page);
  const scrollRef = useRef(null);

  const fetchData = useCallback(async (page) => {
    const response = await fetch(`https://dummyjson.com/products?skip=${page}&limit=10`);
    const data = await response.json();
    setProducts(prevProducts => [...prevProducts, ...data.products]);
  }, []);

  useEffect(() => {
    fetchData(page);
  }, [page, fetchData]);

  useEffect(() => {
    
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setPage(prevPage => prevPage + 10);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="list-container" ref={scrollRef}>
      {products.map(product => (
        <div key={product.id} className="list">
          <img src={product.images[0]} alt={product.description} />
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
