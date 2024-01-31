import { Camera, Color, Point, Side, XYWH } from "@/types/canvas"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const colors = ['#DC2626', '#FBBF24', '#10B981', '#3B82F6', '#6366F1', '#8B5CF6', '#EC4899', '#F43F5E', '#F87171', '#FCD34D', '#A7F3D0', '#6EE7B7', '#5EEAD4', '#6EE7B7', '#93C5FD', '#818CF8', '#A78BFA', '#D1D5DB', '#F3F4F6', '#F9FAFB']

export function connectionIdToColor(connectionId: number):string{
  return colors[connectionId % colors.length]
}

export function pointerEventToCanvasPoint(e:React.PointerEvent, camera: Camera){
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  }
}

export function colorToCss(color:Color) {
  return `#${color.r.toString(16).padStart(2,'0')}${color.g.toString(16).padStart(2,'0')}${color.b.toString(16).padStart(2,'0')}`
}

export function resizeBounds(bounds:XYWH, corner:Side, point:Point): XYWH{
  const result = {
    x: bounds.x,
    y:  bounds.y,
    width: bounds.width,
    height: bounds.height,
  };

  if((corner & Side.Left) === Side.Left){
    result.x = Math.min(point.x, bounds.x + bounds.width);
    result.width = Math.abs(bounds.x + bounds.width - point.x);
  }

  if((corner & Side.Right) === Side.Right){
    result.x = Math.min(point.x, bounds.x);
    result.width = Math.abs(point.x - bounds.x);
  }

  if((corner & Side.Top) === Side.Top){
    result.y = Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y + bounds.height - point.y);
  }

  if((corner & Side.Bottom) === Side.Bottom){
    result.y = Math.min(point.y, bounds.y);
    result.height = Math.abs(point.y - bounds.y);
  }

  return result;
}