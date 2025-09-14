import React, { useState, useRef } from 'react';
import { Upload as UploadIcon, Camera, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface UploadProps {
  setCurrentPage: (page: string) => void;
}

interface PredictionResult {
  disease: string;
  confidence: number;
  treatment: string;
}

export default function Upload({ setCurrentPage }: UploadProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate API call to ML backend
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock prediction results
      const mockResults: PredictionResult[] = [
        {
          disease: 'Leaf Spot Disease',
          confidence: 92.5,
          treatment: 'Apply copper-based fungicide. Remove affected leaves and improve air circulation. Avoid overhead watering.'
        },
        {
          disease: 'Nitrogen Deficiency',
          confidence: 88.3,
          treatment: 'Apply nitrogen-rich fertilizer (urea or ammonium nitrate). Consider organic options like compost or manure.'
        },
        {
          disease: 'Healthy Plant',
          confidence: 95.7,
          treatment: 'Your plant appears healthy! Continue current care routine and monitor regularly.'
        }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
    } catch (error) {
      console.error('Prediction failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 hover:py-12 transition-all duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display hover:text-green-700 transition-all duration-300 transform hover:scale-105">
            {t('upload.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium hover:text-gray-800 transition-colors duration-300">
            {t('upload.subtitle')}
          </p>
        </div>

        {!result ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-12 border-2 border-gray-100 hover:border-green-200 transform hover:scale-105 transition-all duration-500">
            {!imagePreview ? (
              <div
                className={`border-3 border-dashed rounded-3xl p-12 md:p-16 text-center transition-all duration-500 ${
                  dragOver
                    ? 'border-green-500 bg-green-50 scale-105'
                    : 'border-gray-300 hover:border-green-400 hover:bg-green-50/30'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <UploadIcon className="w-20 h-20 text-gray-400 mx-auto mb-8 hover:text-green-500 hover:scale-110 transition-all duration-300" />
                <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium hover:text-gray-800 transition-colors duration-300">
                  {t('upload.dragdrop')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 rounded-xl text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <UploadIcon className="w-5 h-5 mr-3" />
                    {t('upload.browse')}
                  </button>
                  <span className="text-lg text-gray-500 font-medium">or</span>
                  <button
                    onClick={() => cameraInputRef.current?.click()}
                    className="inline-flex items-center px-8 py-4 border-2 border-transparent rounded-xl text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Camera className="w-5 h-5 mr-3" />
                    {t('upload.camera')}
                  </button>
                </div>
                <p className="text-base text-gray-500 mt-6 font-medium">
                  {t('upload.supported')}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative hover:scale-105 transition-transform duration-300">
                  <img
                    src={imagePreview}
                    alt="Selected plant"
                    className="w-full h-64 md:h-96 object-contain bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300"
                  />
                  <button
                    onClick={handleReset}
                    className="absolute top-4 right-4 p-3 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-opacity-100 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="inline-flex items-center px-10 py-5 border-2 border-transparent text-xl font-bold rounded-2xl text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        {t('upload.analyzing')}
                      </>
                    ) : (
                      <>
                        <UploadIcon className="w-6 h-6 mr-3" />
                        {t('upload.analyze')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-12 border-2 border-gray-100 hover:border-green-200 transform hover:scale-105 transition-all duration-500">
            <div className="text-center mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display hover:text-green-700 transition-colors duration-300">
                {t('upload.results.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={imagePreview!}
                  alt="Analyzed plant"
                  className="w-full h-64 object-contain bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:scale-105 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-6 h-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 font-display">
                      {t('upload.results.disease')}
                    </h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-4 hover:text-orange-700 transition-colors duration-300">
                    {result.disease}
                  </p>
                  <div className="flex items-center">
                    <span className="text-base font-medium text-gray-600 mr-3">
                      {t('upload.results.confidence')}:
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000 hover:bg-green-600"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-base font-bold text-gray-900">
                      {result.confidence}%
                    </span>
                  </div>
                </div>

                <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-100 hover:border-green-200 hover:bg-green-100/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">
                    {t('upload.results.treatment')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium hover:text-gray-800 transition-colors duration-300">
                    {result.treatment}
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 rounded-xl text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <UploadIcon className="w-5 h-5 mr-3" />
                    {t('upload.results.retry')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileSelect(e.target.files[0]);
            }
          }}
        />

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileSelect(e.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
}