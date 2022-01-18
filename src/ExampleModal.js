import ReactModal from 'react-modal';

const ExampleModal = ({ onSubmit, onClose }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };
  const handleClickCancel = () => {
    onClose();
  };

  return (
    <ReactModal isOpen>
      <div>모달 입니다.</div>
      <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default ExampleModal;
