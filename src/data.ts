import { DocumentProfile, StorageIntegration, AIHistoryItem } from "./types";

export const FORMAT_CATEGORIES = {
  document: ["PDF", "DOC", "DOCX", "TXT", "RTF", "ODT", "EPUB", "MOBI", "Markdown", "HTML", "XML", "JSON", "CSV", "Excel", "PowerPoint", "LaTeX"],
  image: ["PNG", "JPG", "JPEG", "WEBP", "SVG", "BMP", "TIFF", "HEIC", "GIF"],
  audio: ["MP3", "WAV", "AAC", "FLAC", "OGG", "M4A"],
  video: ["MP4", "MOV", "AVI", "MKV", "WEBM", "FLV"],
  code: ["Python", "Java", "JavaScript", "C", "C++", "C#", "Go", "Rust", "PHP", "HTML", "CSS", "SQL", "TypeScript", "JSON", "YAML"]
};

export const CONVERSION_WORKFLOWS = {
  pdfToAnything: ["Word", "Excel", "PowerPoint", "Markdown", "HTML", "Images", "JSON", "CSV", "Text", "Flashcards", "Mind Maps", "Research Papers", "Study Notes", "Question Banks", "Books", "Professional Reports"],
  anythingToPdf: ["Word", "Excel", "PowerPoint", "HTML", "Markdown", "Images", "Text", "Code", "CSV", "JSON", "XML", "EPUB", "Books", "Research Papers", "Web Pages"]
};

export const MODEL_METADATA = {
  "gemini-3.5-flash": {
    name: "Google Gemini 3.5 Flash",
    tagline: "Ultra-fast generation & robust reasoning",
    icon: "sparkles",
    tier: "Standard (Included)"
  },
  "gpt-4o": {
    name: "OpenAI GPT-4o",
    tagline: "Exceptional language structure & logic",
    icon: "cpu",
    tier: "Pro Option"
  },
  "claude-3-5-sonnet": {
    name: "Anthropic Claude 3.5 Sonnet",
    tagline: "Highly detailed editorial and analysis",
    icon: "book-open",
    tier: "Pro Option"
  },
  "deepseek-r1": {
    name: "DeepSeek R1",
    tagline: "Deep thinking with explicit chain-of-thought",
    icon: "terminal",
    tier: "Ultimate Option"
  },
  "llama-3-3": {
    name: "Meta Llama 3.3",
    tagline: "Efficient open-source model optimization",
    icon: "sliders",
    tier: "Standard (Free)"
  }
};

export const INITIAL_FILES: DocumentProfile[] = [
  {
    id: "f1",
    name: "Enterprise_Strategy_2026.pdf",
    size: "12.4 MB",
    type: "pdf",
    category: "document",
    uploadedAt: "2026-06-30 09:12",
    favorite: true,
    content: `# ENTERPRISE STRATEGY PLAN 2026
**Confidential | Internal Use Only**
## Executive Summary
This document outlines our core technological goals for 2026, centering around migrating local pipelines to zero-latency AI clusters.

## Strategic Pillars
1. **Automation of Ingestion**: Modernize document processors to parse invoices instantly.
2. **Security Standardization**: Deploy end-to-end encryption.
3. **Data Democratization**: Enable natural language querying over data warehouses.`
  },
  {
    id: "f2",
    name: "receipt_harvest_cafe.jpg",
    size: "2.1 MB",
    type: "jpg",
    category: "image",
    uploadedAt: "2026-06-29 14:44",
    favorite: false,
    ocrText: `# EXTRACTED RECEIPT
ORGANIC HARVEST CAFÉ
Date: June 28, 2026
1. Avocado Toast (Gluten-Free) - $14.50
2. Matcha Latte (Oat Milk) - $11.00
3. Superfood Acai Bowl - $12.75
Subtotal: $38.25
TOTAL: $48.44`
  },
  {
    id: "f3",
    name: "Sales_Data_Q2_Report.xlsx",
    size: "4.8 MB",
    type: "xlsx",
    category: "document",
    uploadedAt: "2026-06-28 10:05",
    favorite: true,
    content: `Region,Product,Q1_Actuals,Q2_Projected,Status
East,Core AI Suite,1500000,1850000,Achieved
West,Merge Flow Pro,940000,1200000,Overperforming
North,Classic Converters,450000,420000,Underperforming
South,OCR Plugins,320000,390000,Stable`
  },
  {
    id: "f4",
    name: "Audio_Meeting_Transcript.mp3",
    size: "38.2 MB",
    type: "mp3",
    category: "audio",
    uploadedAt: "2026-06-25 16:30",
    favorite: false,
    content: `[00:02] Sarah: Thanks for joining today. Let's discuss our migration roadmap.
[00:15] Mark: We need to make sure the document engine supports complex tables.
[00:45] Sarah: Great. We'll use the Merge Flow PDF generation module for that.`
  }
];

export const INITIAL_STORAGE: StorageIntegration[] = [
  { id: "gdrive", name: "Google Drive", iconName: "google-drive", connected: true, usage: "45 GB used of 100 GB" },
  { id: "dropbox", name: "Dropbox", iconName: "dropbox", connected: false },
  { id: "onedrive", name: "Microsoft OneDrive", iconName: "onedrive", connected: false },
  { id: "box", name: "Box", iconName: "box", connected: false },
  { id: "aws", name: "AWS S3 Cloud", iconName: "aws", connected: true, usage: "120 TB active files" }
];

export const INITIAL_HISTORY: AIHistoryItem[] = [
  { id: "h1", timestamp: "2026-07-01 10:15", action: "Summarize PDF", fileName: "Enterprise_Strategy_2026.pdf", modelUsed: "gemini-3.5-flash", status: "success" },
  { id: "h2", timestamp: "2026-07-01 09:40", action: "Convert JPG to Markdown (OCR)", fileName: "receipt_harvest_cafe.jpg", modelUsed: "gemini-3.5-flash", status: "success" },
  { id: "h3", timestamp: "2026-06-30 18:22", action: "AI PDF Document Generation", fileName: "Strategic_Marketing_Guide.pdf", modelUsed: "gpt-4o", status: "success" },
  { id: "h4", timestamp: "2026-06-30 11:05", action: "Translate docx to Spanish", fileName: "Employment_Agreement.docx", modelUsed: "claude-3-5-sonnet", status: "success" }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for students and occasional conversions.",
    features: [
      "Convert up to 50 MB files",
      "50 conversions per day",
      "Basic OCR extraction",
      "Access to Gemini 3.5 Flash & Llama 3.3",
      "Standard cloud queue"
    ],
    buttonText: "Active Free Tier",
    popular: false
  },
  {
    name: "Merge Flow Pro",
    price: "$29",
    period: "month",
    description: "Designed for professionals and growing startups.",
    features: [
      "Convert up to 2 GB files",
      "Unlimited daily conversions",
      "Premium Neural OCR (handwriting & math)",
      "Access to Claude 3.5 & GPT-4o",
      "Multi-thread background processing",
      "100 GB encrypted storage cloud storage",
      "Secure e-signatures & redact"
    ],
    buttonText: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "month",
    description: "For high-volume automation with advanced security.",
    features: [
      "Convert up to 5 GB files",
      "Unrestricted high-priority API endpoints",
      "Custom enterprise AI model fine-tuning",
      "SSO & Custom authentication",
      "HIPAA, GDPR, and SOC2 compliant architecture",
      "Direct integration (S3, Drive, Salesforce)",
      "Dedicated 24/7 success engineer"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export const FAQS = [
  {
    q: "Is my sensitive content kept secure?",
    a: "Absolutely. Merge Flow uses full military-grade end-to-end AES-256 encryption. Files are processed entirely in memory and automatically shredded from our server instances 24 hours after conversion, or immediately upon user request."
  },
  {
    q: "How does the AI PDF Generator output formatting?",
    a: "Our AI layout engine automatically translates text markdown structures into fully styled PDF containers. This includes cover pages, active tables of contents, page number metrics, elegant margins, and embedded source code with proper syntax highlighting."
  },
  {
    q: "Can I extract tabular data from fuzzy scans?",
    a: "Yes. Our OCR engine runs state-of-the-art multimodal vision networks (specifically Gemini Flash and Pro vision) to detect handwritten segments, receipt structures, and invoices, immediately outputting them as clean copyable Markdown or JSON structures."
  },
  {
    q: "What file sizes do you support?",
    a: "Free tier accounts support uploads up to 50 MB. Pro subscribers can process files up to 2 GB, and Enterprise clients can run high-priority multi-threaded parallel queues for files up to 5 GB."
  }
];
