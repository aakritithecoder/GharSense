export interface PricingTier {
  id: string;
  badge?: string;
  category: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  paymentNote: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface VideoDemo {
  id: string;
  duration: string;
  category: string;
  title: string;
  description: string;
  image: string;
  details: {
    location: string;
    stepGuide: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface SocietyTank {
  id: string;
  name: string;
  type: 'overhead' | 'sump';
  capacityLiters: number;
  currentLevelPercent: number;
  inflowRateLpm: number;
  outflowRateLpm: number;
  status: 'normal' | 'filling' | 'critical-high' | 'low';
}

export interface PumpMotor {
  id: string;
  name: string;
  hp: string;
  phase: 'Single-Phase' | '3-Phase';
  status: 'running' | 'idle' | 'auto-cutoff' | 'dry-run-locked';
  currentAmps: number;
  voltage: number;
  powerFactor: number;
  runtimeTodayHours: number;
}

export interface LeakLog {
  id: string;
  timestamp: string;
  location: string;
  severity: 'low' | 'medium' | 'high';
  estimatedLossLph: number;
  status: 'active' | 'isolated' | 'resolved';
}

export interface WhatsAppMessage {
  id: string;
  sender: 'bot' | 'user';
  time: string;
  type: 'text' | 'voice' | 'alert';
  text?: string;
  audioDuration?: string;
  alertData?: {
    tank: string;
    level: string;
    action: string;
    waterSaved: string;
    motorIsolated: string;
  };
}
