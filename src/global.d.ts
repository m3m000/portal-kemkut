// global.d.ts

// Google Identity Services için tip tanımları
interface CredentialResponse {
    credential: string;
    select_by?: string;
  }
  
  interface RenderButtonOptions {
    theme: 'outline' | 'filled_blue' | 'filled_black';
    size: 'small' | 'medium' | 'large';
  }
  
  interface GoogleID {
    initialize: (config: {
      client_id: string;
      callback: (response: CredentialResponse) => void;
      auto_prompt?: boolean;
    }) => void;
    renderButton: (element: HTMLElement, options: RenderButtonOptions) => void;
  }
  
  interface GoogleAccounts {
    id: GoogleID;
  }
  
  interface GoogleIdentityServices {
    accounts: GoogleAccounts;
  }
  
  declare global {
    interface Window {
      google: GoogleIdentityServices;
    }
  }
  
  // Bu dosya bir modül olarak kabul edilsin diye export ekliyoruz.
  export {};
  