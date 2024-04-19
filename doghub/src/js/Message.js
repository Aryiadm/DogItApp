const Message = ({ text, sender, timestamp }) => {
    return (
      <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
        <p>{text}</p>
        <span className="message-timestamp">{timestamp}</span>
      </div>
    );
  };

export default Message;