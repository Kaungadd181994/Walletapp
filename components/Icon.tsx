
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icons: { [key: string]: React.ReactNode } = {
    menu: <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    wallet: <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />,
    bank: <path d="m3 21 18-9L3 3v7l9 2-9 2z" />,
    card: <rect x="2" y="5" width="20" height="14" rx="2" />,
    home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    nearby: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    scan: <><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" /></>,
    qr: <><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16h.01" /><path d="M16 12h.01" /><path d="M21 12h.01" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></>,
    send: <path d="M7 17 17 7m0 0H7m10 0v10" />,
    request: <path d="M17 7 7 17m0 0h10M7 17V7" />,
    cashIn: <path d="M12 8v8m-4-4h8" />,
    cashOut: <path d="M8 12h8" />,
    // Service Icons - All Green
    topUp: <><path d="M3 13a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" /><path d="M7 11v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4" /></>,
    history: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    loan: <><circle cx="12" cy="12" r="10" /><path d="m12 8-4 4 4 4m4-4H8" /></>,
    bill: <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /></>,
    vouchers: <><path d="M2 9a3 3 0 0 1 0 6v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a3 3 0 0 1 0-6V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M13 12a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1" /></>,
    games: <path d="M3 12v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2m-2-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2m11-6v4m0 8v4m6-4h4M0 12h4" />,
    insurance: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    invest: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    bus: <><path d="M19 17h2l.64-2.54.8-3.21A3 3 0 0 0 20.12 8H4.88a3 3 0 0 0-2.32 3.25l.8 3.21L4 17h2m-2 0h16" /><circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" /></>,
    // Other icons
    notification: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
    'more-vertical': <><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></>,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    gift: <><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></>,
    ticket: <path d="M2 9a3 3 0 0 1 0 6v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a3 3 0 0 1 0-6V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />,
    percent: <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
    'eye-off': <><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><path d="M1 12s4-8 11-8a10.47 10.47 0 0 1 2.91.4" /><path d="m1 1 22 22" /></>,
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
    filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
    'plus-circle': <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>,
    'minus-circle': <><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    unlock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></>,
    'chevron-down': <polyline points="6 9 12 15 18 9" />,
    'credit-card': <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />,
    'arrow-right': <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    'settings': <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    'log-out': <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    'link': <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></>,
    'visa': <path d="M10.8 10.7c0-.2-.1-.4-.2-.5l-3.3-3.3c-.1-.1-.3-.2-.5-.2H3.1c-.2 0-.4.1-.5.2L1 8.5c-.1.1-.2.3-.2.5v.1c0 .2.1.4.2.5l3.3 3.3c.1.1.3.2.5.2h3.7c.2 0 .4-.1.5-.2l1.6-1.6c.1-.1.2-.3.2-.5v-.1zm-2.4 1.2c0 .2.1.4.2.5l1.6 1.6c.1.1.3.2.5.2h3.7c.2 0 .4-.1.5-.2l3.3-3.3c.1-.1.2-.3.2-.5v-.1c0-.2-.1-.4-.2-.5l-1.6-1.6c-.1-.1-.3-.2-.5-.2h-3.7c-.2 0-.4.1-.5.2l-3.3 3.3c-.1.1-.2.3-.2.5v.1zm6.7-6.7c0-.2-.1-.4-.2-.5L11.6 1c-.1-.1-.3-.2-.5-.2H7.4c-.2 0-.4.1-.5.2L3.6 4.4c-.1.1-.2.3-.2.5v.1c0 .2.1.4.2.5l3.3 3.3c.1.1.3.2.5.2h3.7c.2 0 .4-.1.5-.2l3.3-3.3c.1-.1.2-.3.2-.5v-.1z" fill="#142688"/>,
    'mastercard':<><circle cx="7" cy="12" r="7" fill="#EA001B"/><circle cx="17" cy="12" r="7" fill="#F79E1B"/><path d="M12 12a7 7 0 0 1-5-11.86A7 7 0 0 0 12 19a7 7 0 0 0 5-7.14A7 7 0 0 1 12 12z" fill="#FF5F00"/></>,
    'chevron-right': <polyline points="9 18 15 12 9 6" />,
  };
  
  const iconContent = icons[name] || <circle cx="12" cy="12" r="10" />;

  const isMultiColor = ['mastercard', 'visa'].includes(name);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isMultiColor ? 'currentColor' : 'none'}
      stroke={isMultiColor ? 'none' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {iconContent}
    </svg>
  );
};

export default Icon;
