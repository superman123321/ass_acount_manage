import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

import './App.css';
import {useRef, useCallback, useEffect} from 'react';

function App() {
    // xử lý modal
    const modalRef = useRef();

    // lấy thông tin modal
  

    // open modal
    const handleCreateModal = useCallback(() => {
        modalRef.current.classList.add('display');
    }, []);
   
  

    return (
        <div className="App">
            <Button title="Create New Account" onCreateModal={handleCreateModal} create />
            

            <Modal ref={modalRef}  />
        </div>
    );
}

export default App;
