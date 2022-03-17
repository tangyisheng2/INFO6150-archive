function Reorder({ onReorder }) {
  return (
    <button
      // className={`reorder ${inventory ? "hidden" : ""}`}
      onClick={() => onReorder(5)}
    >
      Reorder
    </button>
  );
}

export default Reorder;
