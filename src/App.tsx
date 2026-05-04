import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code2, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  Info, 
  ChevronRight, 
  ChevronLeft, 
  Trophy,
  RotateCcw,
  LayoutDashboard,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { aimlQuestions, Question } from './questions';

type AppMode = 'landing' | 'quiz' | 'coding' | 'results';

export default function App() {
  const [mode, setMode] = useState<AppMode>('landing');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isMock, setIsMock] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize Quiz
  const startQuiz = (mock: boolean) => {
    let selected = [];
    if (mock) {
      selected = [...aimlQuestions].sort(() => 0.5 - Math.random()).slice(0, 25);
      setTimeLeft(30 * 60);
      setIsMock(true);
    } else {
      selected = [...aimlQuestions];
      setIsMock(false);
    }
    setQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setMode('quiz');
  };

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMock && mode === 'quiz' && !isSubmitted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isMock && !isSubmitted) {
      submitQuiz();
    }
    return () => clearInterval(interval);
  }, [isMock, mode, isSubmitted, timeLeft]);

  const submitQuiz = () => {
    setIsSubmitted(true);
    setMode('results');
  };

  const handleAnswer = (optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers({ ...userAnswers, [currentIndex]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col font-sans">
      {/* Header */}
      <header className="h-16 border-b border-[#262626] flex items-center justify-between px-4 md:px-8 bg-[#0d0d0d] sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setMode('landing')}>
          <div className="w-8 h-8 bg-gradient-to-br from-[#c2a476] to-[#8c7352] rounded-sm rotate-45 flex items-center justify-center">
            <Brain size={16} className="-rotate-45 text-black" />
          </div>
          <h1 className="text-xl font-serif tracking-tight text-[#c2a476]">
            CORE.AIML <span className="hidden md:inline text-[10px] font-sans tracking-[0.2em] text-[#737373] ml-2 uppercase">Engineer Assessment</span>
          </h1>
        </div>
        
        <nav className="flex items-center gap-2 md:gap-8">
          <button 
            onClick={() => setMode('landing')}
            className={`text-[10px] uppercase tracking-widest px-3 py-2 transition-colors ${mode === 'landing' ? 'text-[#c2a476]' : 'text-[#737373] hover:text-[#e5e5e5]'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setMode('coding')}
            className={`text-[10px] uppercase tracking-widest px-3 py-2 transition-colors ${mode === 'coding' ? 'text-[#c2a476]' : 'text-[#737373] hover:text-[#e5e5e5]'}`}
          >
            Patterns
          </button>
          {isMock && mode === 'quiz' && (
            <div className="flex flex-col items-end border-l border-[#262626] pl-4 md:pl-8 ml-2">
              <span className="text-[10px] uppercase tracking-widest text-[#737373]">Remaining</span>
              <span className={`font-mono text-lg ${timeLeft < 300 ? 'text-red-500' : 'text-[#c2a476]'}`}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </span>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-10">
        <AnimatePresence mode="wait">
          {mode === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-16 py-12"
            >
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  className="h-1 bg-[#c2a476] mx-auto mb-8"
                />
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Professional <span className="text-[#c2a476]">Architect</span> Assessment
                </h2>
                <p className="text-[#737373] tracking-wide text-sm md:text-base uppercase">
                  Rigorous evaluation modules for AIML system design & engineering
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[#0d0d0d] p-10 border border-[#262626] group hover:border-[#c2a476] transition-all duration-500">
                  <div className="text-[#737373] mb-8 group-hover:text-[#c2a476] transition-colors">
                    <LayoutDashboard size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-white">Curriculum Practice</h3>
                  <p className="text-[#737373] mb-10 text-sm leading-relaxed">
                    Iterative knowledge verification. 100 comprehensive modules across pure mathematics, neural architectures, and industrial pipelines.
                  </p>
                  <button 
                    onClick={() => startQuiz(false)}
                    className="py-3 px-6 border border-[#c2a476] text-[#c2a476] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#c2a476] hover:text-black transition-all"
                  >
                    Enter Sandbox
                  </button>
                </div>

                <div className="bg-[#111111] p-10 border border-[#262626] group hover:border-[#c2a476] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Timer size={120} strokeWidth={1} />
                  </div>
                  <div className="text-[#737373] mb-8 group-hover:text-[#c2a476] transition-colors">
                    <Timer size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-white">Full Simulation</h3>
                  <p className="text-[#737373] mb-10 text-sm leading-relaxed">
                    Timed 30-minute synthesis. Random selection of 25 nodes to stress-test conceptual retention and architectural intuition.
                  </p>
                  <button 
                    onClick={() => startQuiz(true)}
                    className="py-3 px-10 bg-[#c2a476] text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(194,164,118,0.1)]"
                  >
                    Begin Session
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {mode === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-4 gap-12"
            >
              {/* Sidebar Navigator */}
              <aside className="hidden lg:flex flex-col gap-8 order-2 lg:order-1">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#737373] mb-6">Navigational Map</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-full aspect-square text-[9px] font-bold border transition-all ${
                          currentIndex === i 
                            ? 'bg-[#1a1a1a] border-[#c2a476] text-[#c2a476]' 
                            : userAnswers[i] !== undefined 
                            ? 'bg-[#262626] border-[#262626] text-[#737373]' 
                            : 'bg-transparent border-[#262626] text-[#404040]'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#262626]">
                  <div className="flex items-center gap-2 text-[10px] text-[#737373] uppercase tracking-widest">
                     <span className="w-1.5 h-1.5 bg-[#262626]"></span> Logged
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#737373] uppercase tracking-widest">
                     <span className="w-1.5 h-1.5 border border-[#c2a476]"></span> Active
                  </div>
                </div>
              </aside>

              {/* Main Question Panel */}
              <div className="lg:col-span-3 space-y-10 order-1 lg:order-2">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-widest py-1.5 px-3 bg-[#1a1a1a] border border-[#262626] text-[#c2a476] font-bold">
                      {questions[currentIndex].section}
                    </span>
                    <span className="text-[#404040] text-[10px] uppercase tracking-widest">
                      Node {currentIndex + 1} // {questions.length}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                    {questions[currentIndex].question}
                  </h3>

                  <div className="space-y-4 max-w-2xl">
                    {questions[currentIndex].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        className={`w-full text-left p-5 border transition-all flex items-center justify-between group ${
                          userAnswers[currentIndex] === i 
                            ? 'border-[#c2a476] bg-[#141414] text-[#c2a476]' 
                            : 'border-[#262626] bg-[#0d0d0d] text-[#737373] hover:border-[#404040] hover:text-[#e5e5e5]'
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <span className={`font-mono text-[10px] ${userAnswers[currentIndex] === i ? 'text-[#c2a476]' : 'text-[#404040]'}`}>
                            {['A','B','C','D'][i]}
                          </span>
                          <span className="text-sm tracking-wide">{opt}</span>
                        </div>
                        <div className={`w-3 h-3 rounded-full border transition-all ${
                          userAnswers[currentIndex] === i 
                            ? 'border-4 border-[#c2a476] bg-black' 
                            : 'border-[#262626] group-hover:border-[#404040]'
                        }`}></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-10 border-t border-[#262626]">
                  <button 
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="text-[10px] uppercase tracking-widest text-[#737373] flex items-center gap-2 hover:text-[#e5e5e5] disabled:opacity-20 transition-colors"
                  >
                    <ChevronLeft size={16} /> Prev Node
                  </button>
                  
                  <div className="flex gap-4">
                    {currentIndex === questions.length - 1 ? (
                      <button 
                        onClick={submitQuiz}
                        className="px-10 py-4 text-[10px] uppercase bg-[#c2a476] text-black font-bold tracking-[0.2em] shadow-[0_10px_30px_rgba(194,164,118,0.1)] hover:brightness-110 active:scale-95 transition-all"
                      >
                        Finalize Assessment
                      </button>
                    ) : (
                      <button 
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                        className="px-10 py-4 text-[10px] uppercase border border-[#c2a476] text-[#c2a476] font-bold tracking-[0.2em] hover:bg-[#c2a476] hover:text-black transition-all"
                      >
                        Next Node <ChevronRight size={16} className="inline ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {mode === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="bg-[#0d0d0d] p-12 border border-[#262626] text-center space-y-8">
                <div className="h-1 w-20 bg-[#c2a476] mx-auto" />
                <div>
                  <h2 className="text-4xl font-serif text-white">Performance Metrics</h2>
                  <p className="text-[#737373] mt-2 uppercase text-[10px] tracking-[0.2em]">Session finalized and verified</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1 bg-[#262626] border border-[#262626]">
                  <div className="bg-[#0a0a0a] p-8">
                    <p className="text-[9px] text-[#737373] uppercase font-bold tracking-widest mb-3">Mastery</p>
                    <p className="text-3xl font-serif text-[#c2a476]">{calculateScore()} / {questions.length}</p>
                  </div>
                  <div className="bg-[#0a0a0a] p-8">
                    <p className="text-[9px] text-[#737373] uppercase font-bold tracking-widest mb-3">Efficiency</p>
                    <p className="text-3xl font-serif text-[#c2a476]">{Math.round((calculateScore() / questions.length) * 100)}%</p>
                  </div>
                  <div className="bg-[#0a0a0a] p-8">
                    <p className="text-[9px] text-[#737373] uppercase font-bold tracking-widest mb-3">Rating</p>
                    <p className={`text-2xl font-serif ${calculateScore() / questions.length >= 0.7 ? 'text-[#c2a476]' : 'text-red-500'}`}>
                      {calculateScore() / questions.length >= 0.8 ? 'Elite' : calculateScore() / questions.length >= 0.6 ? 'Advanced' : 'Foundation'}
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] p-8">
                    <p className="text-[9px] text-[#737373] uppercase font-bold tracking-widest mb-3">Precision</p>
                    <p className="text-3xl font-serif text-[#e5e5e5]">
                      {Math.round((calculateScore() / (Object.keys(userAnswers).length || 1)) * 100)}%
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-6">
                  <button 
                    onClick={() => startQuiz(isMock)}
                    className="px-10 py-4 bg-[#c2a476] text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all"
                  >
                    Restart Session
                  </button>
                  <button 
                    onClick={() => setMode('landing')}
                    className="px-10 py-4 border border-[#262626] text-[#737373] text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#e5e5e5] hover:border-[#404040] transition-all"
                  >
                    Assessments Hub
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-white flex items-center gap-3">
                  <div className="w-6 h-1 bg-[#c2a476]" /> Debug Log & Verification
                </h3>
                {questions.map((q, idx) => (
                  <div key={idx} className="bg-[#0d0d0d] border border-[#262626] p-8 space-y-6 group hover:border-[#404040] transition-colors">
                    <div className="flex items-start justify-between gap-6">
                      <h4 className="text-lg font-serif text-white leading-snug">
                        <span className="text-[10px] font-sans font-bold text-[#404040] mr-4 tracking-tighter uppercase">{String(idx + 1).padStart(2, '0')}</span>
                        {q.question}
                      </h4>
                      <div className="shrink-0">
                        {userAnswers[idx] === q.answer ? (
                          <span className="text-[9px] font-bold tracking-widest text-[#c2a476] uppercase px-2 py-1 border border-[#c2a476]/30">Valid</span>
                        ) : (
                          <span className="text-[9px] font-bold tracking-widest text-red-500 uppercase px-2 py-1 border border-red-500/30">Error</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, i) => (
                        <div 
                          key={i} 
                          className={`p-4 border text-[11px] uppercase tracking-wider ${
                            i === q.answer 
                              ? 'bg-[#141414] border-[#c2a476] text-[#c2a476] font-bold' 
                              : i === userAnswers[idx] 
                              ? 'bg-[#1a0a0a] border-red-900 text-red-400' 
                              : 'bg-transparent border-[#262626] text-[#404040]'
                          }`}
                        >
                          <span className="font-mono mr-3 opacity-50">{['A','B','C','D'][i]}</span> {opt}
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#080808] p-5 border-l-2 border-[#c2a476] text-[#737373]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-[#c2a476]">Context</p>
                      <p className="text-xs italic leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {mode === 'coding' && (
            <motion.div 
              key="coding"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="space-y-4">
                <div className="w-12 h-0.5 bg-[#c2a476]" />
                <h2 className="text-4xl font-serif text-white">Engineering Library</h2>
                <p className="text-[#737373] uppercase text-[10px] tracking-[0.3em]">Fundamental architectural implementations</p>
              </div>

              <div className="grid gap-12">
                {[
                  {
                    title: "Optimization Logic",
                    desc: "Recursive gradient computational flow",
                    tag: "Calculus",
                    code: `def gradient_descent(x, y, lr=0.01, epochs=100):
    w, b = 0.0, 0.0
    n = len(x)
    for _ in range(epochs):
        y_pred = w * x + b
        dw = (-2/n) * sum(x * (y - y_pred))
        db = (-2/n) * sum(y - y_pred)
        w -= lr * dw
        b -= lr * db
    return w, b`
                  },
                  {
                    title: "Vision Synthesis",
                    desc: "Bounding box spatial intersection metrics",
                    tag: "Geometry",
                    code: `def compute_iou(box1, box2):
    x_left = max(box1[0], box2[0])
    y_top = max(box1[1], box2[1])
    x_right = min(box1[2], box2[2])
    y_bottom = min(box1[3], box2[3])
    if x_right < x_left or y_bottom < y_top: return 0.0
    inter = (x_right - x_left) * (y_bottom - y_top)
    a1 = (box1[2]-box1[0])*(box1[3]-box1[1])
    a2 = (box2[2]-box2[0])*(box2[3]-box2[1])
    return inter / float(a1 + a2 - inter)`
                  },
                  {
                    title: "Self-Attention",
                    desc: "Non-recurrent sequence dependency mapping",
                    tag: "Transformer",
                    code: `import numpy as np
def attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = np.exp(scores) / np.sum(np.exp(scores), axis=-1, keepdims=True)
    return np.matmul(weights, V)`
                  },
                  {
                    title: "SQL Query Optimization",
                    desc: "Advanced relational data retrieval patterns",
                    tag: "MySQL",
                    code: `-- Find the 2nd highest salary
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;

-- Calculate rolling 7-day average sales
SELECT 
    sale_date,
    amount,
    AVG(amount) OVER (
        ORDER BY sale_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as rolling_avg
FROM daily_sales;

-- Join with filtering on aggregates
SELECT department_id, COUNT(*) as emp_count
FROM employees
GROUP BY department_id
HAVING emp_count > 10;`
                  },
                  {
                    title: "PyTorch Custom Dataset",
                    desc: "Standard boilerplate for data loading pipelines",
                    tag: "PyTorch",
                    code: `from torch.utils.data import Dataset, DataLoader

class SimpleDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y
        
    def __len__(self):
        return len(self.X)
        
    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]

# Usage
loader = DataLoader(
    dataset=SimpleDataset(X_tensor, y_tensor),
    batch_size=32,
    shuffle=True
)`
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between items-end border-b border-[#262626] pb-4">
                      <div>
                        <h4 className="text-xl font-serif text-white">{item.title}</h4>
                        <p className="text-[10px] text-[#737373] uppercase tracking-widest">{item.desc}</p>
                      </div>
                      <span className="text-[9px] font-bold border border-[#262626] px-3 py-1 text-[#404040] uppercase tracking-widest">{item.tag}</span>
                    </div>
                    <div className="markdown-body">
                      <pre><code>{item.code}</code></pre>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-[#0d0d0d] border-t border-[#262626] py-12">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border border-[#c2a476] rotate-45" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#737373]">Core.AIML Assessment Systems</p>
          </div>
          <div className="flex gap-8 text-[9px] text-[#404040] uppercase tracking-[0.2em] font-bold">
            <span className="hover:text-[#737373] cursor-help">Documentation</span>
            <span className="hover:text-[#737373] cursor-help">Privacy Node</span>
            <span className="hover:text-[#737373] cursor-help">System Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
