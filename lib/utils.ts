import { Camera } from "@/types/canvas"
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