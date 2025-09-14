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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('upload.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('upload.subtitle')}
          </p>
        </div>

        {!result ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {!imagePreview ? (
              <div
                className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-colors ${
                  dragOver
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-green-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <UploadIcon className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 mb-4">
                  {t('upload.dragdrop')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    <UploadIcon className="w-4 h-4 mr-2" />
                    {t('upload.browse')}
                  </button>
                  <span className="text-gray-500">or</span>
                  <button
                    onClick={() => cameraInputRef.current?.click()}
                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {t('upload.camera')}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {t('upload.supported')}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Selected plant"
                    className="w-full h-64 md:h-96 object-contain bg-gray-50 rounded-xl border"
                  />
                  <button
                    onClick={handleReset}
                    className="absolute top-2 right-2 p-2 bg-gray-800 bg-opacity-75 text-white rounded-full hover:bg-opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t('upload.analyzing')}
                      </>
                    ) : (
                      <>
                        <UploadIcon className="w-5 h-5 mr-2" />
                        {t('upload.analyze')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('upload.results.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={imagePreview!}
                  alt="Analyzed plant"
                  className="w-full h-64 object-contain bg-gray-50 rounded-xl border"
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t('upload.results.disease')}
                    </h3>
                  </div>
                  <p className="text-xl font-medium text-gray-800 mb-2">
                    {result.disease}
                  </p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">
                      {t('upload.results.confidence')}:
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {result.confidence}%
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('upload.results.treatment')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.treatment}
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    <UploadIcon className="w-4 h-4 mr-2" />
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