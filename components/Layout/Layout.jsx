export default function Layout({ children }) {
  return (
    <main
      style={{
        // backgroundColor: "orangered",
        maxWidth: "85%",
        margin: "70px auto",
      }}
    >
      {children}
    </main>
  );
}
