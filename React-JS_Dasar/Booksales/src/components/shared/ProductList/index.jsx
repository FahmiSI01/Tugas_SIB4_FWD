import { useState, useEffect } from "react";
import booksData from "../../../utils/books";
import styles from "../../../styles/books.module.css";

export default function ProductList() {
  // state buku (HOOKS)
  const [books, setBooks] = useState([...booksData]);

  // useEffect saat pertama load
  useEffect(() => {
    console.log("Data buku berhasil dimuat");
  }, []);

  // useEffect saat data berubah
  useEffect(() => {
    console.log("Data buku berubah:", books);
  }, [books]);

  // fungsi tambah buku
  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "The Let Them Theory",
      price: "Rp100.000",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/t0-eee-l7x.jpg",
      description: "Cerita inspiratif untuk meraih mimpi.",
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    alert("Buku berhasil ditambahkan!");
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Daftar Buku</h2>
        <p className={styles.headerText}>
          Koleksi terbaru dan rekomendasi editor kami untukmu.
        </p>
      </div>

      {/* LIST BUKU */}
      <div className={styles.grid}>
        {books.map((book) => (
          <div className={styles.card} key={book.id}>
            <img
              src={book.image}
              alt={book.title}
              className={styles.image}
            />

            <div className={styles.body}>
              <h5 className={styles.title}>{book.title}</h5>
              <p className={styles.desc}>{book.description}</p>
            </div>

            <div className={styles.footer}>
              <span className={styles.price}>{book.price}</span>
              <button className={styles.button}>Beli</button>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON TAMBAH */}
      <div className={styles.buttonWrapper}>
        <button onClick={handleAddBook} className={styles.addButton}>
          + Tambah Buku
        </button>
      </div>
    </section>
  );
}