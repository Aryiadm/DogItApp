const Message = ({ text, sender, timestamp }) => {
    return (
      <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
        <div className={`message-bubble ${sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
        <p>{text}</p>
        </div>
        <span className={`message-timestamp ${sender === 'user' ? 'user-timestamp' : 'bot-timestamp'}`}>{timestamp}</span>
      </div>
    );
  };

export default Message;