import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./categorySel.css";

const CategorySelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = () => {
      const mockCategories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Books" },
        { id: 4, name: "Home Appliances" },
        { id: 5, name: "Sports Equipment" },
        { id: 6, name: "Beauty Products" },
        { id: 7, name: "Toys" },
        { id: 8, name: "Furniture" },
        { id: 9, name: "Automotive" },
        { id: 10, name: "Jewelry" },
        { id: 11, name: "Furniture" },
        { id: 12, name: "Automotive" },
        { id: 13, name: "Jewelry" },
        { id: 14, name: "Garden Supplies" },
        { id: 15, name: "Pet Accessories" },
        { id: 16, name: "Art Supplies" },
        { id: 17, name: "Office Supplies" },
        { id: 18, name: "Health & Wellness" },
        { id: 19, name: "Books" },
        { id: 20, name: "Home Appliances" },
        { id: 1, name: "Sports Equipment" },
      ];

      setTimeout(() => {
        const startIndex = (currentPage - 1) * 6;
        setCategories(mockCategories.slice(startIndex, startIndex + 6));
      }, 500);
    };

    fetchCategories();
  }, [currentPage]);

  useEffect(() => {
    const storedCategories = localStorage.getItem("selectedCategories");
    if (storedCategories) {
      setSelectedCategories(JSON.parse(storedCategories));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
  }, [selectedCategories]);

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSave = () => {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
    alert("Selected categories have been saved successfully!");
  };

  const handleContinue = () => {
    navigate("/registration");
  };

  return (
    <div className="category-selection">
      <div className="category-selection__card">
        <h1 className="category-selection__title">
          Please mark your interests!
        </h1>
        <h3 className="category-selection__subtitle">
          We will keep you notified
        </h3>
        <h2 className="category-selection__saved-interests">
          My saved interests!
        </h2>
        <div className="category-selection__categories">
          {categories.map((category) => (
            <div key={category.id} className="category-selection__item">
              <input
                type="checkbox"
                id={category.id}
                className="category-selection__checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategorySelect(category)}
              />
              <label
                htmlFor={category.id}
                className="category-selection__label"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <div className="category-selection__buttons">
          <button onClick={handleSave} className="category-selection__save-btn">
            Save
          </button>
          <button
            onClick={handleContinue}
            className="category-selection__continue-btn"
          >
            Continue
          </button>
        </div>
        <div className="category-selection__pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="category-selection__pagination-btn"
          >
            Previous
          </button>
          <span className="category-selection__pagination-page">
            Page {currentPage}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="category-selection__pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
