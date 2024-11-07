import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function DisplayProduct() {
  const { catName } = useParams();
  const [getAllData, setgetAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setgetAllData(data);

        // Set filtered data initially to all data
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on `catName` if it exists; otherwise, show all data
    if (catName) {
      setFilteredData(getAllData.filter((item) => item.category === catName));
    } else {
      setFilteredData(getAllData);
    }
  }, [catName, getAllData]);

  return (
    <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {filteredData.length > 0 ? (
        filteredData.map((card) => (
          <Card key={card.product_id} card={card} catName={catName} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
