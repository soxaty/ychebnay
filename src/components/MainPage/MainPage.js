import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions/products';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="https://via.placeholder.com/40" alt="Logo" />
          <h1>Garden Shop</h1>
        </div>
        <nav>
          <Link to="/MainPage">Main Page</Link>
          <Link to="/category">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </nav>
        <button className={styles.cartButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 3v18m6-18v18M6 7h12M6 12h12M6 17h12" />
          </svg>
        </button>
      </header>

      {/* Banner */}
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button className={styles.checkOutButton}>Check out</button>
      </div>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <h2>Categories</h2>
        <div className={styles.categories}>
          {categories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <div className={styles.categoryCard}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
       
      <section className={styles.saleSection}>
        <h2>Sale</h2>
        <div className={styles.saleProducts}>
          {products.slice(0, 4).map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={`http://localhost:3333${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p className={styles.price}>${product.price}</p>
              {product.discont_price && <p className={styles.oldPrice}>${product.discont_price}</p>}
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Contact</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Phone</h3>
            <p>+7 (499) 350-66-04</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Address</h3>
            <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Working Hours</h3>
            <p>24 hours a day</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Socials</h3>
            <p>Chat</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Find Us</h2>
        <div className={styles.map}>
          <img src="https://via.placeholder.com/600x300" alt="Map" />
        </div>
      </section>

      {/* Sale Section */}
      
    </div>
  );
};

export default MainPage;
