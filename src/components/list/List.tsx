import React, { useState, useEffect, useContext } from "react";
import Button from "../common/Button";
import { fetchData } from "../../Api";
import { ListContext } from "../../context/ListContext";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  favorite: boolean;
}

const List: React.FC = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const { list, updateList } = useContext(ListContext);
  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    if (list) {
      setData(list);
    } else {
      getListData();
    }
  }, []);

  // get list data
  const getListData = async () => {
    try {
      setScroll(false)
      const res = await fetchData({
        path: `/albums/1/photos?_page=${page}&_limit=10`,
      });
      if (Array.isArray(res) && res.length > 0) {
        const listData = res.map((item: any) => {
          item.favorite = false;
          return item;
        });
        setData((prev) => [...prev, ...listData]);
        updateList([...data, ...listData]);
        setScroll(true)
        setPage((prev) => prev + 1)
      } else {
        setScroll(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100 && scroll
    ) {
      // setPage((prev) => prev + 1);
      getListData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // adding to favorite
  const handleFavorites = (data: any) => {
    const updatedList = list.map((item: any) => {
      if (item.id == data.id) item.favorite = true;
      return item;
    });
    updateList(updatedList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Button to="/">Back to Dashboard</Button>
        <h1>List Page</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {data.map((item, index) => (
          <div key={index} style={{ flex: "1 0 30%", marginBottom: 16 }}>
            <img src={item.thumbnailUrl} alt={item.title} />
              <p>{item.title}</p>
            <div style={{ pointerEvents: item.favorite ? "none" as const : 'initial' as const}}>
              <Button onClick={() => handleFavorites(item)}>
                Add to Favorites
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
