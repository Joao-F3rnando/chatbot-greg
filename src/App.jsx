import { useState } from 'react'
import './App.css'
import { UserMessage } from './components/UserMessage/UserMessage'
import { BotMessage } from './components/BotMessage/BotMessage'
import { useGetDate } from './hooks/useGetDate'
import { useGptApi } from './hooks/useGptApi'

function App() {
  const [messages, setmessages] = useState([])
  const [question, setQuestion] = useState('')

  const setbotMessage = (question) => {
    const questionDate = useGetDate().questionDate
    const botmessage = { id: `bot-${messages.length + 1}`, type: 'bot', message: useGptApi(question), date: questionDate }
    // setmessages((prevUserMessage) => {
    //   return [...prevUserMessage, botmessage];
    // })
  }

  const handleSubmitQuestion = (e, question) => {
    e.preventDefault()
    const questionDate = useGetDate().questionDate
    const message = { id: `user-${messages.length + 1}`, type: 'user', message: question, date: questionDate }
    setmessages((prevUserMessage) => {
      return [...prevUserMessage, message];
    })
    setbotMessage(question)
    setQuestion('')
  }

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card">
              <div
                className="card-header d-flex justify-content-between align-items-center p-3"
                style={{ borderTop: "4px solid #39c0ed" }}
              >
                <h5 className="mb-0">Chat messages</h5>
                <div className="d-flex flex-row align-items-center">
                  <span className="badge bg-warning me-3">2023</span>
                  <i className="fas fa-minus me-3 text-muted fa-xs" />
                  <i className="fas fa-comments me-3 text-muted fa-xs" />
                  <i className="fas fa-times text-muted fa-xs" />
                </div>
              </div>
              <div
                className="card-body"
                style={{ position: "relative", height: 400, overflow: 'auto' }}
              >{messages.length === 0 && <h1>Olá, bem vindo ao GregBot</h1>}
                {messages.map((message) => {
                  if (message.type === 'user') {
                    return (
                      <UserMessage
                        key={message.id}
                        message={message.message}
                        date={message.date} />
                    )
                  }
                  else {
                    return (
                      <BotMessage
                        key={message.id}
                        message={message.message}
                        date={message.date} />
                    )
                  }
                })}
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <form className="input-group mb-0" onSubmit={(e) => handleSubmitQuestion(e, question)}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type message"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button
                      className="btn btn-warning"
                      style={{ paddingTop: ".55rem", backgroundColor: "#39c0ed" }}
                    >
                      Button
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default App
