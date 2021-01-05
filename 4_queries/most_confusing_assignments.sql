SELECT assignments.id as id, assignments.name, day, chapter, COUNT(assistance_requests) as total_rquests
FROM assignments JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
GROUP BY assignments.id
ORDER BY COUNT(assistance_requests) DESC;