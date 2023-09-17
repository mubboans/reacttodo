/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Todolist from "./todolist";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Todo } from "../interface/todo";
const form = () => {
  const [newItem, setnewItem] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);
  function sortTodo(todo) {
    let a = todo.reverse();
    // todo = todo.sort((a, b) => {
    //   console.log(a, b, "data check to sort");

    //   a - b;
    // });
    console.log("sorting todo", a);
    return a;
  }
  function toogleTodoForm(id, completed) {
    console.log(id, completed, "form component");
    let setTodos = [
      ...todo,
      todo.map((x) => {
        console.log(x.id, id, "");

        if (x.id == id) {
          return { ...x, completed };
        }
      })
    ];
    console.log(setTodos, "check value after check");

    setTodo([...setTodos]);
  }
  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("todo"));
    if (storeddata) {
      storeddata.reverse();
      setTodo(storeddata);
    }
    //  storeddata ? JSON.parse(storeddata) : [];
  }, []);
  const setTodotoLocal = (e) => {
    e.preventDefault();
    let setTododata = [];
    if (newItem !== "") {
      console.log(newItem, "newItem check");

      setTododata = [
        ...todo,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: true
        }
      ];
      setTododata.reverse();
      setTodo(setTododata);
      localStorage.setItem("todo", JSON.stringify(setTododata));
      setnewItem("");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={10} className="mx-auto">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Task Name"
                  className="mb-3"
                >
                  <Form.Control
                    value={newItem}
                    onInput={(e) => setnewItem(e.target.value)}
                    type="Name"
                    placeholder="Task Name"
                  />
                </FloatingLabel>
              </Form.Group>
              <Button
                variant="outline-primary"
                size="lg"
                onClick={setTodotoLocal}
              >
                Add Task
              </Button>
            </Form>
            <Todolist
              onTodoChange={toogleTodoForm}
              todo={sortTodo(todo)}
              heading="Todo List"
            />
            {/* {todo.length > 0 && <Todolist heading="Todo List" todo={todo} />} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default form;
