import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Environment check:', {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'present' : 'missing',
  openaiKey: import.meta.env.VITE_OPENAI_API_KEY ? 'present' : 'missing'
});

createRoot(document.getElementById("root")!).render(<App />);