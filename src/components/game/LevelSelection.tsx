import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, Trophy, Brain, Keyboard } from "lucide-react";
import { Level } from './types';

interface LevelSelectionProps {
  onLevelSelect: (level: Level) => void;
}

const LevelSelection = ({ onLevelSelect }: LevelSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Spell Check Game</h1>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p className="text-lg">
              Welcome to the most exciting spell check game! This is a fun and interactive way to improve your spelling skills. 
              Whether you're just starting to learn or want to become a spelling champion, this game will help you learn new words 
              and become better at spelling. You can listen to words, type them correctly, and track your progress as you play!
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mb-4">
          <p className="flex items-center justify-center gap-2">
            <Keyboard className="h-4 w-4" />
            Ready to start your spelling adventure?
          </p>
        </div>

        <div className="grid gap-4">
          <Button
            onClick={() => onLevelSelect("easy")}
            className="h-32 bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8" />
              <span className="text-xl font-bold">Easy</span>
              <span className="text-sm opacity-90">Simple, common words</span>
            </div>
          </Button>

          <Button
            onClick={() => onLevelSelect("medium")}
            className="h-32 bg-yellow-500 hover:bg-yellow-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2">
              <Trophy className="h-8 w-8" />
              <span className="text-xl font-bold">Medium</span>
              <span className="text-sm opacity-90">More challenging words</span>
            </div>
          </Button>

          <Button
            onClick={() => onLevelSelect("hard")}
            className="h-32 bg-red-500 hover:bg-red-600 transition-all transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">Hard</span>
              <span className="text-sm opacity-90">Complex vocabulary</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LevelSelection;