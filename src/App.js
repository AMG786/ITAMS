// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

// const API_URL = "https://8v5v1iwbyb.execute-api.ap-southeast-2.amazonaws.com/todos";

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     const res = await axios.get(API_URL);
//     setTodos(res.data);
//   };

//   const addTodo = async () => {
//     if (!text) return;
//     await axios.post(API_URL, { text });
//     setText("");
//     fetchTodos();
//   };

//   return (
//     <div>
//       <h1>Todo App (AWS)</h1>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={addTodo}>Add</button>

//       {todos.map(t => (
//         <div key={t.todoId}>{t.text}</div>
//       ))}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import axios from "axios";
import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const API_URL = "https://8v5v1iwbyb.execute-api.ap-southeast-2.amazonaws.com/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      // Get authentication token from Cognito
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]); // Set empty array if error
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;

    try {
      // Get authentication token from Cognito
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      await axios.post(API_URL, 
        { text }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setText("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px',
            borderBottom: '2px solid #ddd',
            paddingBottom: '10px'
          }}>
            <h1>📝 Todo App (AWS)</h1>
            <div>
              <span style={{ marginRight: '10px', fontSize: '14px' }}>
                👤 {user?.signInDetails?.loginId}
              </span>
              <button 
                onClick={signOut}
                style={{ 
                  padding: '8px 16px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Sign Out
              </button>
            </div>
          </div>

          <div style={{ margin: '20px 0' }}>
            <input 
              value={text} 
              onChange={e => setText(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addTodo()}
              placeholder="Enter new todo..."
              style={{ 
                padding: '10px', 
                width: '70%',
                fontSize: '16px',
                border: '2px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <button 
              onClick={addTodo}
              style={{ 
                padding: '10px 20px',
                marginLeft: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              ➕ Add
            </button>
          </div>

          <div>
            <h3>Your Todos:</h3>
            {todos.length === 0 ? (
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                No todos yet. Add one above! 🚀
              </p>
            ) : (
              todos.map(t => (
                <div 
                  key={t.todoId} 
                  style={{ 
                    padding: '12px', 
                    margin: '8px 0', 
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  ✓ {t.text}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;