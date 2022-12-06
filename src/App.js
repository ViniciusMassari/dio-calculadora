import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = +firstNumber + +currentNumber;
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };
  const handleSubtractNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const subtract = +firstNumber - +currentNumber;
      setCurrentNumber(String(subtract));
      setOperation("");
    }
  };
  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiplication = +firstNumber * +currentNumber;
      setCurrentNumber(String(multiplication));
      setOperation("");
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divide = +firstNumber / +currentNumber;
      setCurrentNumber(String(divide));
      setFirstNumber("0");
    }
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubtractNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        default:
          break;
      }
    } else {
      const sum = +firstNumber + +currentNumber;
      setCurrentNumber(String(sum));
      setFirstNumber("0");
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="X" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>

        <Row>
          <Button label="⎋" />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="⎋ " />
          <Button label="⎋" />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
