import React, { useState, useEffect } from "react";

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publication_year: "",
    genre: "",
  });

  // Mock data
  const mockBooks = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", publication_year: 1960, genre: "Fiction" },
    { id: 2, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", publication_year: 2011, genre: "Non-Fiction" },
    { id: 3, title: "Dune", author: "Frank Herbert", publication_year: 1965, genre: "Science Fiction" },
    { id: 4, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", publication_year: 2005, genre: "Mystery" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", publication_year: 1937, genre: "Fantasy" },
    { id: 6, title: "1984", author: "George Orwell", publication_year: 1949, genre: "Dystopian" },
    { id: 7, title: "Pride and Prejudice", author: "Jane Austen", publication_year: 1813, genre: "Romance" },
    { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger", publication_year: 1951, genre: "Fiction" },
    { id: 9, title: "The Alchemist", author: "Paulo Coelho", publication_year: 1988, genre: "Philosophical Fiction" },
    { id: 10, title: "Brave New World", author: "Aldous Huxley", publication_year: 1932, genre: "Dystopian" },
  ];

  // UseEffect to set mock data
  useEffect(() => {
    setBooks(mockBooks);
  }, []);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdate = (book) => {
    setEditingBook(book);
  };

  const handleSave = () => {
    setBooks(books.map((book) => (book.id === editingBook.id ? editingBook : book)));
    setEditingBook(null);
    alert("Book updated successfully");
  };

  const handleAddBook = () => {
    const newBookWithId = { ...newBook, id: books.length + 1 };
    setBooks([...books, newBookWithId]);
    setNewBook({ title: "", author: "", publication_year: "", genre: "" });
    setIsAddingBook(false);
    alert("Book added successfully");
  };

  const buttonStyle = {
    backgroundColor: "azure",
    width: "100px",
    padding: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = (e) => (e.target.style.backgroundColor = "lightblue");
  const normalStyle = (e) => (e.target.style.backgroundColor = "azure");

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ justifyContent: "center", marginBottom: "20px", color: "black" }}>Book List</h2>
        <button
          onClick={() => setIsAddingBook(true)}
          style={buttonStyle}
          onMouseOver={hoverStyle}
          onMouseOut={normalStyle}
        >
          Add Book
        </button>
      </div>

      {/* Add New Book Form */}
      {isAddingBook && (
        <div
          style={{
            width: "300px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "antiquewhite",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            borderRadius: "8px",
          }}
        >
          <h3>Add New Book</h3>
          <input type="text" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} placeholder="Title" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="text" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} placeholder="Author" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="number" value={newBook.publication_year} onChange={(e) => setNewBook({ ...newBook, publication_year: e.target.value })} placeholder="Publication Year" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="text" value={newBook.genre} onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })} placeholder="Genre" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <div style={{ textAlign: "center" }}>
            <button onClick={handleAddBook} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
              Save
            </button>
            <button onClick={() => setIsAddingBook(false)} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Update Book Form */}
      {editingBook && (
        <div
          style={{
            width: "300px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "antiquewhite",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            borderRadius: "8px",
          }}
        >
          <h3>Edit Book</h3>
          <input type="text" value={editingBook.title} onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })} placeholder="Title" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="text" value={editingBook.author} onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })} placeholder="Author" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="number" value={editingBook.publication_year} onChange={(e) => setEditingBook({ ...editingBook, publication_year: e.target.value })} placeholder="Publication Year" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <input type="text" value={editingBook.genre} onChange={(e) => setEditingBook({ ...editingBook, genre: e.target.value })} placeholder="Genre" style={{ display: "block", marginBottom: "10px", width: "98%", padding: "5px" }} />
          <div style={{ textAlign: "center" }}>
            <button onClick={handleSave} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
              Save
            </button>
            <button onClick={() => setEditingBook(null)} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title || "N/A"}</td>
              <td>{book.author || "N/A"}</td>
              <td>{book.publication_year || "N/A"}</td>
              <td>{book.genre || "N/A"}</td>
              <td>
                <button onClick={() => handleUpdate(book)} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
                  Update
                </button>
                <button onClick={() => handleDelete(book.id)} style={buttonStyle} onMouseOver={hoverStyle} onMouseOut={normalStyle}>
                  Delete
                </button>
              </td>
            </tr>
          )) : <tr><td colSpan="6">No books available</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
