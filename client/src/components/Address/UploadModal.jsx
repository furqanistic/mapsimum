import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Upload as UploadIcon, X } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

// Circular Progress Component
const CircularProgress = ({ progress }) => (
  <div className='relative w-32 h-32'>
    <svg className='w-full h-full' viewBox='0 0 100 100'>
      <circle
        className='stroke-[#1E293B] fill-none'
        strokeWidth='8'
        cx='50'
        cy='50'
        r='46'
      />
      <circle
        className='stroke-[#5BB6B3] fill-none transition-all duration-300'
        strokeWidth='8'
        strokeLinecap='round'
        cx='50'
        cy='50'
        r='46'
        strokeDasharray={`${progress * 2.89}, 289`}
        transform='rotate(-90 50 50)'
      />
    </svg>
    <div className='absolute inset-0 flex items-center justify-center'>
      <span className='text-2xl font-semibold text-white'>{progress}%</span>
    </div>
  </div>
)

// Notification Component
const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className='fixed top-4 right-4 flex items-center gap-2 bg-[#0F2942] text-white px-4 py-3 rounded-lg shadow-lg z-50'
  >
    {type === 'success' && <CheckCircle className='text-[#5BB6B3]' size={20} />}
    <span>{message}</span>
    <button onClick={onClose} className='ml-4 text-gray-400 hover:text-white'>
      <X size={16} />
    </button>
  </motion.div>
)

const UploadModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([])
  const [uploadProgress, setUploadProgress] = useState(null)
  const [notification, setNotification] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
  })

  const handleUpload = () => {
    if (files.length === 0) return

    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploadProgress(null)
          setFiles([])
          onClose()
          setNotification({
            type: 'success',
            message: 'File uploaded successfully!',
          })
          return prev
        }
        return prev + 10
      })
    }, 300)
  }

  if (!isOpen) return null

  return (
    <>
      <AnimatePresence>
        {notification && (
          <Notification
            {...notification}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
          onClick={uploadProgress === null ? onClose : undefined}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className='bg-[#0F1E36] rounded-lg w-full max-w-xl mx-4 overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between p-6'>
              <h2 className='text-2xl text-white font-semibold'>
                Upload Address
              </h2>
              {uploadProgress === null && (
                <button
                  onClick={onClose}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <X size={24} />
                </button>
              )}
            </div>

            <div className='p-6 pt-0'>
              {uploadProgress !== null ? (
                <div className='flex flex-col items-center gap-6 py-8'>
                  <CircularProgress progress={uploadProgress} />
                  <p className='text-white text-xl'>Uploading file...</p>
                  <button
                    className='text-gray-400 hover:text-white border border-gray-700 rounded-lg px-6 py-2 transition-colors'
                    onClick={() => {
                      setUploadProgress(null)
                      setFiles([])
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed border-[#5BB6B3] rounded-lg p-8 cursor-pointer transition-colors
                      ${
                        isDragActive ? 'bg-[#5BB6B3]/10' : 'hover:bg-[#1E293B]'
                      }`}
                  >
                    <input {...getInputProps()} />
                    <div className='flex flex-col items-center gap-4'>
                      <div className='w-16 h-16 rounded-full bg-[#5BB6B3]/20 flex items-center justify-center'>
                        <UploadIcon size={32} className='text-[#5BB6B3]' />
                      </div>
                      <div className='text-center'>
                        <p className='text-xl text-white mb-2'>
                          Select file to upload
                        </p>
                        <p className='text-gray-400'>
                          or drag and drop it here
                        </p>
                      </div>
                    </div>
                  </div>

                  {files.length > 0 && (
                    <div className='mt-4 space-y-2'>
                      {files.map((file) => (
                        <div
                          key={file.name}
                          className='flex items-center justify-between bg-[#1E293B] p-3 rounded'
                        >
                          <span className='text-white text-sm'>
                            {file.name}
                          </span>
                          <button
                            onClick={() =>
                              setFiles(files.filter((f) => f !== file))
                            }
                            className='text-gray-400 hover:text-white'
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className='flex justify-end mt-6'>
                    <button
                      disabled={files.length === 0}
                      onClick={handleUpload}
                      className='bg-[#5BB6B3] text-white px-6 py-2 rounded-lg hover:bg-[#4A9593] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      Upload
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default UploadModal
