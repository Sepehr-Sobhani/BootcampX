const { Pool } = require("pg");
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const cohName = process.argv[2];
pool
  .query(
    `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers JOIN assistance_requests ON teachers.id = teacher_id
      JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = '${cohName || "JUL02"}'
  ORDER BY teacher;`
  )
  .then((res) => {
    console.log("connected");
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch((err) => {
    console.error("query error", err.stack);
  });
