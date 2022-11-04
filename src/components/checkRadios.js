import Form from 'react-bootstrap/Form';

function Switch() {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="mode"
      />
    </Form>
  );
}

export default Switch;