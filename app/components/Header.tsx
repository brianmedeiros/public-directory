export default function Header() {
    return (
      <header style={styles.header}>
        <h1>Contact Directory</h1>
        <p>Browse and filter contact information for key individuals.</p>
      </header>
    );
  }

  const styles = {
    header: {
      TextAlign: "center",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ddd",
    },
  };
