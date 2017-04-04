export interface NgxSiemaOptions {
  selector?: string;
  duration?: number;
  easing?: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
  threshold?: number;
  loop?: boolean;
  onInit?: () => void;
  onChange?: () => void;
}
