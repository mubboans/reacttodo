import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Todo } from "../interface/todo";

interface TodolistProps {
  heading: string;
  todo: Todo[];
  onTodoChange: (id: string, checked: boolean) => void;
}
const todolist = ({ heading, todo, onTodoChange }: TodolistProps) => {
  // const refereshChild = () => {
  //   const tododata = localStorage.getItem("todo");
  //   // console.log(tododata, "todo");
  //   settodolist(JSON.parse(tododata));
  // }
  function editTodo(id) {
    console.log(id, "check data on edit btn");
  }
  function deleteTodo(id) {
    console.log(id, "check data on delete btn");
  }
  // function onTodoChange (id, check) {
  //   console.log(id, check, "change occurs");

  //   // toggleTodo(id, check);
  // }

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Container>
            {todo.length > 0 && <h1>{heading}</h1>}
            {todo.length > 0 ? (
              todo.map((x) => (
                <Row key={x.id}>
                  <Col
                    className="mx-auto p-3 justify-content-between"
                    xs={12}
                    md={10}
                  >
                    <input // prettier-ignore
                      type="checkbox"
                      // value={x.completed}
                      onChange={(e) => onTodoChange(x.id, e.target.checked)}
                      checked={x.completed}
                    />
                    <span> {x.title} </span>
                    <Button
                      size="sm"
                      variant="outline-warning"
                      className="m-2"
                      onClick={() => editTodo(x.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => deleteTodo(x.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                  {/* <Col xs={5} md={3} className="mx-auto"></Col> */}
                  {/* <Col xs={5} md={3} className="mx-auto">
                    <Button
                      size="sm"
                      variant="outline-warning"
                      className="m-2"
                      onClick={() => editTodo(x.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => deleteTodo(x.id)}
                    >
                      Delete
                    </Button>
                  </Col> */}
                </Row>
              ))
            ) : (
              <h2>No Data</h2>
            )}
          </Container>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default todolist;
