import { useState, useRef, useEffect } from 'react'

const RESPONSES = {
  course:
    'We offer 6 certification tracks: AI/ML, Embedded Systems, Robotics, Data Science, Business AI, and AR/VR. Each is 60–72 hours with hands-on projects. 🎓',
  internship:
    'AI Research and Embedded Systems internships are open now. AR/VR and Robotics coming soon. Apply via the Contact page! 🚀',
  partner:
    'We partner with colleges and corporates. We offer MoU frameworks, faculty development, and co-certification programs. 🤝',
  placement:
    'Yes! Our placement cell offers resume coaching, mock interviews, and direct referrals to 50+ hiring partners. 🎯',
  price:
    'For fees and batch schedules please contact us at info@proteqindia.com. Institutional pricing available for colleges. 💰',
  default:
    'Great question! Contact us at info@proteqindia.com for detailed info. We respond within 24 hours. 😊',
}

function ChatWidget({ chatOpen, setChatOpen }) {
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hi! Ask me about courses, internships, or partnerships.' },
  ])
  const [chatInput, setChatInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (chatOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, chatOpen])

  const handleSend = () => {
    const text = chatInput.trim()
    if (!text) return

    setMessages((prev) => [...prev, { type: 'user', text }])
    setChatInput('')

    const lower = text.toLowerCase()
    let reply = RESPONSES.default
    Object.keys(RESPONSES).forEach((k) => {
      if (lower.includes(k)) reply = RESPONSES[k]
    })

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'bot', text: reply }])
    }, 600)
  }

  return (
    <div className="chat-widget">
      {/* Panel */}
      <div className={`chat-panel ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <span className="chat-dot" />
            <div>
              <strong>ProTeQ Assistant</strong>
              <small>Online — Ask us anything</small>
            </div>
          </div>
          <button className="chat-close" onClick={() => setChatOpen(false)}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.type}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            placeholder="Type a message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend() }}
          />
          <button onClick={handleSend}>→</button>
        </div>
      </div>

      {/* Bubble */}
      <button
        className="chat-bubble"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Toggle chat"
      >
        Chat
      </button>
    </div>
  )
}

export default ChatWidget
