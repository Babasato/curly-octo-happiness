// app/components/ReadinessQuiz.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type QuestionId =
  | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'q8'
  | 'q9' | 'q10' | 'q11' | 'q12' | 'q13' | 'q14';

interface Question {
  id: QuestionId;
  text: string;
  choices: string[];
  correctIndex: number;
}

const QUESTIONS: Record<QuestionId, Question> = {
  q1: {
    id: 'q1',
    text: 'Count by 2s: 2, 4, 6, __, 10',
    choices: ['7', '8', '9', '12'],
    correctIndex: 1,
  },
  q2: {
    id: 'q2',
    text: 'Count by 5s: 5, 10, 15, __, 25',
    choices: ['18', '20', '22', '30'],
    correctIndex: 1,
  },
  q3: {
    id: 'q3',
    text: 'There are 3 plates. Each plate has 4 cookies. How many cookies are there in all?',
    choices: ['7', '12', '9', '16'],
    correctIndex: 1,
  },
  q4: {
    id: 'q4',
    text: 'What is 4 + 4 + 4?',
    choices: ['8', '12', '16', '10'],
    correctIndex: 1,
  },
  q5: {
    id: 'q5',
    text: 'What is 7 + 8?',
    choices: ['14', '15', '16', '13'],
    correctIndex: 1,
  },
  q6: {
    id: 'q6',
    text: 'A grid has 3 rows of dots, with 4 dots in each row. How many dots are there in all?',
    choices: ['7', '12', '10', '9'],
    correctIndex: 1,
  },
  q7: {
    id: 'q7',
    text: 'If 4 rows of 5 dots is 20 dots, how many dots are in 5 rows of 4?',
    choices: ['20', '9', '24', '16'],
    correctIndex: 0,
  },
  q8: {
    id: 'q8',
    text: 'First double 6. Then add 3. What do you get?',
    choices: ['12', '15', '9', '18'],
    correctIndex: 1,
  },
  q9: {
    id: 'q9',
    text: 'What is double 6?',
    choices: ['10', '12', '14', '16'],
    correctIndex: 1,
  },
  q10: {
    id: 'q10',
    text: 'Each box holds 6 pencils. There are 5 boxes. How many pencils are there in all?',
    choices: ['11', '30', '25', '35'],
    correctIndex: 1,
  },
  q11: {
    id: 'q11',
    text: 'You have 5 boxes with 6 pencils in each. How could you find the total by adding?',
    choices: ['6+6+6+6+6', '5+6', '6+5+6', '5×5'],
    correctIndex: 0,
  },
  q12: {
    id: 'q12',
    text: 'Count by 10s: 10, 20, __, 40',
    choices: ['25', '30', '35', '50'],
    correctIndex: 1,
  },
  q13: {
    id: 'q13',
    text: 'A garden has 4 rows of flowers, with 6 flowers in each row. How many flowers are there in the whole garden?',
    choices: ['10', '24', '20', '26'],
    correctIndex: 1,
  },
  q14: {
    id: 'q14',
    text: 'Maria has 3 bags. She puts 5 marbles in each bag. Then she gives away 4 marbles. How many marbles does she have left?',
    choices: ['11', '15', '19', '8'],
    correctIndex: 0,
  },
};

// Fixed skeleton order. Conditional follow-ups (q4, q9, q11) are spliced in
// at runtime, only when their parent question was missed.
const BASE_ORDER: QuestionId[] = ['q1', 'q2', 'q3', 'q5', 'q6', 'q7', 'q8', 'q10', 'q12', 'q13', 'q14'];
const CONDITIONAL_FOLLOW_UP: Partial<Record<QuestionId, QuestionId>> = {
  q3: 'q4',
  q8: 'q9',
  q10: 'q11',
};

type Domain =
  | 'skipCounting'
  | 'equalGroups'
  | 'additionFluency'
  | 'arrayReading'
  | 'numberFacts'
  | 'multiStep'
  | 'wordProblems';

const DOMAIN_MESSAGES: Record<Domain, string> = {
  skipCounting:
    "Skip-counting by 2s, 5s, and 10s isn't fully smooth yet. That's an area to strengthen before leaning hard on times tables, since most multiplication fact fluency is built on top of it.",
  equalGroups:
    'The idea that multiplication represents equal groups added together is an area to work on. A little more time with objects or pictures grouped into equal sets, before more times-tables drilling, should help this click.',
  additionFluency:
    'Quick, automatic addition recall is an area to strengthen. This matters for multiplication because the repeated-addition model leans on fast, confident addition underneath it.',
  arrayReading:
    'Reading rows-and-columns (arrays) as a multiplication model is an area to work on. More time with grids and arrays, counted both by rows and by columns, should make this feel more natural.',
  numberFacts:
    'Quick recall of basic number facts, like doubling, is an area to strengthen alongside multi-step practice.',
  multiStep:
    'Holding and following a short sequence of steps in order is an area to work on, separate from whether either step alone is hard. Short, two-step routines practiced regularly should help.',
  wordProblems:
    "Recognizing when a word problem calls for multiplication is an area to work on, even when the underlying math is fine once it's pointed out. Practicing turning a few word problems into the matching equation before solving should help.",
};

interface DomainScore {
  weight: number;
}

function scoreResults(answers: Record<string, boolean>): Domain[] {
  const scores: Record<Domain, number> = {
    skipCounting: 0,
    equalGroups: 0,
    additionFluency: 0,
    arrayReading: 0,
    numberFacts: 0,
    multiStep: 0,
    wordProblems: 0,
  };

  const wrongSkipCount = ['q1', 'q2', 'q12'].filter((id) => answers[id] === false).length;
  if (wrongSkipCount >= 2) scores.skipCounting += 1;

  if (answers.q3 === false) {
    if (answers.q4 === false) scores.additionFluency += 1;
    else scores.equalGroups += 1;
  }

  if (answers.q5 === false) scores.additionFluency += 1;

  if (answers.q6 === false) scores.arrayReading += 1;
  else if (answers.q7 === false) scores.arrayReading += 1;

  if (answers.q8 === false) {
    if (answers.q9 === false) scores.numberFacts += 1;
    else scores.multiStep += 1;
  }

  if (answers.q10 === false) {
    if (answers.q11 === false) scores.equalGroups += 1;
    else scores.wordProblems += 1;
  }

  if (answers.q13 === false) {
    scores.arrayReading += 0.5;
    scores.wordProblems += 0.5;
  }

  if (answers.q14 === false) {
    scores.multiStep += 0.5;
    scores.wordProblems += 0.5;
  }

  return (Object.keys(scores) as Domain[]).filter((domain) => scores[domain] >= 1);
}

interface ReadinessQuizProps {
  courseHref?: string;
  bundleGumroadUrl?: string;
}

export default function ReadinessQuiz({
  courseHref = '/multiplication-division-foundations',
  bundleGumroadUrl = 'https://homeschoolmath.gumroad.com/l/lishbb?_gl=1*185fx3k*_ga*MTk3NDU1NjcxNi4xNzM5ODk4Njgx*_ga_6LJN6D94N6*czE3OTEyNjk5ODgkbzI0MyRnMCR0MTc5MTI2OTk4OCRqNjAkbDAkaDA.',
}: ReadinessQuizProps) {
  const [sequence, setSequence] = useState<QuestionId[]>([BASE_ORDER[0]]);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [baseIndex, setBaseIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentId = sequence[currentIndex];
  const currentQuestion = currentId ? QUESTIONS[currentId] : null;

  const handleAnswer = (choiceIndex: number) => {
    if (!currentQuestion) return;
    const isCorrect = choiceIndex === currentQuestion.correctIndex;
    const nextAnswers = { ...answers, [currentQuestion.id]: isCorrect };
    setAnswers(nextAnswers);

    const followUp = CONDITIONAL_FOLLOW_UP[currentQuestion.id];
    const isBaseQuestion = BASE_ORDER.includes(currentQuestion.id);

    if (isBaseQuestion && followUp && !isCorrect) {
      setSequence((prev) => [...prev, followUp]);
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    const nextBaseIndex = isBaseQuestion ? baseIndex + 1 : baseIndex;
    setBaseIndex(nextBaseIndex);

    if (nextBaseIndex >= BASE_ORDER.length) {
      setFinished(true);
      return;
    }

    const nextBaseQuestion = BASE_ORDER[nextBaseIndex];
    setSequence((prev) => [...prev, nextBaseQuestion]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRetake = () => {
    setSequence([BASE_ORDER[0]]);
    setAnswers({});
    setCurrentIndex(0);
    setBaseIndex(0);
    setFinished(false);
  };

  if (finished) {
    const flaggedDomains = scoreResults(answers);

    return (
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1.5rem',
        }}
      >
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Your Results
        </h3>

        {flaggedDomains.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Nice work. Your child answered these the way a child ready for multiplication typically does. That
            doesn't mean every fact will be instant right away, but the foundational pieces are solid.
          </p>
        ) : (
          <>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Based on these answers, here are the areas worth strengthening before leaning hard on multiplication
              facts:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
              {flaggedDomains.map((domain) => (
                <li key={domain} style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  {DOMAIN_MESSAGES[domain]}
                </li>
              ))}
            </ul>
          </>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          <a
            href={bundleGumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get 30 More Practice Pages — $5
          </a>
          <Link
            href={courseHref}
            style={{
              background: 'var(--surface)',
              color: 'var(--primary)',
              border: '1px solid var(--primary)',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            See the Full Multiplication &amp; Division Course
          </Link>
          <button
            onClick={handleRetake}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.875rem',
              padding: '0.5rem',
            }}
          >
            Retake the check
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
      }}
    >
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
        Question {currentIndex + 1}
      </p>
      <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.25rem' }}>
        {currentQuestion.text}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {currentQuestion.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: '1rem',
            }}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}