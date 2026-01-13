// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Authenticator } from '@aws-amplify/ui-react';
// import { fetchAuthSession } from 'aws-amplify/auth';
// import '@aws-amplify/ui-react/styles.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [category, setCategory] = useState("Personal");
//   const [priority, setPriority] = useState("Medium");
//   const [dueDate, setDueDate] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("All");
//   const [filterPriority, setFilterPriority] = useState("All");
//   const [showCompleted, setShowCompleted] = useState(true);

// const API_URL = "https://8v5v1iwbyb.execute-api.ap-southeast-2.amazonaws.com/todos";

//   const categories = ["Personal", "Work", "Shopping", "Health", "Finance", "Other"];
//   const priorities = ["High", "Medium", "Low"];

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const session = await fetchAuthSession();
//       const token = session.tokens?.idToken?.toString();

//       const res = await axios.get(API_URL, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setTodos(res.data.sort((a, b) => {
//         const priorityOrder = { High: 0, Medium: 1, Low: 2 };
//         return priorityOrder[a.priority] - priorityOrder[b.priority];
//       }));
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//       setTodos([]);
//     }
//   };

//   const addTodo = async () => {
//     if (!text.trim()) return;

//     try {
//       const session = await fetchAuthSession();
//       const token = session.tokens?.idToken?.toString();

//       await axios.post(API_URL, 
//         { 
//           text, 
//           category, 
//           priority, 
//           dueDate: dueDate || null 
//         }, 
//         { headers: { 
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }}
//       );

//       setText("");
//       setDueDate("");
//       fetchTodos();
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   const toggleComplete = async (todo) => {
//     try {
//       const session = await fetchAuthSession();
//       const token = session.tokens?.idToken?.toString();

//       await axios.put(API_URL,
//         {
//           todoId: todo.todoId,
//           completed: !todo.completed
//         },
//         { headers: { Authorization: `Bearer ${token}` }}
//       );

//       fetchTodos();
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   // const deleteTodo = async (todoId) => {
//   //   try {
//   //     const session = await fetchAuthSession();
//   //     const token = session.tokens?.idToken?.toString();

//   //     await axios.delete(`${API_URL}?todoId=${todoId}`, {
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     });

//   //     fetchTodos();
//   //   } catch (error) {
//   //     console.error("Error deleting todo:", error);
//   //   }
//   // };

//   const deleteTodo = async (todoId) => {
//   if (!window.confirm('Are you sure you want to delete this task?')) return;
  
//   try {
//     const session = await fetchAuthSession();
//     const token = session.tokens?.idToken?.toString();

//     // Encode the todoId properly
//     await axios.delete(`${API_URL}?todoId=${encodeURIComponent(todoId)}`, {
//       headers: { 
//         Authorization: `Bearer ${token}`
//       }
//     });

//     fetchTodos();
//   } catch (error) {
//     console.error("Error deleting todo:", error);
//     alert("Failed to delete task. Please try again.");
//   }
// };

//   const filteredTodos = todos.filter(todo => {
//     const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory === "All" || todo.category === filterCategory;
//     const matchesPriority = filterPriority === "All" || todo.priority === filterPriority;
//     const matchesCompleted = showCompleted || !todo.completed;
    
//     return matchesSearch && matchesCategory && matchesPriority && matchesCompleted;
//   });

//   const getPriorityColor = (priority) => {
//     switch(priority) {
//       case "High": return "#ff4444";
//       case "Medium": return "#ff9800";
//       case "Low": return "#4CAF50";
//       default: return "#999";
//     }
//   };

//   const getCategoryIcon = (category) => {
//     const icons = {
//       Personal: "👤",
//       Work: "💼",
//       Shopping: "🛒",
//       Health: "🏥",
//       Finance: "💰",
//       Other: "📌"
//     };
//     return icons[category] || "📌";
//   };

//   const isOverdue = (dueDate) => {
//     if (!dueDate) return false;
//     return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
//   };

//   const stats = {
//     total: todos.length,
//     completed: todos.filter(t => t.completed).length,
//     pending: todos.filter(t => !t.completed).length,
//     overdue: todos.filter(t => !t.completed && isOverdue(t.dueDate)).length
//   };

//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial' }}>
//           {/* Header */}
//           <div style={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             marginBottom: '20px',
//             padding: '15px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             borderRadius: '10px',
//             color: 'white'
//           }}>
//             <h1 style={{ margin: 0 }}>📋 ITAMS</h1>
//             <div>
//               <span style={{ marginRight: '15px' }}>👤 {user?.signInDetails?.loginId?.split('@')[0]}</span>
//               <button 
//                 onClick={signOut}
//                 style={{ 
//                   padding: '8px 16px',
//                   backgroundColor: 'rgba(255,255,255,0.2)',
//                   color: 'white',
//                   border: '1px solid white',
//                   borderRadius: '5px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>

//           {/* Statistics Dashboard */}
//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(4, 1fr)', 
//             gap: '15px',
//             marginBottom: '25px'
//           }}>
//             {[
//               { label: 'Total Tasks', value: stats.total, color: '#667eea', icon: '📊' },
//               { label: 'Completed', value: stats.completed, color: '#4CAF50', icon: '✅' },
//               { label: 'Pending', value: stats.pending, color: '#ff9800', icon: '⏳' },
//               { label: 'Overdue', value: stats.overdue, color: '#ff4444', icon: '⚠️' }
//             ].map((stat, idx) => (
//               <div key={idx} style={{
//                 padding: '20px',
//                 background: 'white',
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                 textAlign: 'center'
//               }}>
//                 <div style={{ fontSize: '24px', marginBottom: '5px' }}>{stat.icon}</div>
//                 <div style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color }}>
//                   {stat.value}
//                 </div>
//                 <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Add Todo Form */}
//           <div style={{ 
//             background: 'white', 
//             padding: '25px', 
//             borderRadius: '10px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             marginBottom: '25px'
//           }}>
//             <h3 style={{ marginTop: 0 }}>➕ Add New Task</h3>
            
//             <input 
//               value={text} 
//               onChange={e => setText(e.target.value)}
//               onKeyPress={e => e.key === 'Enter' && addTodo()}
//               placeholder="What needs to be done?"
//               style={{ 
//                 padding: '12px',
//                 width: '100%',
//                 fontSize: '16px',
//                 border: '2px solid #ddd',
//                 borderRadius: '5px',
//                 marginBottom: '15px',
//                 boxSizing: 'border-box'
//               }}
//             />

//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
//               <select 
//                 value={category} 
//                 onChange={e => setCategory(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{getCategoryIcon(cat)} {cat}</option>
//                 ))}
//               </select>

//               <select 
//                 value={priority} 
//                 onChange={e => setPriority(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               >
//                 {priorities.map(pri => (
//                   <option key={pri} value={pri}>{pri} Priority</option>
//                 ))}
//               </select>

//               <input 
//                 type="date"
//                 value={dueDate}
//                 onChange={e => setDueDate(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               />
//             </div>

//             <button 
//               onClick={addTodo}
//               style={{ 
//                 padding: '12px 30px',
//                 width: '100%',
//                 backgroundColor: '#667eea',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 fontSize: '16px',
//                 cursor: 'pointer',
//                 fontWeight: 'bold'
//               }}
//             >
//               ➕ Add Task
//             </button>
//           </div>

//           {/* Filters */}
//           <div style={{ 
//             background: 'white', 
//             padding: '20px', 
//             borderRadius: '10px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             marginBottom: '20px'
//           }}>
//             <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '10px', alignItems: 'center' }}>
//               <input 
//                 type="text"
//                 placeholder="🔍 Search tasks..."
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               />

//               <select 
//                 value={filterCategory}
//                 onChange={e => setFilterCategory(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               >
//                 <option value="All">All Categories</option>
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>

//               <select 
//                 value={filterPriority}
//                 onChange={e => setFilterPriority(e.target.value)}
//                 style={{ padding: '10px', fontSize: '14px', borderRadius: '5px', border: '2px solid #ddd' }}
//               >
//                 <option value="All">All Priorities</option>
//                 {priorities.map(pri => (
//                   <option key={pri} value={pri}>{pri}</option>
//                 ))}
//               </select>

//               <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                 <input 
//                   type="checkbox"
//                   checked={showCompleted}
//                   onChange={e => setShowCompleted(e.target.checked)}
//                   style={{ marginRight: '5px' }}
//                 />
//                 Show Completed
//               </label>
//             </div>
//           </div>

//           {/* Todo List */}
//           <div>
//             {filteredTodos.length === 0 ? (
//               <div style={{ 
//                 textAlign: 'center', 
//                 padding: '60px', 
//                 background: 'white',
//                 borderRadius: '10px',
//                 color: '#999'
//               }}>
//                 <div style={{ fontSize: '48px', marginBottom: '10px' }}>📭</div>
//                 <p>No tasks found. Add one above!</p>
//               </div>
//             ) : (
//               filteredTodos.map(todo => (
//                 <div 
//                   key={todo.todoId} 
//                   style={{ 
//                     padding: '20px',
//                     margin: '10px 0',
//                     background: 'white',
//                     borderRadius: '10px',
//                     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                     borderLeft: `5px solid ${getPriorityColor(todo.priority)}`,
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     opacity: todo.completed ? 0.6 : 1,
//                     transition: 'all 0.3s'
//                   }}
//                 >
//                   <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '15px' }}>
//                     <input 
//                       type="checkbox"
//                       checked={todo.completed}
//                       onChange={() => toggleComplete(todo)}
//                       style={{ width: '20px', height: '20px', cursor: 'pointer' }}
//                     />
                    
//                     <div style={{ flex: 1 }}>
//                       <div style={{ 
//                         fontSize: '16px', 
//                         textDecoration: todo.completed ? 'line-through' : 'none',
//                         marginBottom: '8px',
//                         fontWeight: '500'
//                       }}>
//                         {todo.text}
//                       </div>
                      
//                       <div style={{ display: 'flex', gap: '15px', fontSize: '13px', color: '#666' }}>
//                         <span>{getCategoryIcon(todo.category)} {todo.category}</span>
//                         <span style={{ color: getPriorityColor(todo.priority) }}>
//                           ● {todo.priority}
//                         </span>
//                         {todo.dueDate && (
//                           <span style={{ color: isOverdue(todo.dueDate) ? '#ff4444' : '#666' }}>
//                             📅 {new Date(todo.dueDate).toLocaleDateString()}
//                             {isOverdue(todo.dueDate) && ' (Overdue!)'}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <button 
//                     onClick={() => deleteTodo(todo.todoId)}
//                     style={{ 
//                       padding: '8px 15px',
//                       backgroundColor: '#ff4444',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '5px',
//                       cursor: 'pointer',
//                       fontSize: '14px'
//                     }}
//                   >
//                     🗑️ Delete
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </Authenticator>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [showCompleted, setShowCompleted] = useState(true);

  // New state for videos and blog posts
  const [videos, setVideos] = useState([
    { id: 1, title: "AWS Lambda Tutorial", url: "https://www.youtube.com/embed/eOBq__h4OJ4", views: "1.2M", duration: "15:30" },
    { id: 2, title: "DynamoDB Explained", url: "https://www.youtube.com/embed/2k2GINpO308", views: "856K", duration: "12:45" },
    { id: 3, title: "React Best Practices", url: "https://www.youtube.com/embed/Dorf8i6lCuk", views: "2.1M", duration: "20:15" }
  ]);

  const [blogPosts, setBlogPosts] = useState([
    { 
      id: 1, 
      title: "Building Serverless Apps with AWS", 
      excerpt: "Learn how to build scalable serverless applications using AWS Lambda, API Gateway, and DynamoDB...",
      date: "2026-01-10",
      readTime: "8 min read",
      category: "AWS"
    },
    { 
      id: 2, 
      title: "React Hooks Deep Dive", 
      excerpt: "Understanding useState, useEffect, and custom hooks with practical examples...",
      date: "2026-01-08",
      readTime: "12 min read",
      category: "React"
    },
    { 
      id: 3, 
      title: "DynamoDB Best Practices", 
      excerpt: "Optimizing your DynamoDB tables for performance and cost efficiency...",
      date: "2026-01-05",
      readTime: "10 min read",
      category: "Database"
    }
  ]);

  const API_URL = "https://8v5v1iwbyb.execute-api.ap-southeast-2.amazonaws.com/todos";

  const categories = ["Personal", "Work", "Shopping", "Health", "Finance", "Other"];
  const priorities = ["High", "Medium", "Low"];

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTodos(res.data.sort((a, b) => {
        const priorityOrder = { High: 0, Medium: 1, Low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }));
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]);
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;

    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      await axios.post(API_URL, 
        { text, category, priority, dueDate: dueDate || null }, 
        { headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }}
      );

      setText("");
      setDueDate("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleComplete = async (todo) => {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      await axios.put(API_URL,
        { todoId: todo.todoId, completed: !todo.completed },
        { headers: { Authorization: `Bearer ${token}` }}
      );

      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      await axios.delete(`${API_URL}?todoId=${encodeURIComponent(todoId)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || todo.category === filterCategory;
    const matchesPriority = filterPriority === "All" || todo.priority === filterPriority;
    const matchesCompleted = showCompleted || !todo.completed;
    
    return matchesSearch && matchesCategory && matchesPriority && matchesCompleted;
  });

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "High": return "#ff4444";
      case "Medium": return "#ff9800";
      case "Low": return "#4CAF50";
      default: return "#999";
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Personal: "👤", Work: "💼", Shopping: "🛒",
      Health: "🏥", Finance: "💰", Other: "📌"
    };
    return icons[category] || "📌";
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
  };

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length,
    overdue: todos.filter(t => !t.completed && isOverdue(t.dueDate)).length,
    videos: videos.length,
    blogPosts: blogPosts.length
  };

  // Tab Navigation Component
  const TabButton = ({ tab, icon, label, count }) => (
    <button
      onClick={() => setActiveTab(tab)}
      style={{
        padding: '12px 24px',
        background: activeTab === tab ? '#667eea' : 'transparent',
        color: activeTab === tab ? 'white' : '#666',
        border: 'none',
        borderBottom: activeTab === tab ? '3px solid #667eea' : '3px solid transparent',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: activeTab === tab ? 'bold' : 'normal',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <span style={{ fontSize: '18px' }}>{icon}</span>
      {label}
      {count !== undefined && (
        <span style={{
          background: activeTab === tab ? 'rgba(255,255,255,0.3)' : '#e0e0e0',
          padding: '2px 8px',
          borderRadius: '10px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div style={{ minHeight: '100vh', background: '#f5f7fa', fontFamily: 'Arial' }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '28px' }}>📋 ITAMS</h1>
              <p style={{ margin: '5px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
                Your productivity hub
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Welcome back,</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  {user?.signInDetails?.loginId?.split('@')[0]}
                </div>
              </div>
              <button 
                onClick={signOut}
                style={{
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            background: 'white',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            gap: '5px',
            padding: '0 40px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <TabButton tab="dashboard" icon="📊" label="Dashboard" />
            <TabButton tab="tasks" icon="✅" label="Tasks" count={stats.pending} />
            <TabButton tab="videos" icon="🎥" label="Videos" count={stats.videos} />
            <TabButton tab="blog" icon="📝" label="Blog Posts" count={stats.blogPosts} />
            <TabButton tab="projects" icon="📁" label="Projects" />
          </div>

          {/* Main Content */}
          <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
            
            {/* DASHBOARD TAB */}
            {activeTab === "dashboard" && (
              <div>
                <h2 style={{ marginBottom: '30px', color: '#333' }}>📊 Overview</h2>
                
                {/* Statistics Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginBottom: '40px'
                }}>
                  {[
                    { label: 'Total Tasks', value: stats.total, color: '#667eea', icon: '📋' },
                    { label: 'Completed', value: stats.completed, color: '#4CAF50', icon: '✅' },
                    { label: 'Pending', value: stats.pending, color: '#ff9800', icon: '⏳' },
                    { label: 'Overdue', value: stats.overdue, color: '#ff4444', icon: '⚠️' },
                    { label: 'Videos Saved', value: stats.videos, color: '#FF0000', icon: '🎥' },
                    { label: 'Blog Posts', value: stats.blogPosts, color: '#2196F3', icon: '📝' }
                  ].map((stat, idx) => (
                    <div key={idx} style={{
                      padding: '25px',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ fontSize: '36px', marginBottom: '10px' }}>{stat.icon}</div>
                      <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color, marginBottom: '5px' }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '14px', color: '#666' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <h3 style={{ marginTop: 0 }}>🔔 Recent Activity</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {todos.slice(0, 5).map(todo => (
                      <div key={todo.todoId} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px',
                        background: '#f9f9f9',
                        borderRadius: '8px',
                        borderLeft: `4px solid ${getPriorityColor(todo.priority)}`
                      }}>
                        <span style={{ marginRight: '15px', fontSize: '20px' }}>
                          {todo.completed ? '✅' : '⏳'}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            fontWeight: '500',
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#999' : '#333'
                          }}>
                            {todo.text}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                            {getCategoryIcon(todo.category)} {todo.category} • {todo.priority} Priority
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TASKS TAB */}
            {activeTab === "tasks" && (
              <div>
                {/* Add Todo Form */}
                <div style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  marginBottom: '25px'
                }}>
                  <h3 style={{ marginTop: 0 }}>➕ Add New Task</h3>
                  
                  <input 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && addTodo()}
                    placeholder="What needs to be done?"
                    style={{
                      padding: '12px',
                      width: '100%',
                      fontSize: '16px',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      marginBottom: '15px',
                      boxSizing: 'border-box'
                    }}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                    <select 
                      value={category} 
                      onChange={e => setCategory(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{getCategoryIcon(cat)} {cat}</option>
                      ))}
                    </select>

                    <select 
                      value={priority} 
                      onChange={e => setPriority(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    >
                      {priorities.map(pri => (
                        <option key={pri} value={pri}>{pri} Priority</option>
                      ))}
                    </select>

                    <input 
                      type="date"
                      value={dueDate}
                      onChange={e => setDueDate(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    />
                  </div>

                  <button 
                    onClick={addTodo}
                    style={{
                      padding: '12px 30px',
                      width: '100%',
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    ➕ Add Task
                  </button>
                </div>

                {/* Filters */}
                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '10px', alignItems: 'center' }}>
                    <input 
                      type="text"
                      placeholder="🔍 Search tasks..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    />

                    <select 
                      value={filterCategory}
                      onChange={e => setFilterCategory(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    >
                      <option value="All">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>

                    <select 
                      value={filterPriority}
                      onChange={e => setFilterPriority(e.target.value)}
                      style={{ padding: '10px', fontSize: '14px', borderRadius: '8px', border: '2px solid #ddd' }}
                    >
                      <option value="All">All Priorities</option>
                      {priorities.map(pri => (
                        <option key={pri} value={pri}>{pri}</option>
                      ))}
                    </select>

                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      <input 
                        type="checkbox"
                        checked={showCompleted}
                        onChange={e => setShowCompleted(e.target.checked)}
                        style={{ marginRight: '5px' }}
                      />
                      Show Completed
                    </label>
                  </div>
                </div>

                {/* Todo List */}
                <div>
                  {filteredTodos.length === 0 ? (
                    <div style={{
                      textAlign: 'center',
                      padding: '60px',
                      background: 'white',
                      borderRadius: '12px',
                      color: '#999'
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '10px' }}>📭</div>
                      <p>No tasks found. Add one above!</p>
                    </div>
                  ) : (
                    filteredTodos.map(todo => (
                      <div 
                        key={todo.todoId} 
                        style={{
                          padding: '20px',
                          margin: '10px 0',
                          background: 'white',
                          borderRadius: '12px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                          borderLeft: `5px solid ${getPriorityColor(todo.priority)}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          opacity: todo.completed ? 0.6 : 1
                        }}
                      >
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo)}
                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                          />
                          
                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontSize: '16px',
                              textDecoration: todo.completed ? 'line-through' : 'none',
                              marginBottom: '8px',
                              fontWeight: '500'
                            }}>
                              {todo.text}
                            </div>
                            
                            <div style={{ display: 'flex', gap: '15px', fontSize: '13px', color: '#666' }}>
                              <span>{getCategoryIcon(todo.category)} {todo.category}</span>
                              <span style={{ color: getPriorityColor(todo.priority) }}>
                                ● {todo.priority}
                              </span>
                              {todo.dueDate && (
                                <span style={{ color: isOverdue(todo.dueDate) ? '#ff4444' : '#666' }}>
                                  📅 {new Date(todo.dueDate).toLocaleDateString()}
                                  {isOverdue(todo.dueDate) && ' (Overdue!)'}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <button 
                          onClick={() => deleteTodo(todo.todoId)}
                          style={{
                            padding: '8px 15px',
                            background: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* VIDEOS TAB */}
            {activeTab === "videos" && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h2 style={{ margin: 0 }}>🎥 My Videos</h2>
                  <button style={{
                    padding: '12px 24px',
                    background: '#FF0000',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}>
                    ➕ Add Video
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
                  {videos.map(video => (
                    <div key={video.id} style={{
                      background: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#000' }}>
                        <iframe
                          src={video.url}
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div style={{ padding: '15px' }}>
                        <h4 style={{ margin: '0 0 10px 0' }}>{video.title}</h4>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '13px', color: '#666' }}>
                          <span>👁️ {video.views} views</span>
                          <span>⏱️ {video.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BLOG POSTS TAB */}
            {activeTab === "blog" && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h2 style={{ margin: 0 }}>📝 Blog Posts</h2>
                  <button style={{
                    padding: '12px 24px',
                    background: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}>
                    ✍️ Write Post
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {blogPosts.map(post => (
                    <div key={post.id} style={{
                      background: 'white',
                      padding: '25px',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'transform 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <span style={{
                          background: '#e3f2fd',
                          color: '#2196F3',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {post.category}
                        </span>
                        <span style={{ color: '#666', fontSize: '13px' }}>
                          📅 {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span style={{ color: '#666', fontSize: '13px' }}>
                          ⏱️ {post.readTime}
                        </span>
                      </div>
                      <h3 style={{ margin: '10px 0', color: '#333' }}>{post.title}</h3>
                      <p style={{ color: '#666', lineHeight: '1.6', margin: '10px 0 0 0' }}>
                        {post.excerpt}
                      </p>
                      <button style={{
                        marginTop: '15px',
                        padding: '8px 20px',
                        background: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}>
                        Read More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'white',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🚧</div>
                <h2>Projects Section Coming Soon</h2>
                <p style={{ color: '#666', maxWidth: '500px', margin: '10px auto' }}>
                  This section will showcase your portfolio projects with descriptions, tech stack, and live demos.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;