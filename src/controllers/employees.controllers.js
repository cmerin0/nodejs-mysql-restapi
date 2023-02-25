import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee;");
    res.json(rows);
  } catch (e) {
    return res.status(500).json({
      message: "Something Went Wrong!",
    });
  }
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?;", id);
    res.json(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "Something Went Wrong!",
    });
  }
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?);",
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (e) {
    return res.status(500).json({
      message: "Something Went Wrong!",
    });
  }
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?;",
      [name, salary, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee Not Found!" });
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?;", id);
    res.json(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "Something Went Wrong!",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM employee WHERE id = ?;",
      req.params.id
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "No Employee Found!",
      });
    }
    const [rows] = await pool.query("SELECT * FROM employee;");
    res.json(rows);
  } catch (e) {
    return res.status(500).json({
      message: "Something Went Wrong!",
    });
  }
};
