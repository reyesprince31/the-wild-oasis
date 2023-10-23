import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  //   const [isShowModal, setIsShowModal] = useState(false);
  return (
    <Modal>
      {/* <Button onClick={() => setIsShowModal((show) => !show)}>
        Add new cabin
      </Button>
      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
        </Modal>
      )} */}

      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="cabin-table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="cabin-table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
