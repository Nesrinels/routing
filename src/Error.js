function Error() {
    let errorStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <div style={errorStyle}>
        <h1>404 Error: Page Not Found</h1>
        <p>We're sorry, the page you requested could not be found.</p>
      </div>
    );
  }
  
  export default Error;