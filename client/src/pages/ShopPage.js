import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../components/storeSlice";
import ProductsList from "../components/ProductsList";

const ShopPage = () => {
  const { categories, isCategoriesFetched } = useSelector(
    (state) => state.store
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products Available</h1>
      {!isCategoriesFetched ? (
        <p>Fetching products categories...</p>
      ) : (
        categories.map((category, idx) => (
          <div key={idx}>
            <h2
              key={idx}
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#1875d1",
                height: "50px",
                color: "white",
                paddingLeft: "20px",
              }}
            >
              {category.toUpperCase()}
            </h2>
            <ProductsList category={category} />
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default ShopPage;
