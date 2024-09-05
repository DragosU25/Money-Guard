import React, { useEffect, useRef, useState } from "react";
import Button from "./components/commonComponents/Button";

import "./App.css";
import Modal from "./components/commonComponents/Modal/Modal";
import Input from "./components/commonComponents/Input/Input";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const dialogRef = useRef();
  const contRef = useRef();

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("mousedown", handleClickOutside);

    function handleKeyDown(event) {
      // console.log(event.key);

      if (event.key === "Escape") {
        handleModalClose();
      }
    }

    function handleClickOutside(event) {
      // console.log(event.target);

      if (
        event.target === dialogRef.current &&
        event.target !== contRef.current
      ) {
        handleModalClose();
      }
    }

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleModalClose() {
    setIsModalVisible(false);
  }

  return (
    <div>
      <Button variant="colored">test</Button>
      <Button>test 2</Button>
      <Input isVisible={true} width="100%" variant="center" placeholder="00.00">
        away
      </Input>
      <Input isVisible={false} width="300px" placeholder="Comment">
        close
      </Input>
      <Modal
        dialogRef={dialogRef}
        contRef={contRef}
        isModalVisible={isModalVisible}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}
