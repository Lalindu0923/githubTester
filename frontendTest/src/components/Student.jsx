import React, { useState } from "react";
import "../styles/Student.css";
import ParentModal from './ParentModal'

// Simple Student component showing three-term marks per subject,
// totals/averages, and two analysis charts (subject totals, term averages).

const sampleStudent = {
  id: 1,
  name: "Kamal Perera",
  grade: "10",
  parentContact: '+94-71-123-4567',
  parentWhatsApp: '+94711234567',
  parentEmail: 'kamal.parent@example.com',
  subjects: [
    { name: "Mathematics", marks: { term1: 88, term2: 82, term3: 90 } },
    { name: "Science", marks: { term1: 76, term2: 80, term3: 79 } },
    { name: "English", marks: { term1: 92, term2: 89, term3: 95 } },
    { name: "History", marks: { term1: 67, term2: 72, term3: 70 } },
    { name: "Computer", marks: { term1: 81, term2: 85, term3: 88 } }
  ]
};

function SimpleBarChart({ data, width = 600, height = 300, labelKey = 'value' }) {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const maxValue = Math.max(100, ...data.map((d) => d[labelKey]));
  const barWidth = chartWidth / data.length - 16;

  return (
    <svg className="student-chart" width={width} height={height}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      {data.map((d, i) => {
        const x = padding + i * (barWidth + 16);
        const barHeight = (d[labelKey] / maxValue) * chartHeight;
        const y = padding + (chartHeight - barHeight);
        return (
          <g key={d.name}>
            <rect x={x} y={y} width={barWidth} height={barHeight} fill="#4f46e5" rx="4">
              <title>{`${d.name}: ${d[labelKey]}`}</title>
            </rect>
            <text x={x + barWidth / 2} y={padding + chartHeight + 16} textAnchor="middle" className="chart-label">
              {d.name}
            </text>
            <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" className="chart-value">
              {d[labelKey]}
            </text>
          </g>
        );
      })}
      <text x={8} y={padding + chartHeight} className="axis-label">0</text>
      <text x={8} y={padding + chartHeight / 2 + 4} className="axis-label">{Math.round(maxValue / 2)}</text>
      <text x={8} y={padding} className="axis-label">{maxValue}</text>
    </svg>
  );
}

export default function Student({ student = sampleStudent }) {
  const [showParentModal, setShowParentModal] = useState(false)
  // compute per-subject totals and averages
  const renderStars = (rating = 0) => {
    const max = 5
    const stars = []
    for (let i = 1; i <= max; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          {i <= rating ? '★' : '☆'}
        </span>
      )
    }
    return <div className="student-review">{stars}</div>
  }
  const subjectsWithTotals = student.subjects.map((s) => {
    const t1 = Number(s.marks.term1 || 0);
    const t2 = Number(s.marks.term2 || 0);
    const t3 = Number(s.marks.term3 || 0);
    const total = t1 + t2 + t3;
    const average = Math.round((total / 3) * 10) / 10;
    return { name: s.name, term1: t1, term2: t2, term3: t3, total, average };
  });

  const overallTotal = subjectsWithTotals.reduce((s, x) => s + x.total, 0);
  const overallAverage = Math.round((overallTotal / (subjectsWithTotals.length * 3)) * 10) / 10;

  // term-wise averages across subjects
  const termTotals = subjectsWithTotals.reduce(
    (acc, s) => {
      acc.term1 += s.term1;
      acc.term2 += s.term2;
      acc.term3 += s.term3;
      return acc;
    },
    { term1: 0, term2: 0, term3: 0 }
  );

  const termAverages = [
    { name: 'Term 1', value: Math.round((termTotals.term1 / subjectsWithTotals.length) * 10) / 10 },
    { name: 'Term 2', value: Math.round((termTotals.term2 / subjectsWithTotals.length) * 10) / 10 },
    { name: 'Term 3', value: Math.round((termTotals.term3 / subjectsWithTotals.length) * 10) / 10 }
  ];

  const subjectTotalsForChart = subjectsWithTotals.map((s) => ({ name: s.name, value: s.total }));

  return (
    <div className="student-card">
      <header className="student-header">
        <h2 className="student-name">{student.name}</h2>
        <div className="student-meta">Grade: {student.grade}</div>
        <div className="student-meta">
          <button className="msg-btn" onClick={() => setShowParentModal(true)}>
            Show Parent
          </button>
        </div>
        {showParentModal && (
          <ParentModal student={student} onClose={() => setShowParentModal(false)} />
        )}
        {renderStars(student.rating)}
      </header>

      <section className="student-details">
        <table className="marks-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>1st Term</th>
              <th>2nd Term</th>
              <th>3rd Term</th>
              <th>Total</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {subjectsWithTotals.map((s) => (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.term1}</td>
                <td>{s.term2}</td>
                <td>{s.term3}</td>
                <td>{s.total}</td>
                <td>{s.average}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Overall</td>
              <td>{overallTotal}</td>
              <td>{overallAverage}</td>
            </tr>
          </tfoot>
        </table>

        <div className="chart-wrap">
          <h3>Subject Totals (Year)</h3>
          <SimpleBarChart data={subjectTotalsForChart} width={720} height={320} labelKey="value" />
        </div>
      </section>

      <section className="student-analysis">
        <h3>Term Averages Analysis</h3>
        <p className="analysis-note">This chart shows average marks per term across all subjects.</p>
        <SimpleBarChart data={termAverages} width={560} height={220} labelKey="value" />
      </section>
    </div>
  );
}
