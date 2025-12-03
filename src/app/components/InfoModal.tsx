import { useState } from "react";
import { Link, X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  buttonText?: string;
  onButtonClick?: () => void;
}

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  size = "md",
  buttonText,
  onButtonClick,
}: ModalProps) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative bg-white rounded-lg shadow-xl transform transition-all w-full ${sizeClasses[size]}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-2 border-b">
            <h3 className="text-lg text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 text-gray-700">{message}</div>

          {/* Footer */}
          {buttonText && (
            <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                onClick={onButtonClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
