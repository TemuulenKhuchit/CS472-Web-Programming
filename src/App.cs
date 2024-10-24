/* Global styles */
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.container {
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
}

/* Header styles */
header {
  background-color: #e65100;
  color: white;
  padding: 15px;
  text-align: left;
  font-size: 1.5rem;
}

h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
}

/* Form styles */
form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

form label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
}

form input[type="text"],
form input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

form .button-group {
  display: flex;
  gap: 10px;
  justify-content: right;
}

form button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 150px;
}

form .reset {
  background-color: #9e9e9e;
  color: white;
}

form .register {
  background-color: #e65100;
  color: white;
}

form button:hover {
  opacity: 0.8;
}

/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table th,
table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f4f4f4;
  color: #333;
  font-size: 1.2rem;
}

table td {
  font-size: 1rem;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Footer styles */
footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 0.9rem;
  color: #999;
  margin-top: 20px;
  width: 95%;
  margin: 20px auto 0 auto;
}
