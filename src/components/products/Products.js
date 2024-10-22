import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/products';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setSortedProducts(products); // Обновляем отсортированные продукты при изменении списка продуктов
  }, [products]);

  const sortByPrice = () => {
    // Сортировка по цене (по возрастанию)
    setSortedProducts([...products].sort((a, b) => a.price - b.price));
  };

  const sortByDiscounted = () => {
    // Сортировка по скидке (по возрастанию)
    setSortedProducts([...products].sort((a, b) => {
      const priceA = a.discont_price || a.price;
      const priceB = b.discont_price || b.price;
      return priceA - priceB;
    }));
  };

  const sortByTitle = () => {
    // Сортировка по названию
    setSortedProducts([...products].sort((a, b) => a.title.localeCompare(b.title)));
  };

  return (
    <div className={styles.productsPage}>
      {/* Меню */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.menu}>
          <Link to="/">Main Page</Link>
          <Link to="/category">Categories</Link>
          <Link to="/products">All Products</Link>
          <Link to="/sales">All Sales</Link>
        </div>
        <div className={styles.cartIcon}>🛒</div>
      </nav>

      {/* Сортировка */}
      <div className={styles.sorting}>
        <button onClick={sortByPrice}>Sort by Price</button>
        <button onClick={sortByDiscounted}>Sort by Discounted Price</button>
        <button onClick={sortByTitle}>Sort by Title</button>
      </div>

      {/* Блок продуктов */}
      <section className={styles.productsSection}>
        <h2>All Products</h2>
        <div className={styles.products}>
          {sortedProducts.map(product => (
            <Link to={`/Products/${product.id}`} key={product.id}>
              <div className={styles.productCard}>
                <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Price: {product.discont_price ? product.discont_price : product.price}₽</p>
                {product.discont_price && (
                  <p className={styles.discountPrice}>Discount Price: {product.discont_price}₽</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Контактная информация */}
      <footer className={styles.contactSection}>
        <div className={styles.contactDetails}>
          <h3>Contact</h3>
          <p>Phone: +7 (499) 350-66-04</p>
          <p>Address: Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          <p>Working hours: 24 hours a day</p>
        </div>
        <div className={styles.map}>
          <img src="map_image_url" alt="map" />
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
