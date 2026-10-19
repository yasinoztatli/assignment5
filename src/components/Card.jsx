function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "10px 0", borderRadius: "8px" }}>
      {children}
    </div>
  );
}

export default Card;
