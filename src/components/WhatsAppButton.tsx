const WhatsAppButton = () => {
  const phoneNumber = "917013570447";
  const message = "Hello Shiva Kumar, I want to know more about your Agri Clinic.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform duration-300 drop-shadow-lg">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 32 32"
          className="w-14 h-14"
        >
          <path fill="#25D366" d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.124-1.958A15.926 15.926 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.294 22.608c-.39 1.092-1.932 1.998-3.142 2.264-.828.178-1.908.32-5.546-1.192-4.654-1.932-7.648-6.65-7.882-6.958-.224-.308-1.888-2.512-1.888-4.79s1.182-3.396 1.608-3.862c.352-.386.926-.564 1.476-.564.178 0 .338.01.482.018.426.018.64.044.92.714.35.84 1.204 2.93 1.308 3.142.106.214.214.5.074.798-.13.308-.242.446-.456.692-.214.246-.418.434-.632.7-.196.232-.416.48-.172.906.244.418 1.086 1.79 2.334 2.9 1.604 1.428 2.912 1.886 3.396 2.082.352.142.77.106 1.022-.16.318-.336.712-.892 1.112-1.44.286-.39.646-.44 1.034-.296.394.136 2.478 1.168 2.904 1.38.426.214.71.32.814.5.104.178.104 1.04-.286 2.132z"/>
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-border">
        <span className="text-sm font-medium">Chat with us!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-card" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
