export interface VoiceInputOptions {
  language?: string;
  onResult?: (transcript: string) => void;
  onError?: (error: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
}

export class VoiceInput {
  private recognition: SpeechRecognition | null = null;
  private isListening = false;

  constructor(private options: VoiceInputOptions = {}) {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.setupRecognition();
    }
  }

  private setupRecognition() {
    if (!this.recognition) return;

    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = this.options.language || 'en-US';

    this.recognition.onstart = () => {
      this.isListening = true;
      this.options.onStart?.();
    };

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      this.options.onResult?.(transcript);
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      this.options.onError?.(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.options.onEnd?.();
    };
  }

  start() {
    if (!this.recognition) {
      this.options.onError?.('Speech recognition not supported');
      return;
    }

    if (this.isListening) {
      return;
    }

    try {
      this.recognition.start();
    } catch (error) {
      this.options.onError?.('Failed to start speech recognition');
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  isSupported(): boolean {
    return this.recognition !== null;
  }

  setLanguage(language: string) {
    if (this.recognition) {
      this.recognition.lang = language;
    }
  }
}

export const getLanguageCode = (lang: string): string => {
  const langMap: Record<string, string> = {
    'en': 'en-US',
    'hi': 'hi-IN',
    'es': 'es-ES',
    'fr': 'fr-FR',
    'de': 'de-DE',
    'pt': 'pt-PT',
    'bn': 'bn-IN',
    'ta': 'ta-IN',
    'te': 'te-IN',
    'mr': 'mr-IN',
    'pa': 'pa-IN',
    'gu': 'gu-IN'
  };
  return langMap[lang] || 'en-US';
};
