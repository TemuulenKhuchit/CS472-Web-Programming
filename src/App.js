import "./App.css";

function App() {
  return (
    <div>
      <header>Student Registration</header>
      <div className="container">
        <h2>Create a student</h2>
        <form action="">
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" placeholder="Enter student ID" />
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter student name" />
          <br />
          <label htmlFor="program">Program:</label>
          <input type="text" id="program" name="program" placeholder="Enter student program" />
          <br />
          <div className="button-group">
            <button type="reset" className="reset">
              Reset
            </button>
            <button type="submit" className="register">
              Register
            </button>
          </div>
        </form>

        <h2>All students</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123456</td>
              <td>Temuulen</td>
              <td>ComPro</td>
            </tr>
            <tr>
              <td>456164</td>
              <td>John</td>
              <td>ComPro</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer>
        <div>:::CS472-WAP</div>
        <div>&copy; October 2024</div>
      </footer>
    </div>
  );
}

export default App;
