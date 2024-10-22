import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions/products';
import { Link } from 'react-router-dom';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.categoryPage}>
      {/* Хэдер */}
      <header className={styles.header}>
        <h1>Your Logo</h1>
        <nav>
          <Link to="/">Main Page</Link>
          <Link to="/category">Categories</Link>
          <Link to="/products">All Products</Link>
          <Link to="/sales">All Sales</Link>
        </nav>
        <div className={styles.cartIcon}>🛒</div>
      </header>

     
      <section className={styles.categoriesSection}>
        <h2>Categories</h2>
        <div className={styles.categories}>
          {categories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <div className={styles.categoryCard}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

   
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

export default CategoryPage;
