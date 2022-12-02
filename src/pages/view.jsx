import Layout from "../components/layout";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View() {

    const [item, setItem] = useState({})
    const params = useParams()
    const store = useAppContext();

    useEffect(() => {
      const book = store.getItem(params.bookId)
      setItem(book)

    }, [])
    

    if(!item){
        return <Layout>Book no found</Layout>
    }
	return (
		<Layout>
			<h2>{item?.title}</h2>
            <div>{item?.cover ? <img src={item?.cover} width="400" alt="img"/> : ''}</div>
            <div>{item?.author}</div>
            <div>{item?.intro}</div>
            <div>{item?.completed ? "Leido" : "Por terminar"}</div>
            <div>{item?.review}</div>
		</Layout>
	);
}
