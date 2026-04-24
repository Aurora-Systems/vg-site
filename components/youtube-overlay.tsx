'use client'

import { useState, useEffect } from 'react'
import { X, Play } from 'lucide-react'

export function YouTubeOverlay() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show overlay when page loads
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-11/12 p-8">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close overlay"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">When the system fails who answers?</h2>
          <p className="text-gray-600 mb-6">Join us live on YouTube</p>
          
          {/* Button */}
          <a
            href="https://www.youtube.com/live/rEnQW5XOyKQ?si=bN8rSTIX4slmMFfs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4 w-full"
          >
            <Play size={20} />
            Watch Live
          </a>
          
          {/* Dismiss button */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
