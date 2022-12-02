import { useState } from "react";
import { useAppContext } from "../store/store";
import {Link, useNavigate} from 'react-router-dom'
import Layout from "../components/layout";


export default function Create() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [cover, setCover] = useState("");
	const [intro, setIntro] = useState("");
	const [completed, setCompleted] = useState(false);
	const [review, setReview] = useState("");

    const store = useAppContext();
    const navigate = useNavigate()

	function handleChange(e) {

		switch (e.target.name) {
			case "title":
				setTitle(e.target.value);
				break;
            case "author":
                setAuthor(e.target.value);
                break;
            case "intro":
                setIntro(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked)
                break;
            case "review":
                setReview(e.target.value)
                break;
			default:
		}
	}

    function handleOnChangeFile(e){
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        
        reader.onloadend = function(){
            setCover(reader.result.toString());
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const newBook = {
          id: crypto.randomUUID(),
          title,
          author,
          cover,
          intro,
          completed,
          review,
        };
        store.createItem(newBook);
        
        navigate('/')
      }

	return (
		<Layout>
			<form onSubmit={handleSubmit}>
                <div>
				<div>Title</div>
				<input type="text" name="title" onChange={handleChange} value={title} />
                </div>

                <div>
				<div>Autor</div>
				<input type="text" name="author" onChange={handleChange} value={author} />
                </div>

                <div>
				<div>Cover</div>
				<input type="file" name="cover" onChange={handleOnChangeFile}/>
                <div>{!!cover ? <img src={cover} width='200' height="200" alt="preview"/> : ''}</div>
                </div>

                <div>
				<div>Introduction</div>
				<input type="text" name="intro" onChange={handleChange} value={intro}/>
                </div>

                <div>
				<div>Complete</div>
				<input type="checkbox" name="completed" onChange={handleChange} value={completed}/>
                </div>

                <div>
				<div>Review</div>
				<input type="text" name="review" onChange={handleChange} value={review}/>
                </div>

                <input type="submit" value="Register book"/>
			</form>
		</Layout>
	);
}
