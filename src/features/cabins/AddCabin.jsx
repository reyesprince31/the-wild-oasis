import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsShowModal((show) => !show)}>
        Add new cabin
      </Button>
      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
