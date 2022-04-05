import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { todoList } from "../../services/ToDoServices.js";


export const ToDosList = () => {
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    todoList().then((data) => {
      setToDos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="ToDosList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        toDos.map((toDo) => {
          const { title, id } = toDo;
          return (
            <Link key={id} to={`/${id}`}>
              <div className="country d-flex justify-content-center align-items-center flex-column">
                <h4 className="title mt-3">{title}</h4>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};
