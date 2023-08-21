import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

function Formulario() {
  return (
    <div>
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text>Nome Completo</InputGroup.Text>
          <Form.Control aria-label="First name" />
          <Form.Control aria-label="Last name" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Telefone
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <FloatingLabel controlId="floatingTextarea2" label="Comentário">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <br />
        <Button variant="success">Enviar</Button>
      </div>
    </div>
  );
}

export default Formulario;
