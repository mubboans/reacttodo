import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { Todo } from "../interface/todo";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

interface TodolistProps {
  heading: string;
  todo: Todo[];
  onTodoChange: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}
const todolist = ({
  heading,
  todo,
  onTodoChange,
  deleteTodo,
  editTodo
}: TodolistProps) => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Container>
            {todo.length > 0 && <h1>{heading}</h1>}
            {todo.length > 0 ? (
              <Table responsive>
                <thead>
                  <tr>
                    <th>Completed</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {todo.map((x) => (
                    <tr key={x.id}>
                      <td>
                        <input
                          type="checkbox"
                          onChange={(e) => onTodoChange(x.id, e.target.checked)}
                          checked={x.completed}
                        />
                      </td>
                      <td>
                        <span> {x.title} </span>
                      </td>
                      <td>
                        {x.completed ? (
                          <Badge bg="primary">Completed</Badge>
                        ) : (
                          <Badge bg="warning">Pending</Badge>
                        )}{" "}
                      </td>
                      <td>
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              // todo.map((x) => (
              //   <Row key={x.id}>
              //     <Col
              //       className="mx-auto p-3 justify-content-between"
              //       xs={12}
              //       md={10}
              //     >
              //       <input // prettier-ignore
              //         type="checkbox"
              //         // value={x.completed}
              //         onChange={(e) => onTodoChange(x.id, e.target.checked)}
              //         checked={x.completed}
              //       />
              //       <span> {x.title} </span>
              //       <Button
              //         size="sm"
              //         variant="outline-warning"
              //         className="m-2"
              //         onClick={() => editTodo(x.id)}
              //       >
              //         Edit
              //       </Button>
              //       <Button
              //         size="sm"
              //         variant="outline-danger"
              //         onClick={() => deleteTodo(x.id)}
              //       >
              //         Delete
              //       </Button>
              //     </Col>
              //   </Row>
              // ))
              <h2>No Data</h2>
            )}
          </Container>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default todolist;
