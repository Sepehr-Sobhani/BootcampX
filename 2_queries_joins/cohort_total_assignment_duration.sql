SELECT SUM(duration) as total_duration
FROM assignment_submissions JOIN students ON students.id = student_id
WHERE cohort_id  = (SELECT id
FROM cohorts
WHERE name = 'FEB12');