import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Quiz from "../components/Quiz";
import Loading from "../components/Loading";

const Home = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { ite } = location.state || { ite: null };
  // const { name, catagory, type } = ite;//it is also correct
  const name = ite ? ite.name : null;
  const category = ite ? ite.category : null;
  const type = ite ? ite.type : null;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const Api = `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${type && `&difficulty=${type}`}&type=multiple`;
        const result = await fetch(`${Api}`);
        const data = await result.json();
        // console.log(data.results);
        setItem(data.results);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      {{ item } && <Quiz item={item} name={name} category={item[0].category} />}
    </>
  );
};

export default Home;
