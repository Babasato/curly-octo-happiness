// app/components/WorksheetGenerator.tsx - FIXED VERSION
'use client';

import React, { useState, useEffect, useRef } from 'react';
import DownloadSection from './DownloadSection';

interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  hasVisual?: boolean;
  visualType?: 'shapes' | 'counting' | 'none';
  visualData?: {
    num1: number;
    num2: number;
    operation: '+' | '-' | '×';
    shape: string;
    color: string;
  };
}

// 🎯 FIXED: Added props to receive download tracking from parent
interface WorksheetGeneratorProps {
  onOpenLeadMagnet: () => void;
  downloadsRemaining: number;
  incrementDownloadCount: () => void;
  hasReceivedSignupBonus: boolean;
}

// FIXED: Age-appropriate grade configurations
const gradeConfigurations = {
  kindergarten: {
  availableTypes: ['Addition', 'Subtraction', 'Counting'],
  defaultTypes: ['Addition', 'Subtraction'],
  difficultyLevels: {
    easy: { range: '1-4', description: 'Numbers 1-4' },
    medium: { range: '1-5', description: 'Numbers 1-5' },
    hard: { range: '1-8', description: 'Numbers 1-8' }
  },
  description: 'Basic counting, addition, and subtraction within 8'
},
  first: {
    availableTypes: ['Addition', 'Subtraction', 'Word Problems'],
    defaultTypes: ['Addition', 'Subtraction'],
    difficultyLevels: {
      easy: { range: '1-10', description: 'Single-digit operations' },
      medium: { range: '1-15', description: 'Within 15' },
      hard: { range: '1-20', description: 'Within 20' }
    },
    description: 'Addition and subtraction within 20'
  },
  second: {
    availableTypes: ['Addition', 'Subtraction', 'Multiplication', 'Word Problems'],
    defaultTypes: ['Addition', 'Subtraction', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '1-20', description: 'Within 20' },
      medium: { range: '1-50', description: 'Within 50' },
      hard: { range: '1-100', description: 'Within 100' }
    },
    description: 'Two-digit operations, basic multiplication'
  },
  third: {
    availableTypes: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Word Problems'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '1-5', description: 'Basic facts 1-5' },
      medium: { range: '1-10', description: 'Facts 1-10' },
      hard: { range: '1-12', description: 'Full times tables' }
    },
    description: 'Multiplication, division, and multi-step problems'
  },
  fourth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Fractions'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '2-digit', description: 'Two-digit numbers' },
      medium: { range: '3-digit', description: 'Three-digit numbers' },
      hard: { range: '4-digit', description: 'Multi-digit operations' }
    },
    description: 'Multi-digit operations and fractions'
  },
  fifth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Fractions', 'Decimals'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: 'Basic', description: 'Simple fractions/decimals' },
      medium: { range: 'Intermediate', description: 'Mixed operations' },
      hard: { range: 'Advanced', description: 'Complex problems' }
    },
    description: 'Advanced operations with fractions and decimals'
  },
  sixth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Percent', 'Ratios'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: 'Intro', description: 'Basic ratios/percent' },
      medium: { range: 'Standard', description: 'Standard problems' },
      hard: { range: 'Advanced', description: 'Complex applications' }
    },
    description: 'Ratios, percentages, and pre-algebra'
  }
};

const wordProblemTemplates = {
  addition: [
    "{person} has {num1} {item}. {person} gets {num2} more. How many {item} are there now?",
    "There are {num1} {item} in the basket and {num2} on the table. How many {item} are there altogether?"
  ],
  subtraction: [
    "{person} had {num1} {item} and gave {num2} to a friend. How many {item} does {person} have left?",
    "There were {num1} {item} on the shelf. {num2} were sold. How many {item} remain?"
  ],
  multiplication: [
    "There are {num1} boxes. Each box has {num2} {item}. How many {item} are there total?",
    "{person} has {num1} bags. Each bag has {num2} {item}. How many {item} does {person} have?"
  ]
};

const items = ['apples', 'cookies', 'pencils', 'books', 'toys', 'crayons', 'markers'];
const people = ['Sarah', 'John', 'Emma', 'Michael', 'Lisa', 'David'];

const generateWordProblem = (grade: string, operation: string, difficulty: string): { question: string; answer: string } => {
  const item = items[Math.floor(Math.random() * items.length)];
  const person = people[Math.floor(Math.random() * people.length)];
  
  let num1, num2, question, answer;

  const getNumberRange = (base: number) => {
    const multipliers = { 
      kindergarten: { easy: 1, medium: 1.2, hard: 1.5 },
      first: { easy: 1, medium: 1.5, hard: 2 },
      second: { easy: 1, medium: 2, hard: 3 }
    };
    const gradeMultipliers = multipliers[grade as keyof typeof multipliers] || multipliers.second;
    return Math.floor(base * gradeMultipliers[difficulty as keyof typeof gradeMultipliers]);
  };

  switch (operation) {
    case 'addition':
      num1 = Math.floor(Math.random() * getNumberRange(6)) + 1;
      num2 = Math.floor(Math.random() * getNumberRange(6)) + 1;
      const additionTemplate = wordProblemTemplates.addition[Math.floor(Math.random() * wordProblemTemplates.addition.length)];
      question = additionTemplate.replace(/{person}/g, person).replace(/{item}/g, item).replace(/{num1}/g, num1.toString()).replace(/{num2}/g, num2.toString());
      answer = String(num1 + num2);
      break;

    case 'subtraction':
      num1 = Math.floor(Math.random() * getNumberRange(8)) + 3;
      num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
      const subtractionTemplate = wordProblemTemplates.subtraction[Math.floor(Math.random() * wordProblemTemplates.subtraction.length)];
      question = subtractionTemplate.replace(/{person}/g, person).replace(/{item}/g, item).replace(/{num1}/g, num1.toString()).replace(/{num2}/g, num2.toString());
      answer = String(num1 - num2);
      break;

    case 'multiplication':
      num1 = Math.floor(Math.random() * 4) + 2;
      num2 = Math.floor(Math.random() * 4) + 2;
      const multiplicationTemplate = wordProblemTemplates.multiplication[Math.floor(Math.random() * wordProblemTemplates.multiplication.length)];
      question = multiplicationTemplate.replace(/{person}/g, person).replace(/{item}/g, item).replace(/{num1}/g, num1.toString()).replace(/{num2}/g, num2.toString());
      answer = String(num1 * num2);
      break;

    default:
      num1 = Math.floor(Math.random() * 5) + 1;
      num2 = Math.floor(Math.random() * 5) + 1;
      question = `${person} has ${num1} ${item}. ${person} gets ${num2} more ${item}. How many ${item} does ${person} have now?`;
      answer = String(num1 + num2);
  }

  return { question, answer };
};

const generateMathProblem = (grade: string, index: number, problemTypes: string[], difficulty: string, usedCombinations: Set<string>): Problem => {
  const shouldBeWordProblem = Math.random() < 0.3 && problemTypes.includes('Word Problems');
  
  if (shouldBeWordProblem) {
    const wordOperations = [];
    if (problemTypes.includes('Addition')) wordOperations.push('addition');
    if (problemTypes.includes('Subtraction')) wordOperations.push('subtraction');
    if (problemTypes.includes('Multiplication')) wordOperations.push('multiplication');
    
    const operation = wordOperations[Math.floor(Math.random() * wordOperations.length)] || 'addition';
    const { question, answer } = generateWordProblem(grade, operation, difficulty);
    return { 
      id: index + 1, 
      question, 
      answer, 
      isWordProblem: true,
      hasVisual: false
    };
  }

  const shouldHaveVisual = (grade === 'kindergarten' || grade === 'first' || grade === 'second');
  
  let question = "";
  let answer = "";
  let num1 = 0;
  let num2 = 0;
  let operation: '+' | '-' | '×' = '+';
  let visualData = undefined;

  const availableOperations = [];
  if (problemTypes.includes('Addition')) availableOperations.push('+');
  if (problemTypes.includes('Subtraction')) availableOperations.push('-');
  if (problemTypes.includes('Multiplication') && grade !== 'kindergarten') availableOperations.push('×');

  operation = availableOperations.length > 0 
    ? availableOperations[Math.floor(Math.random() * availableOperations.length)] as '+' | '-' | '×'
    : '+';

  if (operation === '+') {
    const maxTotal = 8;
    num1 = Math.floor(Math.random() * 4) + 1;
    num2 = Math.floor(Math.random() * (maxTotal - num1)) + 1;
    
    if (num1 + num2 > maxTotal) {
      num2 = maxTotal - num1;
    }
    
    question = `${num1} + ${num2} = `;
    answer = String(num1 + num2);
    
    if (shouldHaveVisual) {
      visualData = {
        num1,
        num2,
        operation: '+',
        shape: '●',
        color: '#000000'
      };
    }
  } else if (operation === '-') {
    num1 = Math.floor(Math.random() * 5) + 3;
    num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
    
    if (num1 > 7) num1 = 7;
    if (num2 > 6) num2 = 6;
    if (num1 - num2 < 1) num2 = num1 - 1;
    
    question = `${num1} - ${num2} = `;
    answer = String(num1 - num2);
    
    if (shouldHaveVisual) {
      visualData = {
        num1,
        num2,
        operation: '-',
        shape: '●',
        color: '#000000'
      };
    }
  } else if (operation === '×') {
    num1 = Math.floor(Math.random() * 3) + 2;
    num2 = Math.floor(Math.random() * 3) + 2;
    
    if (num1 > 4) num1 = 4;
    if (num2 > 4) num2 = 4;
    if (num1 * num2 > 12) {
      num2 = Math.floor(12 / num1);
    }
    
    question = `${num1} × ${num2} = `;
    answer = String(num1 * num2);
    
    if (shouldHaveVisual && num1 <= 3 && num2 <= 4) {
      visualData = {
        num1,
        num2,
        operation: '×',
        shape: '●',
        color: '#000000'
      };
    }
  }

  return { 
    id: index + 1, 
    question, 
    answer, 
    isWordProblem: false,
    hasVisual: shouldHaveVisual && visualData !== undefined,
    visualType: 'shapes',
    visualData
  };
};

const useProblemGeneration = (grade: string, count: number, problemTypes: string[], difficulty: string) => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [isClient, setIsClient] = useState(false);
    const usedCombinationsRef = React.useRef<Set<string>>(new Set());

    useEffect(() => {
        setIsClient(true);
        const generateProblems = (c: number, l: string, types: string[], diff: string): Problem[] => {
            usedCombinationsRef.current.clear();
            return Array.from({ length: c }).map((_, i) => 
                generateMathProblem(l, i, types, diff, usedCombinationsRef.current)
            );
        };
        const generatedProblems = generateProblems(count, grade, problemTypes, difficulty);
        setProblems(generatedProblems);
    }, [count, grade, problemTypes, difficulty]);

    const title = `${grade.charAt(0).toUpperCase() + grade.slice(1)} Grade Math Worksheet - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

    return { problems, title, isClient };
};

// 🎯 FIXED: Receive props instead of using the hook
export default function WorksheetGenerator({ 
  onOpenLeadMagnet, 
  downloadsRemaining, 
  incrementDownloadCount,
  hasReceivedSignupBonus 
}: WorksheetGeneratorProps) {
  const [problemCount, setProblemCount] = useState(5);
  const [gradeLevel, setGradeLevel] = useState('first');
  const [difficulty, setDifficulty] = useState('easy');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [includeVisuals, setIncludeVisuals] = useState(true);
 
  
  const worksheetPreviewRef = useRef<HTMLDivElement>(null);
  const downloadSectionRef = useRef<HTMLDivElement>(null);
  
  const gradeConfig = gradeConfigurations[gradeLevel as keyof typeof gradeConfigurations];
  const [problemTypes, setProblemTypes] = useState<string[]>(gradeConfig.defaultTypes);
  
  const { problems, title, isClient } = useProblemGeneration(gradeLevel, problemCount, problemTypes, difficulty);
  
  // 🎯 REMOVED: No longer calling useDownloadTracker() here!
  // const { downloadsRemaining, incrementDownloadCount, downloadData } = useDownloadTracker();
  
  useEffect(() => {
    setProblemTypes(gradeConfig.defaultTypes);
  }, [gradeLevel]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
        setIsGenerating(false);
        setTimeout(() => {
          worksheetPreviewRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
    }, 500);
  };

  const handleProblemTypeChange = (type: string) => {
    setProblemTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const canDownload = downloadsRemaining > 0;
  
  const renderVisual = (problem: Problem) => {
    if (!includeVisuals || !problem.hasVisual || !problem.visualData) return null;
    
    const { num1, num2, operation } = problem.visualData;
    const shape = '●';
    const color = '#000000';

    if (operation === '+') {
      return (
        <div className="visual-container">
          <div className="visual-group">
            <div className="group-label">{num1}</div>
            <div className="shapes-row">
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i} className="shape" style={{ color }}>
                  {shape}
                </span>
              ))}
            </div>
          </div>
          <span className="operation-symbol">+</span>
          <div className="visual-group">
            <div className="group-label">{num2}</div>
            <div className="shapes-row">
              {Array.from({ length: num2 }).map((_, i) => (
                <span key={i} className="shape" style={{ color }}>
                  {shape}
                </span>
              ))}
            </div>
          </div>
          <span className="operation-symbol">=</span>
          <div className="visual-group">
            <div className="group-label">?</div>
            <div className="shapes-row">
              <span className="count-hint">Count them!</span>
            </div>
          </div>
        </div>
      );
    } else if (operation === '-') {
      return (
        <div className="visual-container">
          <div className="visual-group">
            <div className="group-label">Start with {num1}</div>
            <div className="shapes-row">
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i} className="shape-with-cross" style={{ color }}>
                  {shape}
                  {i >= (num1 - num2) && <span className="cross">✕</span>}
                </span>
              ))}
            </div>
            <div className="subtraction-explanation">Take away {num2}</div>
          </div>
        </div>
      );
    } else if (operation === '×') {
      return (
        <div className="visual-container">
          <div className="multiplication-groups">
            <div className="multiplication-label">{num1} groups of {num2}</div>
            {Array.from({ length: num1 }).map((_, groupIndex) => (
              <div key={groupIndex} className="multiplication-group">
                <div className="group-label">Group {groupIndex + 1}</div>
                <div className="shapes-row">
                  {Array.from({ length: num2 }).map((_, i) => (
                    <span key={i} className="shape" style={{ color }}>
                      {shape}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="multiplication-explanation">Count all the dots!</div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  if (!isClient) {
    return (
      <div className="container">
        <h1 className="title">Homeschool Math Worksheet Generator</h1>
        <div className="card">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div className="spinner" style={{ margin: '0 auto 20px', width: '32px', height: '32px' }}></div>
            <p>Loading worksheet generator...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Homeschool Math Worksheet Generator</h1>
      <p className="subtitle">
        Create custom worksheets and download the clean PDF. (Downloads Remaining: <strong>{downloadsRemaining}</strong>)
      </p>

      

      <div className="card controls-card">
        <div className="control-group">
            <label className="label" htmlFor="count">Number of Problems</label>
            <input
                id="count"
                type="number"
                min="5"
                max="20"
                value={problemCount}
                onChange={(e) => setProblemCount(Math.min(20, Math.max(5, parseInt(e.target.value) || 10)))}
                className="input-field"
            />
            <div className="helper-text">5-20 problems</div>
        </div>
        
        <div className="control-group">
            <label className="label" htmlFor="level">Grade Level</label>
            <select
                id="level"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="input-field"
            >
                <option value="kindergarten">Kindergarten</option>
                <option value="first">First Grade</option>
                <option value="second">Second Grade</option>
                <option value="third">Third Grade</option>
                <option value="fourth">Fourth Grade</option>
                <option value="fifth">Fifth Grade</option>
                <option value="sixth">Sixth Grade</option>
            </select>
            <div className="helper-text">{gradeConfig.description}</div>
        </div>

        <div className="control-group">
            <label className="label" htmlFor="difficulty">Difficulty Level</label>
            <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="input-field"
            >
                <option value="easy">Easy - {gradeConfig.difficultyLevels.easy.description}</option>
                <option value="medium">Medium - {gradeConfig.difficultyLevels.medium.description}</option>
                <option value="hard">Hard - {gradeConfig.difficultyLevels.hard.description}</option>
            </select>
            <div className="helper-text">Choose problem difficulty</div>
        </div>

        <div className="control-group">
          <label className="label">Problem Types</label>
          <div className="checkbox-group">
            {gradeConfig.availableTypes.map(type => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={problemTypes.includes(type)}
                  onChange={() => handleProblemTypeChange(type)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{type}</span>
              </label>
            ))}
          </div>
          <div className="helper-text">Select one or more types</div>
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeVisuals}
              onChange={() => setIncludeVisuals(!includeVisuals)}
              className="checkbox-input"
            />
            <span className="checkbox-text">Include Visual Aids (for younger grades)</span>
          </label>
          <div className="helper-text">Adds colorful shapes to illustrate problems</div>
        </div>
        
        <button 
            onClick={handleGenerate} 
            disabled={isGenerating || problemTypes.length === 0} 
            className="generate-button"
        >
            {isGenerating ? (
                <>
                    <div className="spinner"></div>
                    Generating...
                </>
            ) : (
                <>
                    Generate Worksheet
                </>
            )}
        </button>
      </div>

      <div ref={worksheetPreviewRef}>
        <h2 className="section-title">
          Worksheet Preview
          <div className="preview-controls">
            <label className="toggle-answers">
              <input
                type="checkbox"
                checked={showAnswers}
                onChange={() => setShowAnswers(!showAnswers)}
              />
              Show Answers
            </label>
            <label className="toggle-answers">
              <input
                type="checkbox"
                checked={includeVisuals}
                onChange={() => setIncludeVisuals(!includeVisuals)}
              />
              Show Visuals
            </label>
          </div>
        </h2>
        
        <div className="card preview-card">
          <h3 className="preview-title">{title}</h3>
          <div className="problem-grid">
              {problems.map((p, index) => (
                  <div key={p.id} className="problem-item">
                      <span className="problem-number">{index + 1}.</span> 
                      <span className="problem-text">{p.question}</span>
                      {renderVisual(p)}
                      {showAnswers ? (
                        <div className="answer-line">
                          <span className="answer-label">Answer:</span> 
                          <span className="answer-value">{p.answer}</span>
                        </div>
                      ) : (
                        <div className="answer-line">
                          <span className="answer-label">Answer:</span> 
                          <div className="answer-underline"></div>
                        </div>
                      )}
                  </div>
              ))}
          </div>
        </div>
      </div>

      <div ref={downloadSectionRef}>
        <h2 className="section-title">Download</h2>
        
        <div className="download-wrapper">
    {canDownload ? (
        <DownloadSection 
            problems={problems} 
            title={title} 
            onDownloadComplete={incrementDownloadCount}
            onOpenLeadMagnet={onOpenLeadMagnet} 
            includeVisuals={includeVisuals}
            downloadsRemaining={downloadsRemaining}
            hasReceivedSignupBonus={hasReceivedSignupBonus}
        />
            ) : (
                <div className="card limit-card"> 
                    <h3 className="limit-title">Nice work! You've generated 10 worksheets today</h3>
                    <p className="limit-description">
                      Join our community of 5,000+ homeschool parents to get <strong>10 more downloads today</strong> plus helpful teaching resources.
                    </p>
                    <button 
                      onClick={onOpenLeadMagnet} 
                      className="generate-button limit-button"
                    >
                      Join Our Community
                    </button>
                    <p className="limit-note">Free to join • No credit card required</p>
                </div>
            )}
        </div>
      </div>

      <style jsx global>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 30px 16px;
          font-family: 'Inter', sans-serif;
        }

        .title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          text-align: center;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 16px;
          color: #4b5563;
          text-align: center;
          margin-bottom: 30px;
        }

        .info-banner {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid #3b82f6;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 24px;
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .info-banner-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .info-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .info-text {
          flex: 1;
          font-size: 14px;
          color: #1e40af;
          font-weight: 500;
          min-width: 200px;
        }

        .info-banner-button {
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .info-banner-button:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .info-banner-close {
          background: transparent;
          border: none;
          color: #3b82f6;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .info-banner-close:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .section-title {
            font-size: 24px;
            font-weight: 700;
            color: #374151;
            margin-top: 40px;
            margin-bottom: 20px;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .preview-controls {
          display: flex;
          gap: 20px;
        }

        .toggle-answers {
          font-size: 14px;
          font-weight: normal;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .controls-card {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: flex-start;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-width: 200px;
        }

        .label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
        }

        .helper-text {
          font-size: 12px;
          color: #6b7280;
          font-style: italic;
        }

        .input-field {
            padding: 10px 12px;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.2s;
            background: #f9fafb;
        }

        .input-field:focus {
            border-color: #3b82f6;
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .checkbox-input {
          width: 16px;
          height: 16px;
        }

        .checkbox-text {
          color: #374151;
        }

        .generate-button {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 42px;
        }

        .generate-button:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
        }
        
        .generate-button:disabled {
            background: #9ca3af;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .preview-card {
            min-height: 200px;
        }
        
        .preview-title {
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 20px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e5e7eb;
        }

        .problem-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .problem-item {
            font-size: 15px;
            color: #374151;
            padding: 16px;
            border-left: 3px solid #60a5fa;
            background: #f5f7fa;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .problem-number {
            font-weight: 600;
            color: #3b82f6;
        }

        .problem-text {
            line-height: 1.4;
        }
        
        .answer-line {
            padding-top: 8px;
            color: #6b7280;
            font-size: 12px;
            border-top: 1px dashed #d1d5db;
            margin-top: 4px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .answer-label {
            font-weight: 600;
            color: #374151;
        }

        .answer-value {
            color: #dc2626;
            font-weight: bold;
        }

        .answer-underline {
            flex: 1;
            border-bottom: 1px solid #000;
            margin-left: 5px;
            min-width: 60px;
            height: 16px;
        }

        /* FIXED: Visual styles */
        .visual-container {
          margin: 12px 0;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .visual-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          background: white;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          min-width: 80px;
        }

        .shapes-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2px;
          max-width: 120px;
          min-height: 24px;
        }

        .shape {
          font-size: 18px;
          display: inline-block;
          line-height: 1;
        }

        .shape.crossed {
          position: relative;
        }

        .shape.crossed::after {
          content: '✕';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #dc2626;
          font-size: 14px;
          font-weight: bold;
        }

        .group-label {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .operation {
          font-size: 16px;
          font-weight: bold;
          color: #3b82f6;
        }

        .count-hint {
          font-size: 12px;
          color: #6b7280;
          font-style: italic;
        }

        .explanation {
          font-size: 11px;
          color: #6b7280;
          margin-top: 4px;
          font-style: italic;
        }

        .multiplication-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .multiplication-label {
          font-size: 12px;
          font-weight: 600;
          color: #374151;
        }

        .groups-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .multiplication-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px;
          background: white;
          border-radius: 4px;
          border: 1px dashed #9ca3af;
        }

        /* TIER 2: Limit Reached Card */
        .limit-card {
            text-align: center;
            padding: 40px 32px;
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            max-width: 600px;
            margin: 0 auto;
        }

        .celebration-icon {
            font-size: 48px;
            margin-bottom: 16px;
            animation: bounce 1s ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .limit-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #92400e;
        }
        
        .limit-description {
            font-size: 16px;
            margin-bottom: 24px;
            color: #78350f;
            line-height: 1.6;
        }

        .limit-button {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
            margin: 0 auto;
        }

        .limit-button:hover {
            background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
            box-shadow: 0 6px 15px rgba(245, 158, 11, 0.4);
        }

        .limit-note {
            margin-top: 12px;
            font-size: 13px;
            color: #92400e;
            font-style: italic;
        }

        .download-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        @media (max-width: 640px) {
            .controls-card {
                flex-direction: column;
                align-items: stretch;
            }
            .title {
                font-size: 28px;
            }
            .subtitle {
                font-size: 14px;
            }
            .control-group {
                min-width: 100%;
            }
            .section-title {
                flex-direction: column;
                gap: 10px;
                align-items: flex-start;
            }
            .preview-controls {
                flex-direction: column;
                gap: 10px;
            }
            .info-banner-content {
                flex-direction: column;
                align-items: stretch;
                text-align: center;
            }
            .info-text {
                min-width: 100%;
            }
            .info-banner-button {
                width: 100%;
            }
            .info-banner-close {
                position: absolute;
                top: 12px;
                right: 12px;
            }
            .info-banner {
                position: relative;
                padding-right: 40px;
            }
            .limit-card {
                padding: 32px 20px;
            }
            .limit-title {
                font-size: 20px;
            }
            .visual-container {
              gap: 8px;
            }
            .visual-group {
              min-width: 60px;
            }
        }
      `}</style>
    </div>
  );
}