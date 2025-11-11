fetch('student-por.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1); // Skip header
        const students = rows.map(row => {
            const cols = row.split(',');
            return {
                sex: cols[1].replace(/"/g, ''),
                studytime: parseInt(cols[12]),
                absences: parseInt(cols[29]),
                G1: parseInt(cols[30]),
                G2: parseInt(cols[31]),
                G3: parseInt(cols[32])
            };
        }).filter(s => !isNaN(s.G3)); // Filter out invalid rows

        // Average G3 by sex
        const sexGroups = students.reduce((acc, s) => {
            acc[s.sex] = acc[s.sex] || [];
            acc[s.sex].push(s.G3);
            return acc;
        }, {});
        const avgG3BySex = Object.keys(sexGroups).map(sex => ({
            sex,
            avg: sexGroups[sex].reduce((a, b) => a + b, 0) / sexGroups[sex].length
        }));

        new Chart(document.getElementById('sexChart'), {
            type: 'bar',
            data: {
                labels: avgG3BySex.map(d => d.sex),
                datasets: [{
                    label: 'Average G3',
                    data: avgG3BySex.map(d => d.avg),
                    backgroundColor: ['#FF6384', '#36A2EB']
                }]
            }
        });

        // Study time vs G3 scatter
        new Chart(document.getElementById('studyChart'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Students',
                    data: students.map(s => ({ x: s.studytime, y: s.G3 })),
                    backgroundColor: '#FF6384'
                }]
            },
            options: {
                scales: {
                    x: { title: { display: true, text: 'Study Time' } },
                    y: { title: { display: true, text: 'Final Grade (G3)' } }
                }
            }
        });

        // Absences pie chart (categorized)
        const absenceCategories = {
            '0-2': students.filter(s => s.absences <= 2).length,
            '3-5': students.filter(s => s.absences > 2 && s.absences <= 5).length,
            '6-10': students.filter(s => s.absences > 5 && s.absences <= 10).length,
            '11+': students.filter(s => s.absences > 10).length
        };

        new Chart(document.getElementById('absenceChart'), {
            type: 'pie',
            data: {
                labels: Object.keys(absenceCategories),
                datasets: [{
                    data: Object.values(absenceCategories),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            }
        });

        // Grade progression line chart
        const avgG1 = students.reduce((a, b) => a + b.G1, 0) / students.length;
        const avgG2 = students.reduce((a, b) => a + b.G2, 0) / students.length;
        const avgG3 = students.reduce((a, b) => a + b.G3, 0) / students.length;

        new Chart(document.getElementById('progressionChart'), {
            type: 'line',
            data: {
                labels: ['G1', 'G2', 'G3'],
                datasets: [{
                    label: 'Average Grade',
                    data: [avgG1, avgG2, avgG3],
                    borderColor: '#36A2EB',
                    fill: false
                }]
            }
        });
    });
