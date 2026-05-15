import React, { useState } from 'react'
import parentsData from './data/parents.json'

export default function App(){
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const parents = parentsData
  const filtered = parents.filter(p=>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.children.some(c=>c.name.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="app">
      <header className="header">
        <h1>Parent Dashboard</h1>
        <input id="search" placeholder="Search parents or children..." value={query} onChange={e=>setQuery(e.target.value)} />
      </header>
      <main className="container">
        <section className="summary card">
          <h3>Parents: {parents.length}</h3>
          <p>Notifications: {parents.reduce((a,p)=>a + (p.notifications?.length||0),0)}</p>
        </section>

        <section className="list">
          {filtered.map(p=> (
            <div key={p.id} className="parent-card">
              <div className="parent-info">
                <div className="parent-name">{p.name}</div>
                <div className="muted">{p.children.map(c=>`${c.name} (Grade ${c.grade})`).join(', ')}</div>
              </div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <button className="btn" onClick={()=>setSelected(p)}>View</button>
              </div>
            </div>
          ))}
        </section>

        <aside className={`details ${selected? '': 'hidden'}`}>
          {selected && (
            <>
              <button className="close" onClick={()=>setSelected(null)}>Close</button>
              <div>
                <h2>{selected.name}</h2>
                <h4>Children</h4>
                <ul>{selected.children.map((c,i)=><li key={i}>{c.name} — Grade {c.grade}</li>)}</ul>
                <h4>Notifications</h4>
                <ul>{(selected.notifications.length? selected.notifications : ['No notifications']).map((n,i)=><li key={i}>{n}</li>)}</ul>
                <h4>Upcoming Events</h4>
                <ul>{(selected.upcomingEvents.length? selected.upcomingEvents : [{title:'None'}]).map((ev,i)=><li key={i}>{ev.title} — {ev.date||''}</li>)}</ul>
              </div>
            </>
          )}
        </aside>
      </main>
    </div>
  )
}
