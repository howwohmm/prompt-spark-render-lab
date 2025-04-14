
import React, { useState } from 'react';
import PromptInput from '../components/PromptInput';
import ImageGrid from '../components/ImageGrid';
import { toast } from '../components/ui/use-toast';

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  const handlePromptSubmit = (prompt: string) => {
    setCurrentPrompt(prompt);
    setIsGenerating(true);
    
    // Display toast notification
    toast({
      title: "Generating images",
      description: `Creating 6 images for: "${prompt}"`,
      duration: 3000,
    });
    
    // In a real implementation, this would connect to an API
    // For now, we're just simulating the loading state
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Image Generator</h1>
        <p className="text-muted-foreground max-w-lg">
          Create stunning AI-generated images from text descriptions
        </p>
      </header>
      
      <main className="w-full max-w-5xl flex flex-col items-center">
        <PromptInput onSubmit={handlePromptSubmit} />
        
        {currentPrompt && (
          <div className="w-full mb-8">
            <p className="text-sm text-muted-foreground mb-2">Current prompt:</p>
            <p className="font-medium">{currentPrompt}</p>
          </div>
        )}
        
        <ImageGrid isGenerating={isGenerating} />
      </main>
    </div>
  );
};

export default Index;
