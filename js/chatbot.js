/* ================================================
   APTI AI TUTOR - CHATBOT CONTROLLER
   ================================================ */

// Chatbot State
const chatbotState = {
    isOpen: false,
    messages: [],
    isTyping: false
};

// DOM Elements
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Toggle Chatbot
function toggleChatbot() {
    chatbotState.isOpen = !chatbotState.isOpen;
    
    if (chatbotState.isOpen) {
        chatbotWindow?.classList.add('active');
        chatInput?.focus();
    } else {
        chatbotWindow?.classList.remove('active');
    }
}

// Event Listeners
chatbotBtn?.addEventListener('click', toggleChatbot);
chatbotClose?.addEventListener('click', toggleChatbot);

// Close chatbot when clicking outside
document.addEventListener('click', (e) => {
    if (chatbotState.isOpen && 
        chatbotWidget && 
        !chatbotWidget.contains(e.target)) {
        toggleChatbot();
    }
});

// Send Message
function sendMessage(message = null) {
    const text = message || chatInput?.value?.trim();
    
    if (!text) return;
    
    // Add user message
    addMessage(text, 'user');
    
    // Clear input
    if (chatInput) {
        chatInput.value = '';
    }
    
    // Simulate bot typing
    showTypingIndicator();
    
    // Generate response
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(text);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Add Message to Chat
function addMessage(text, type) {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <span class="message-time">${time}</span>
    `;
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Store in state
    chatbotState.messages.push({ text, type, time });
}

// Show Typing Indicator
function showTypingIndicator() {
    if (!chatbotMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
    `;
    
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    chatbotState.isTyping = true;
}

// Hide Typing Indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator?.remove();
    chatbotState.isTyping = false;
}

// Generate Bot Response
function generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Response logic based on keywords
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! Great to meet you! I'm here to help you learn. What subject or topic would you like to explore today?";
    }
    
    if (lowerMessage.includes('help')) {
        return "I'd love to help! Here are some things I can assist you with:\n\n• Explaining complex topics\n• Creating practice quizzes\n• Tracking your learning progress\n• Providing study tips and resources\n\nWhat would you like to start with?";
    }
    
    if (lowerMessage.includes('math') || lowerMessage.includes('algebra') || lowerMessage.includes('calculus')) {
        return "Mathematics is a fascinating subject! I can help you with:\n\n• Algebra fundamentals\n• Calculus concepts\n• Geometry problems\n• Statistics and probability\n\nWhich area would you like to explore? Just type your question and I'll explain it step by step!";
    }
    
    if (lowerMessage.includes('science') || lowerMessage.includes('physics') || lowerMessage.includes('chemistry')) {
        return "Science is all about understanding the world around us! I can help explain:\n\n• Physics concepts and laws\n• Chemical reactions and elements\n• Biology and life sciences\n• Scientific method\n\nWhat topic interests you?";
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('code') || lowerMessage.includes('python') || lowerMessage.includes('javascript')) {
        return "Programming is a valuable skill! I can help you learn:\n\n• Python basics and advanced concepts\n• JavaScript for web development\n• Data structures and algorithms\n• Problem-solving techniques\n\nWhich programming language would you like to learn?";
    }
    
    if (lowerMessage.includes('quiz') || lowerMessage.includes('test') || lowerMessage.includes('practice')) {
        return "Great! I can create a personalized quiz for you. To get started, please tell me:\n\n1. What subject do you want to be tested on?\n2. What's your current level (beginner, intermediate, advanced)?\n3. How many questions would you like?\n\nOnce you provide this info, I'll generate a custom quiz just for you!";
    }
    
    if (lowerMessage.includes('progress') || lowerMessage.includes('track') || lowerMessage.includes('statistics')) {
        return "Tracking your progress is important for effective learning! With APTI AI Tutor, you can:\n\n• View your learning history\n• See your strengths and areas for improvement\n• Set and monitor learning goals\n• Get personalized recommendations\n\nWould you like me to show you how to access these features?";
    }
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('free')) {
        return "APTI AI Tutor offers flexible pricing:\n\n• **Free Plan**: Access to basic features, limited daily questions\n• **Pro Plan**: Unlimited questions, advanced analytics, priority support\n• **Team Plan**: For schools and organizations\n\nWould you like more details about any of these plans?";
    }
    
    if (lowerMessage.includes('thank')) {
        return "You're welcome! It's my pleasure to help you learn. If you have any more questions, don't hesitate to ask. Happy learning! 📚";
    }
    
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        return "Goodbye! It was great chatting with you. Come back anytime you need help with your studies. Best of luck with your learning journey! 🚀";
    }
    
    // Default response
    return "That's an interesting question! While I'm continuously learning, let me try to help. Could you rephrase your question or let me know what subject you're asking about? I'm best equipped to help with academic topics like math, science, programming, languages, and more!";
}

// Quick Reply Actions
function handleQuickReply(action) {
    const quickReplies = {
        explain: "I want you to explain a topic for me.",
        quiz: "I'd like to take a practice quiz.",
        progress: "Can you show me my learning progress?",
        help: "I need some help getting started."
    };
    
    const message = quickReplies[action];
    if (message) {
        sendMessage(message);
    }
}

// Event Listeners for Quick Replies
document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => {
        handleQuickReply(btn.dataset.action);
    });
});

// Send Button Click
sendBtn?.addEventListener('click', () => sendMessage());

// Enter Key to Send
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Tab Focus in Chatbot
chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        sendBtn?.focus();
    }
});

// Export for use in other modules
window.APTIChatbot = {
    toggleChatbot,
    sendMessage,
    addMessage,
    handleQuickReply
};
