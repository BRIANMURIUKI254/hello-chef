import { useState } from "react";
import { db, storage } from "../config"; // Adjust the path if needed
import { collection, addDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const Admin = () => {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //upload image to storage
      const imageRef = ref(storage, "ProductPhotos" + image.name);
      const upload = await uploadBytes(imageRef, image);
      console.log(upload);
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(imageRef);

      console.log(downloadURL);

      const productData = {
        downloadURL,
        productName,
        price: parseFloat(price), // Ensure price is a number
      };
      // Add a new document with a generated ID
      await addDoc(collection(db, "products"), productData);
      alert("Product added:", productData);

      // Reset the form
      setImage("");
      setProductName("");
      setPrice("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])} // Get the selected file
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Admin;
