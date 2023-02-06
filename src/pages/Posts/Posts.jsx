import axios from "axios";
import { Modal } from "../../components/Modal/Modal";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContex";
import "./post.css";
export const Posts = () => {
  const { user } = useContext(UserContext);
  const titleRef = useRef();
  const titleEditRef = useRef();
  const todoRef = useRef()
  const [posts, setPosts] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [id, setId] = useState("");
  const getPosts = async () => {
    const data = await axios.get("http://localhost:7070/todos");
    if (data) {
      setPosts(data.data);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  const handlePost = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:7070/todos", {
        todo: titleRef.current.value,
        autor: user.first_name + " " + user.last_name,
      })
      .then((data) => {
        if (data.status === 201) {
          setPostModal(false);
          getPosts();
          titleRef.current.value =""
        }
      })
      .catch((err) => console.log(err));
  };
  const deletePosts = async (id) => {
    const data = await axios.delete(`http://localhost:7070/todos/${id}`);
    if (data) {
      getPosts();
    }
  };

  const handleDelete = (evt) => {
    let id = evt.target.dataset.postId;
    deletePosts(id);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`http://localhost:7070/todos/${id}`, {
        todo: titleEditRef.current.value,
        autor: user.first_name + " " + user.last_name,
      })
      .then((data) => {
        if (data.status === 200) {
          seteditModal(false);
          getPosts();
        }
      })
      .catch((err) => console.log(err));
  };
  const Submit = (evt) => {
    let idDataset = evt.target.dataset.postId;
    setId(idDataset);
    seteditModal(true);
    handleEditSubmit();
  };

  const handleCheckbox =(evt)=>{
    setId(evt.target.dataset.postId);
evt.target.nextSibling.classList.toggle('line')
  }
  return (
    <div>
   
      <h2 className="h2 text-center my-3">TODOS</h2>
<div>
<form onSubmit={handlePost} className='input-group'>
            <input
              className="form-control "
              ref={titleRef}
              type="text"
              placeholder="Title"
            />
           
            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </form>
</div>
      {posts.length ? (
        <div className=" posts-box ">
          {posts.map((post) => (
            <div className="todo-wraper">
            <div key={post.id} class="todo-box ">
              <input data-post-id={post.id} onClick={handleCheckbox} type="checkbox" className="form-chack-input" />
              <span data-post-id={post.id}  ref={todoRef} className="card-title">{post.todo}</span>

              <div className="btns-box">
                <button
                  onClick={Submit}
                  data-post-id={post.id}
                  className="btn btn-warning "
                >
                  EDIT
                </button>
                <button
                  onClick={handleDelete}
                  data-post-id={post.id}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
 
      {editModal ? (
        <Modal modal={editModal} setModal={seteditModal} title={"EDIT TODO"}>
          <form onSubmit={handleEditSubmit}>
            <input
              className="form-control mb-3"
              ref={titleEditRef}
              type="text"
              placeholder="Edit Todo"
            />
        
            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </form>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
