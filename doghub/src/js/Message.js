const Message = ({ text, sender, timestamp }) => {
    return (
      <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
        <div className="message-bubble">
        <p>{text}</p>
        </div>
        <span className="message-timestamp">{timestamp}</span>
      </div>
    );
  };

export default Message;