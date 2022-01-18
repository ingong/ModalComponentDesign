import useModals from './useModals';
import { modals } from './Modals';

export default function App() {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.ExampleModal, {
      onSubmit: () => {
        console.log('비지니스 로직 처리...');
      },
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>모달열기</button>
    </div>
  );
}
