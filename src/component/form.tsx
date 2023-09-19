/* eslint-disable prefer-const */
import { useState, useEffect, ChangeEvent } from "react";
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
  const [editdata, seteditdata] = useState([]);
  function deleteTodo(id) {
    let deletedTodo = todo.filter((x) => x.id !== id);
    setTodo(deletedTodo);
    setLocalValue(deletedTodo);
  }
  function toogleTodoForm(id, completed) {
    let setTodos = todo.map((x) => {
      console.log(x.id, id, "");

      if (x.id == id) {
        return { ...x, completed };
      } else {
        return { ...x };
      }
    });
    setTodo(setTodos);
    setLocalValue(setTodos);
  }
  function editTodo(id) {
    console.log(id);
    let editdata = todo.filter((x) => x.id == id)[0];
    console.log(editdata, "edit title check");
    setnewItem(editdata.title);
    seteditdata([editdata]);
  }
  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("todo"));
    if (storeddata) {
      // storeddata.reverse();
      setTodo(storeddata);
    }
    //  storeddata ? JSON.parse(storeddata) : [];
  }, []);
  const setTodotoLocal = (e) => {
    e.preventDefault();
    let setTododata = [];
    console.log(editdata.length, "editdata.length");

    if (newItem !== "" && editdata.length <= 0) {
      console.log(newItem, "newItem check");

      setTododata = [
        ...todo,
        {
          id: crypto.randomUUID(),
          title: newItem,
          status: 0,
          completed: false
        }
      ];
      setTodo(setTododata);
      setLocalValue(setTododata);
      setnewItem("");
    }
    if (editdata.length > 0) {
      console.log(editdata[0].id, "id check for edit data");

      let setTodos = todo.map((x) => {
        // console.log(x.id, id, "");

        if (x.id == editdata[0].id) {
          return { ...x, title: newItem };
        } else {
          return { ...x };
        }
      });
      console.log(setTodos, "values after check ");
      setLocalValue(setTodos);
      setTodo(setTodos);
      seteditdata([]);
      setnewItem("");
    }
  };
  function setLocalValue(value: Todo[]) {
    localStorage.setItem("todo", JSON.stringify(value));
  }
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
                    onInput={(e: ChangeEvent<HTMLInputElement>) =>
                      setnewItem(e.target.value)
                    }
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
                {editdata.length > 0 ? "Save" : "Add task"}
                {/* Add Task */}
              </Button>
            </Form>
            <Todolist
              onTodoChange={toogleTodoForm}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              todo={todo}
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
