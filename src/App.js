import { useEffect, useState } from "react";
import "../src/App.css";

export default function App() {
  const [postArr, setPostArr] = useState([]);
  const [users, setUsers] = useState([]);
  const getPost = async () => {
    const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await postData.json();
    const resultUsers = await usersData.json();
    setPostArr(result);
    setUsers(resultUsers);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="App">
      <h1>Post Detail</h1>
      <div>
        {postArr.map((eachPost) => {
          const userData = users.find((user) => user.id === eachPost.userId);
          return (
            userData && (
              <div key={eachPost.id} className="details">
                <div>UserId : {eachPost.userId}</div>
                <div>Title : {eachPost.title}</div>
                <div>Name : {userData.name}</div>
                <div>Email : {userData.email}</div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
