// app/search/SearchClient.tsx
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Page = {
  title: string
  description: string
  href: string
  tags: string[]
  category: 'worksheet' | 'guide' | 'resource'
}

const ALL_PAGES: Page[] = [
  // ===== CORE PAGES =====
  { title: 'Home', description: 'Generate free custom printable math worksheets for grades K–6.', href: '/', tags: ['home', 'generator', 'worksheets', 'free'], category: 'resource' },
  { title: 'About', description: 'Why we built free printable math worksheets for homeschool families.', href: '/about', tags: ['about', 'homeschool', 'mission'], category: 'resource' },
  { title: 'Contact', description: 'Get in touch with the HomeschoolMath team.', href: '/contact', tags: ['contact', 'support', 'help'], category: 'resource' },
  { title: 'Resources', description: 'Homeschool planners, Notion templates, and curriculum tools.', href: '/resources', tags: ['resources', 'planner', 'curriculum', 'notion'], category: 'resource' },
  { title: 'How to Use', description: 'Step-by-step guide to generating and downloading your worksheets.', href: '/how-to-use', tags: ['how to use', 'guide', 'instructions', 'download'], category: 'resource' },
  { title: 'Teaching Tips', description: 'Practical tips for teaching math to homeschool children.', href: '/teaching-tips', tags: ['teaching', 'tips', 'homeschool', 'strategies'], category: 'resource' },
  { title: 'Privacy Policy', description: 'How we handle your data and privacy on HomeschoolMath.site.', href: '/privacy-policy', tags: ['privacy', 'policy', 'data'], category: 'resource' },
  { title: 'Terms of Service', description: 'Terms and conditions for using HomeschoolMath.site.', href: '/terms-of-service', tags: ['terms', 'service', 'legal'], category: 'resource' },
  { title: 'Cookie Policy', description: 'How we use cookies on HomeschoolMath.site.', href: '/cookies', tags: ['cookies', 'policy', 'legal'], category: 'resource' },

  // ===== MATH TRICKS & GUIDES =====
  { title: 'Math Tricks & Guides Hub', description: 'All math trick guides in one place — perfect for parents and kids.', href: '/math-tricks', tags: ['guides', 'tricks', 'mental math', 'hub'], category: 'guide' },
  { title: 'Multiplying by 9 Trick', description: 'The finger trick that makes the 9 times table effortless.', href: '/multiplying-by-9-trick', tags: ['multiplication', '9 times table', 'trick', 'fingers', 'mental math'], category: 'guide' },
  { title: 'Borrowing in Subtraction', description: 'How to regroup when subtracting larger digits from smaller ones.', href: '/borrowing-in-subtraction', tags: ['subtraction', 'borrowing', 'regrouping', 'carrying'], category: 'guide' },
  { title: 'Place Value Explained', description: 'What each digit position means and why it matters.', href: '/place-value-explained', tags: ['place value', 'ones', 'tens', 'hundreds', 'thousands'], category: 'guide' },
  { title: 'Regrouping in Addition Explained', description: 'Carrying in addition — what is happening and why.', href: '/regrouping-in-addition-explained', tags: ['addition', 'regrouping', 'carrying', 'column addition'], category: 'guide' },
  { title: 'Long Division Steps for Kids', description: 'Divide, multiply, subtract, bring down — explained clearly.', href: '/long-division-steps-for-kids', tags: ['long division', 'division', 'steps', 'kids'], category: 'guide' },
  { title: 'What Is a Numerator', description: 'Understanding the top number in a fraction.', href: '/what-is-a-numerator', tags: ['fractions', 'numerator', 'denominator', 'top number'], category: 'guide' },
  { title: 'Skip Counting Explained', description: 'Why skip counting matters and how to build the skill fast.', href: '/skip-counting-explained', tags: ['skip counting', 'patterns', 'multiplication', 'counting'], category: 'guide' },
  { title: 'How to Simplify Fractions', description: 'Finding the GCF and reducing fractions to lowest terms.', href: '/how-to-simplify-fractions', tags: ['fractions', 'simplify', 'reduce', 'GCF', 'lowest terms'], category: 'guide' },
  { title: 'How to Read Decimals', description: 'Simple method for reading and understanding decimal numbers.', href: '/how-to-read-decimals', tags: ['decimals', 'tenths', 'hundredths', 'decimal point'], category: 'guide' },
  { title: 'How to Tell Time', description: 'Step-by-step guide to reading analog and digital clocks.', href: '/how-to-tell-time', tags: ['time', 'clock', 'analog', 'hours', 'minutes'], category: 'guide' },
  { title: 'Multiplying by 11 Trick', description: 'The pattern trick that makes the 11 times table instant — single and double digits.', href: '/multiplying-by-11-trick', tags: ['multiplication', '11 times table', 'trick', 'pattern', 'mental math'], category: 'guide' },
  { title: 'Long Division with Remainders', description: 'What to do when long division doesn\'t divide evenly — step by step.', href: '/long-division-with-remainders', tags: ['long division', 'remainders', 'division', 'steps'], category: 'guide' },
  { title: 'What Is a Denominator', description: 'Understanding the bottom number in a fraction and what it means.', href: '/what-is-a-denominator', tags: ['fractions', 'denominator', 'bottom number', 'equal parts'], category: 'guide' },
  { title: 'How to Multiply Fractions', description: 'Multiply tops, multiply bottoms, simplify — no common denominator needed.', href: '/how-to-multiply-fractions', tags: ['fractions', 'multiply', 'multiplication', 'simplify'], category: 'guide' },
  { title: 'How to Divide Fractions', description: 'Keep Change Flip explained simply — with worked examples.', href: '/how-to-divide-fractions', tags: ['fractions', 'divide', 'keep change flip', 'division'], category: 'guide' },
  // ===== OPERATION PRACTICE HUBS =====
  { title: 'Addition Practice', description: 'All addition worksheets and resources in one place.', href: '/addition-practice', tags: ['addition', 'practice', 'hub', 'adding'], category: 'worksheet' },
  { title: 'Subtraction Practice', description: 'All subtraction worksheets and resources in one place.', href: '/subtraction-practice', tags: ['subtraction', 'practice', 'hub', 'minus'], category: 'worksheet' },
  { title: 'Multiplication Practice', description: 'All multiplication worksheets and resources in one place.', href: '/multiplication-practice', tags: ['multiplication', 'practice', 'hub', 'times tables'], category: 'worksheet' },
  { title: 'Division Practice', description: 'All division worksheets and resources in one place.', href: '/division-practice', tags: ['division', 'practice', 'hub', 'long division'], category: 'worksheet' },
  { title: 'Fractions Practice', description: 'All fractions worksheets and resources in one place.', href: '/fractions-practice', tags: ['fractions', 'practice', 'hub', 'numerator', 'denominator'], category: 'worksheet' },
  { title: 'Decimals Practice', description: 'All decimals worksheets and resources in one place.', href: '/decimals-practice', tags: ['decimals', 'practice', 'hub', 'tenths', 'hundredths'], category: 'worksheet' },
  { title: 'Word Problems', description: 'Multi-step word problems across all operations.', href: '/word-problems', tags: ['word problems', 'story problems', 'problem solving'], category: 'worksheet' },
  { title: 'Place Value Worksheets', description: 'Ones, tens, hundreds, and thousands place value practice.', href: '/place-value', tags: ['place value', 'ones', 'tens', 'hundreds', 'digits'], category: 'worksheet' },
  { title: 'Area & Perimeter Worksheets', description: 'Calculate area and perimeter of shapes with printable practice sheets.', href: '/area-perimeter', tags: ['area', 'perimeter', 'geometry', 'shapes', 'measurement'], category: 'worksheet' },

  // ===== GRADE LEVEL HUBS =====
  { title: 'Kindergarten Worksheets', description: 'Counting, number recognition, shapes, and early math for Kindergarten.', href: '/kindergarten-worksheets', tags: ['kindergarten', 'counting', 'numbers', 'shapes', 'k'], category: 'worksheet' },
  { title: 'Grade 1 Worksheets', description: 'Addition, subtraction, place value, and word problems for Grade 1.', href: '/grade-1-worksheets', tags: ['grade 1', 'addition', 'subtraction', 'place value'], category: 'worksheet' },
  { title: 'Grade 2 Worksheets', description: 'Two-digit addition, subtraction, time, and money for Grade 2.', href: '/grade-2-worksheets', tags: ['grade 2', 'addition', 'subtraction', 'time', 'money'], category: 'worksheet' },
  { title: 'Grade 3 Worksheets', description: 'Multiplication, division, fractions, and word problems for Grade 3.', href: '/grade-3-worksheets', tags: ['grade 3', 'multiplication', 'division', 'fractions'], category: 'worksheet' },
  { title: 'Grade 4 Worksheets', description: 'Long division, fractions, decimals, and geometry for Grade 4.', href: '/grade-4-worksheets', tags: ['grade 4', 'long division', 'fractions', 'decimals'], category: 'worksheet' },
  { title: 'Grade 5 Worksheets', description: 'Fractions, decimals, percentages, and word problems for Grade 5.', href: '/grade-5-worksheets', tags: ['grade 5', 'fractions', 'decimals', 'percentages'], category: 'worksheet' },
  { title: 'Grade 6 Worksheets', description: 'Ratios, percentages, expressions, and algebra intro for Grade 6.', href: '/grade-6-worksheets', tags: ['grade 6', 'ratios', 'percentages', 'algebra', 'expressions'], category: 'worksheet' },

  // ===== ADDITION CHILD PAGES =====
  { title: 'Addition Basic Facts Worksheets', description: 'Single-digit addition facts practice with answer keys.', href: '/addition-basic-facts-worksheets', tags: ['addition', 'basic facts', 'single digit', 'fluency'], category: 'worksheet' },
  { title: 'Addition Number Lines Worksheets', description: 'Practice addition using number lines — great for visual learners.', href: '/addition-number-lines-worksheets', tags: ['addition', 'number lines', 'visual', 'counting on'], category: 'worksheet' },
  { title: 'Addition Shape Counting Worksheets', description: 'Count and add shapes — a hands-on introduction to addition.', href: '/addition-shape-counting-worksheets', tags: ['addition', 'shapes', 'counting', 'visual', 'kindergarten'], category: 'worksheet' },
  { title: 'Two-Digit Addition Without Regrouping Worksheets', description: 'Two-digit addition practice with no carrying required.', href: '/addition-two-digit-no-regrouping-worksheets', tags: ['addition', 'two digit', 'no regrouping', 'no carrying'], category: 'worksheet' },
  { title: 'Two-Digit Addition With Regrouping Worksheets', description: 'Two-digit addition practice including carrying and regrouping.', href: '/addition-two-digit-regrouping-worksheets', tags: ['addition', 'two digit', 'regrouping', 'carrying'], category: 'worksheet' },
  { title: 'Addition Word Problems Worksheets', description: 'Real-world addition word problems for grades K–3.', href: '/addition-word-problems-worksheets', tags: ['addition', 'word problems', 'story problems'], category: 'worksheet' },

  // ===== SUBTRACTION CHILD PAGES =====
  { title: 'Subtraction Basic Facts Worksheets', description: 'Single-digit subtraction facts practice with answer keys.', href: '/subtraction-basic-facts-worksheets', tags: ['subtraction', 'basic facts', 'single digit', 'fluency'], category: 'worksheet' },
  { title: 'Subtraction Shape Counting Worksheets', description: 'Cross out shapes to subtract — visual subtraction for beginners.', href: '/subtraction-shape-counting-worksheets', tags: ['subtraction', 'shapes', 'counting', 'visual', 'kindergarten'], category: 'worksheet' },
  { title: 'Subtraction Take Away Worksheets', description: 'Take-away subtraction practice with objects and pictures.', href: '/subtraction-take-away-worksheets', tags: ['subtraction', 'take away', 'visual', 'beginner'], category: 'worksheet' },
  { title: 'Two-Digit Subtraction Without Borrowing Worksheets', description: 'Two-digit subtraction with no borrowing or regrouping needed.', href: '/subtraction-two-digit-no-borrowing-worksheets', tags: ['subtraction', 'two digit', 'no borrowing', 'no regrouping'], category: 'worksheet' },
  { title: 'Two-Digit Subtraction With Borrowing Worksheets', description: 'Two-digit subtraction practice including borrowing and regrouping.', href: '/subtraction-two-digit-borrowing-worksheets', tags: ['subtraction', 'two digit', 'borrowing', 'regrouping'], category: 'worksheet' },
  { title: 'Subtraction Word Problems Worksheets', description: 'Real-world subtraction word problems for grades K–3.', href: '/subtraction-word-problems-worksheets', tags: ['subtraction', 'word problems', 'story problems'], category: 'worksheet' },

  // ===== MULTIPLICATION CHILD PAGES =====
  { title: 'Multiplication Array Visuals Worksheets', description: 'Use arrays to visualise and understand multiplication.', href: '/multiplication-array-visuals-worksheets', tags: ['multiplication', 'arrays', 'visual', 'groups'], category: 'worksheet' },
  { title: 'Multiplication Fact Families Worksheets', description: 'Explore the relationship between multiplication and division fact families.', href: '/multiplication-fact-families-worksheets', tags: ['multiplication', 'fact families', 'division', 'relationship'], category: 'worksheet' },
  { title: 'Multiplication Missing Factors Worksheets', description: 'Find the missing factor — builds flexible multiplication thinking.', href: '/multiplication-missing-factors-worksheets', tags: ['multiplication', 'missing factors', 'algebra', 'unknown'], category: 'worksheet' },
  { title: 'Multiplication Mixed Facts Worksheets', description: 'Mixed times tables practice across all multiplication facts.', href: '/multiplication-mixed-facts-worksheets', tags: ['multiplication', 'mixed facts', 'times tables', 'fluency'], category: 'worksheet' },
  { title: 'Times Tables Worksheets', description: 'Printable times tables practice sheets for all table facts 1–12.', href: '/multiplication-times-tables-worksheets', tags: ['times tables', 'multiplication', 'facts', '1 to 12'], category: 'worksheet' },
  { title: 'Multiplication Word Problems Worksheets', description: 'Real-world multiplication word problems for grades 3–5.', href: '/multiplication-word-problems-worksheets', tags: ['multiplication', 'word problems', 'story problems'], category: 'worksheet' },

  // ===== DIVISION CHILD PAGES =====
  { title: 'Division Basic Facts Worksheets', description: 'Single-digit division facts practice with answer keys.', href: '/division-basic-facts-worksheets', tags: ['division', 'basic facts', 'single digit', 'fluency'], category: 'worksheet' },
  { title: 'Division Equal Sharing Worksheets', description: 'Equal sharing and grouping — a visual introduction to division.', href: '/division-equal-sharing-worksheets', tags: ['division', 'equal sharing', 'groups', 'visual', 'beginner'], category: 'worksheet' },
  { title: 'Division Fact Families Worksheets', description: 'Multiplication and division fact families to build number sense.', href: '/division-fact-families-worksheets', tags: ['division', 'fact families', 'multiplication', 'relationship'], category: 'worksheet' },
  { title: 'Division Inverse Operations Worksheets', description: 'Use multiplication to check division — inverse operations practice.', href: '/division-inverse-operations-worksheets', tags: ['division', 'inverse operations', 'multiplication', 'check'], category: 'worksheet' },
  { title: 'Division Missing Divisors Worksheets', description: 'Find the missing divisor or quotient in division equations.', href: '/division-missing-divisors-worksheets', tags: ['division', 'missing divisors', 'unknown', 'algebra'], category: 'worksheet' },
  { title: 'Division Mixed Practice Worksheets', description: 'Mixed division facts practice across all divisors.', href: '/division-mixed-practice-worksheets', tags: ['division', 'mixed practice', 'fluency', 'review'], category: 'worksheet' },

  // ===== FRACTIONS CHILD PAGES =====
  { title: 'Fraction Basics Worksheets', description: 'Identifying fractions, numerators, denominators, and equal parts.', href: '/fraction-basics-worksheets', tags: ['fractions', 'basics', 'numerator', 'denominator', 'equal parts'], category: 'worksheet' },
  { title: 'Equivalent Fractions Worksheets', description: 'Finding and identifying equivalent fractions with visual models.', href: '/fraction-equivalent-worksheets', tags: ['fractions', 'equivalent', 'equal', 'same value'], category: 'worksheet' },
  { title: 'Comparing Fractions Worksheets', description: 'Compare fractions using greater than, less than, and equal to.', href: '/fraction-comparing-worksheets', tags: ['fractions', 'comparing', 'greater than', 'less than', 'ordering'], category: 'worksheet' },
  { title: 'Fraction Addition & Subtraction Worksheets', description: 'Add and subtract fractions with like and unlike denominators.', href: '/fraction-addition-subtraction-worksheets', tags: ['fractions', 'addition', 'subtraction', 'like denominators', 'unlike denominators'], category: 'worksheet' },
  { title: 'Fraction Multiplication & Division Worksheets', description: 'Multiply and divide fractions with printable practice sheets.', href: '/fraction-multiplication-division-worksheets', tags: ['fractions', 'multiplication', 'division', 'multiply', 'divide'], category: 'worksheet' },
  { title: 'Fraction Word Problems Worksheets', description: 'Real-world fraction word problems for grades 3–6.', href: '/fraction-word-problems-worksheets', tags: ['fractions', 'word problems', 'story problems'], category: 'worksheet' },

  // ===== DECIMALS CHILD PAGES =====
  { title: 'Decimal Addition Worksheets', description: 'Add decimals to tenths and hundredths with printable practice sheets.', href: '/decimal-addition-worksheets', tags: ['decimals', 'addition', 'tenths', 'hundredths'], category: 'worksheet' },
  { title: 'Decimal Subtraction Worksheets', description: 'Subtract decimals with printable practice sheets and answer keys.', href: '/decimal-subtraction-worksheets', tags: ['decimals', 'subtraction', 'tenths', 'hundredths'], category: 'worksheet' },
  { title: 'Decimal Place Value Worksheets', description: 'Understand place value in decimal numbers — tenths, hundredths, thousandths.', href: '/decimal-place-value-worksheets', tags: ['decimals', 'place value', 'tenths', 'hundredths', 'thousandths'], category: 'worksheet' },
  { title: 'Decimal Word Problems Worksheets', description: 'Real-world decimal word problems for grades 4–6.', href: '/decimal-word-problems-worksheets', tags: ['decimals', 'word problems', 'story problems'], category: 'worksheet' },
  { title: 'Decimal Multiplication Worksheets', description: 'Multiply decimals with printable practice sheets and answer keys.', href: '/decimals-multiplication-worksheets', tags: ['decimals', 'multiplication', 'multiply', 'tenths'], category: 'worksheet' },
  { title: 'Decimal Division Worksheets', description: 'Divide decimals with printable practice sheets and answer keys.', href: '/decimals-division-worksheets', tags: ['decimals', 'division', 'divide', 'tenths'], category: 'worksheet' },

  // ===== WORD PROBLEMS CHILD PAGES =====
  { title: 'Addition Word Problems Worksheets', description: 'Single and multi-digit addition word problems with answer keys.', href: '/word-problems-addition-worksheets', tags: ['word problems', 'addition', 'story problems'], category: 'worksheet' },
  { title: 'Subtraction Word Problems Worksheets', description: 'Subtraction word problems for grades K–4 with answer keys.', href: '/word-problems-subtraction-worksheets', tags: ['word problems', 'subtraction', 'story problems'], category: 'worksheet' },
  { title: 'Multiplication Word Problems Worksheets', description: 'Multiplication word problems for grades 3–5 with answer keys.', href: '/word-problems-multiplication-worksheets', tags: ['word problems', 'multiplication', 'story problems'], category: 'worksheet' },
  { title: 'Division Word Problems Worksheets', description: 'Division word problems for grades 3–6 with answer keys.', href: '/word-problems-division-worksheets', tags: ['word problems', 'division', 'story problems'], category: 'worksheet' },
  { title: 'Multi-Step Word Problems Worksheets', description: 'Challenging multi-step word problems across mixed operations.', href: '/word-problems-multi-step-worksheets', tags: ['word problems', 'multi-step', 'mixed operations', 'challenge'], category: 'worksheet' },
  { title: 'Mixed Operations Word Problems Worksheets', description: 'Word problems mixing addition, subtraction, multiplication, and division.', href: '/word-problems-mixed-operations-worksheets', tags: ['word problems', 'mixed operations', 'all operations'], category: 'worksheet' },

  // ===== GRADE LEVEL OPERATION PAGES =====
  { title: 'Kindergarten Addition Worksheets', description: 'Simple addition practice for Kindergarten with visuals and answer keys.', href: '/kindergarten-addition-worksheets', tags: ['kindergarten', 'addition', 'beginner', 'visual'], category: 'worksheet' },
  { title: 'Kindergarten Counting Worksheets', description: 'Counting objects and numbers practice for Kindergarten.', href: '/kindergarten-counting-worksheets', tags: ['kindergarten', 'counting', 'numbers', 'beginner'], category: 'worksheet' },
  { title: 'Kindergarten Subtraction Worksheets', description: 'Simple subtraction practice for Kindergarten with visuals.', href: '/kindergarten-subtraction-worksheets', tags: ['kindergarten', 'subtraction', 'beginner', 'visual'], category: 'worksheet' },
  { title: 'Grade 1 Addition Worksheets', description: 'Addition practice for Grade 1 including number lines and basic facts.', href: '/grade-1-addition-worksheets', tags: ['grade 1', 'addition', 'number lines', 'basic facts'], category: 'worksheet' },
  { title: 'Grade 1 Subtraction Worksheets', description: 'Subtraction practice for Grade 1 with visuals and basic facts.', href: '/grade-1-subtraction-worksheets', tags: ['grade 1', 'subtraction', 'basic facts', 'visual'], category: 'worksheet' },
  { title: 'Grade 1 Word Problems Worksheets', description: 'Simple addition and subtraction word problems for Grade 1.', href: '/grade-1-word-problems-worksheets', tags: ['grade 1', 'word problems', 'addition', 'subtraction'], category: 'worksheet' },
  { title: 'Grade 2 Addition Worksheets', description: 'Two-digit addition with and without regrouping for Grade 2.', href: '/grade-2-addition-worksheets', tags: ['grade 2', 'addition', 'two digit', 'regrouping'], category: 'worksheet' },
  { title: 'Grade 2 Subtraction Worksheets', description: 'Two-digit subtraction with and without borrowing for Grade 2.', href: '/grade-2-subtraction-worksheets', tags: ['grade 2', 'subtraction', 'two digit', 'borrowing'], category: 'worksheet' },
  { title: 'Grade 2 Word Problems Worksheets', description: 'Addition and subtraction word problems for Grade 2.', href: '/grade-2-word-problems-worksheets', tags: ['grade 2', 'word problems', 'addition', 'subtraction'], category: 'worksheet' },
  { title: 'Grade 3 Addition Worksheets', description: 'Multi-digit addition practice for Grade 3 with answer keys.', href: '/grade-3-addition-worksheets', tags: ['grade 3', 'addition', 'multi digit', 'regrouping'], category: 'worksheet' },
  { title: 'Grade 3 Division Worksheets', description: 'Introduction to division facts and sharing for Grade 3.', href: '/grade-3-division-worksheets', tags: ['grade 3', 'division', 'basic facts', 'sharing'], category: 'worksheet' },
  { title: 'Grade 3 Multiplication Worksheets', description: 'Times tables and multiplication facts practice for Grade 3.', href: '/grade-3-multiplication-worksheets', tags: ['grade 3', 'multiplication', 'times tables', 'facts'], category: 'worksheet' },
  { title: 'Grade 3 Subtraction Worksheets', description: 'Multi-digit subtraction with borrowing for Grade 3.', href: '/grade-3-subtraction-worksheets', tags: ['grade 3', 'subtraction', 'borrowing', 'multi digit'], category: 'worksheet' },
  { title: 'Grade 3 Word Problems Worksheets', description: 'Mixed operation word problems for Grade 3.', href: '/grade-3-word-problems-worksheets', tags: ['grade 3', 'word problems', 'mixed operations'], category: 'worksheet' },
  { title: 'Grade 4 Division Worksheets', description: 'Long division and division facts practice for Grade 4.', href: '/grade-4-division-worksheets', tags: ['grade 4', 'division', 'long division', 'facts'], category: 'worksheet' },
  { title: 'Grade 4 Fractions Worksheets', description: 'Equivalent fractions, comparing, and adding fractions for Grade 4.', href: '/grade-4-fractions-worksheets', tags: ['grade 4', 'fractions', 'equivalent', 'comparing'], category: 'worksheet' },
  { title: 'Grade 4 Multiplication Worksheets', description: 'Multi-digit multiplication and times tables for Grade 4.', href: '/grade-4-multiplication-worksheets', tags: ['grade 4', 'multiplication', 'multi digit', 'times tables'], category: 'worksheet' },
  { title: 'Grade 4 Word Problems Worksheets', description: 'Multi-step word problems across all operations for Grade 4.', href: '/grade-4-word-problems-worksheets', tags: ['grade 4', 'word problems', 'multi-step', 'mixed operations'], category: 'worksheet' },
  { title: 'Grade 5 Decimals Worksheets', description: 'Decimal place value, operations, and word problems for Grade 5.', href: '/grade-5-decimals-worksheets', tags: ['grade 5', 'decimals', 'place value', 'operations'], category: 'worksheet' },
  { title: 'Grade 5 Division Worksheets', description: 'Long division with remainders and decimals for Grade 5.', href: '/grade-5-division-worksheets', tags: ['grade 5', 'division', 'long division', 'remainders'], category: 'worksheet' },
  { title: 'Grade 5 Fractions Worksheets', description: 'Multiply and divide fractions, mixed numbers for Grade 5.', href: '/grade-5-fractions-worksheets', tags: ['grade 5', 'fractions', 'mixed numbers', 'multiply', 'divide'], category: 'worksheet' },
  { title: 'Grade 5 Multiplication Worksheets', description: 'Multi-digit and decimal multiplication practice for Grade 5.', href: '/grade-5-multiplication-worksheets', tags: ['grade 5', 'multiplication', 'multi digit', 'decimals'], category: 'worksheet' },
  { title: 'Grade 5 Word Problems Worksheets', description: 'Complex multi-step word problems for Grade 5.', href: '/grade-5-word-problems-worksheets', tags: ['grade 5', 'word problems', 'multi-step', 'complex'], category: 'worksheet' },
  { title: 'Grade 6 Division Worksheets', description: 'Division with decimals and remainders for Grade 6.', href: '/grade-6-division-worksheets', tags: ['grade 6', 'division', 'decimals', 'remainders'], category: 'worksheet' },
  { title: 'Grade 6 Multiplication Worksheets', description: 'Multi-digit and algebraic multiplication practice for Grade 6.', href: '/grade-6-multiplication-worksheets', tags: ['grade 6', 'multiplication', 'multi digit', 'algebra'], category: 'worksheet' },
  { title: 'Grade 6 Percent Worksheets', description: 'Percentages, ratios, and proportions practice for Grade 6.', href: '/grade-6-percent-worksheets', tags: ['grade 6', 'percent', 'percentages', 'ratios', 'proportions'], category: 'worksheet' },
  { title: 'Grade 6 Word Problems Worksheets', description: 'Advanced multi-step word problems for Grade 6.', href: '/grade-6-word-problems-worksheets', tags: ['grade 6', 'word problems', 'multi-step', 'advanced'], category: 'worksheet' },
  { title: 'Free Homeschool Math Guides', description: 'Three free downloadable guides for homeschool parents — Grade 4 readiness, multiplication, and fractions.', href: '/free-guides', tags: ['free', 'guides', 'download', 'parent resources'], category: 'resource' },
  { title: 'Is My Child Ready for Grade 4 Math?', description: 'Free diagnostic guide with checklist, practice problems, scoring guide and 4-week action plan.', href: '/free-grade-4-guide', tags: ['free', 'grade 4', 'diagnostic', 'readiness', 'checklist'], category: 'resource' },
  { title: 'Multiplication Made Simple', description: 'Free 5-day multiplication starter guide for homeschool parents — equal groups, arrays, derived facts.', href: '/free-multiplication-guide', tags: ['free', 'multiplication', 'times tables', 'guide', 'parents'], category: 'resource' },
  { title: 'Fractions from Scratch', description: 'Free fraction concept foundation guide — what fractions are, comparing, equivalence, number lines.', href: '/free-fractions-guide', tags: ['free', 'fractions', 'guide', 'concept', 'foundation'], category: 'resource' },
]

const CATEGORY_LABELS: Record<Page['category'], string> = {
  worksheet: 'Worksheet',
  guide: 'Guide',
  resource: 'Resource',
}

const CATEGORY_COLORS: Record<Page['category'], string> = {
  worksheet: 'badge-worksheet',
  guide: 'badge-guide',
  resource: 'badge-resource',
}

export default function SearchClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Page['category'] | 'all'>('all')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    return ALL_PAGES.filter((page) => {
      const matchesCategory = activeCategory === 'all' || page.category === activeCategory
      if (!matchesCategory) return false
      if (!q) return true
      return (
        page.title.toLowerCase().includes(q) ||
        page.description.toLowerCase().includes(q) ||
        page.tags.some((t) => t.includes(q))
      )
    })
  }, [query, activeCategory])

  return (
    <main className="search-page">
      <div className="search-hero">
        <h1>Search</h1>
        <p className="search-subtitle">Find worksheets, guides, and resources across 100+ pages.</p>
        <div className="search-input-wrap">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder='Try "fractions", "grade 3", "long division"…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            aria-label="Search worksheets and guides"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="search-filters" role="group" aria-label="Filter by type">
          {(['all', 'worksheet', 'guide', 'resource'] as const).map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All' : CATEGORY_LABELS[cat] + 's'}
            </button>
          ))}
        </div>
      </div>

      <div className="search-results-area">
        <p className="results-count">
          {query || activeCategory !== 'all'
            ? `${results.length} result${results.length !== 1 ? 's' : ''}${query ? ` for "${query}"` : ''}`
            : `Showing all ${results.length} pages`}
        </p>

        {results.length === 0 ? (
          <div className="no-results">
            <p>No results found for &ldquo;{query}&rdquo;.</p>
            <p className="no-results-hint">Try a different word — for example, &ldquo;multiply&rdquo; instead of &ldquo;times tables&rdquo;.</p>
          </div>
        ) : (
          <ul className="results-list">
            {results.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="result-link">
                  <div className="result-header">
                    <span className="result-title">{page.title}</span>
                    <span className={`result-badge ${CATEGORY_COLORS[page.category]}`}>
                      {CATEGORY_LABELS[page.category]}
                    </span>
                  </div>
                  <p className="result-desc">{page.description}</p>
                  <span className="result-url">homeschoolmath.site{page.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
