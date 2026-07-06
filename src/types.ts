export type ActiveTab = 
  | "landing" 
  | "dashboard" 
  | "converter" 
  | "pdf-to-anything" 
  | "anything-to-pdf" 
  | "generator" 
  | "commands" 
  | "ocr" 
  | "notes" 
  | "writing" 
  | "copilot" 
  | "editor" 
  | "storage" 
  | "admin";

export type AIModelType = 
  | "gemini-3.5-flash" 
  | "gpt-4o" 
  | "claude-3-5-sonnet" 
  | "deepseek-r1" 
  | "llama-3-3";

export interface DocumentProfile {
  id: string;
  name: string;
  size: string;
  type: string; // "pdf" | "docx" | "txt" | "png" | "mp3" etc.
  category: "document" | "image" | "audio" | "video" | "code";
  uploadedAt: string;
  content?: string;
  convertedFormat?: string;
  convertedContent?: string;
  ocrText?: string;
  favorite?: boolean;
  fileData?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export interface AIHistoryItem {
  id: string;
  timestamp: string;
  action: string;
  fileName: string;
  modelUsed: string;
  status: "success" | "pending" | "failed";
}

export interface StorageIntegration {
  id: string;
  name: string;
  iconName: string;
  connected: boolean;
  usage?: string;
}

export interface PDFEditorAnnotation {
  id: string;
  type: "text" | "highlight" | "underline" | "draw" | "signature" | "watermark" | "shape";
  page: number;
  x: number;
  y: number;
  color: string;
  content?: string;
  width?: number;
  height?: number;
}
