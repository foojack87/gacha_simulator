const Modal = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 rounded-xl bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[99]"
      onClick={onClose}
    >
      <div className="w-[500px] flex flex-col">
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
