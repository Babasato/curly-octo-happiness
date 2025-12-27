// app/utils/pdfGenerator.ts
import jsPDF from 'jspdf';

export interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  hasVisual?: boolean;
  visualType?: 'shapes' | 'counting' | 'none';
}

export async function downloadCombinedPDF(
  problems: Problem[], 
  title: string,
  includeVisuals: boolean = false
): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (2 * margin);

  // WORKSHEET PAGE
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, pageWidth / 2, 20, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Name: _____________________', margin, 35);
  doc.text('Date: _____________________', pageWidth - margin - 50, 35);

  let yPosition = 50;

  problems.forEach((problem, index) => {
    // Calculate space needed for this problem
    const problemText = `${index + 1}. ${problem.question}`;
    const lines = doc.splitTextToSize(problemText, contentWidth - 10);
    let spaceNeeded = lines.length * 5 + 20; // text + answer line space
    
    // Add visual space if needed
    if (includeVisuals && problem.hasVisual) {
      const numbers = problem.question.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        if (num1 <= 10 && num2 <= 10) {
          spaceNeeded += 15; // approximate visual height
        }
      }
    }
    
    // Check if we need a new page
    if (yPosition + spaceNeeded > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
    }

    // Problem text
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 5;

    // SIMPLE VISUALS FOR PDF
    if (includeVisuals && problem.hasVisual) {
      const numbers = problem.question.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        
        if (num1 <= 10 && num2 <= 10) {
          // Draw simple circles for visuals
          const startX = margin + 5;
          let currentX = startX;
          
          if (problem.question.includes('+')) {
            // Draw first group
            for (let i = 0; i < num1; i++) {
              if (i > 0 && i % 8 === 0) {
                currentX = startX;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              currentX += 4;
            }
            
            // Plus sign
            doc.setFontSize(10);
            doc.text('+', currentX + 1, yPosition + 1);
            currentX += 6;
            
            // Second group
            for (let i = 0; i < num2; i++) {
              if (i > 0 && (i + num1) % 8 === 0) {
                currentX = startX + 40;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              currentX += 4;
            }
            
            yPosition += 10;
          } else if (problem.question.includes('-')) {
            // Draw all circles, some crossed
            for (let i = 0; i < num1; i++) {
              if (i > 0 && i % 10 === 0) {
                currentX = startX;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              
              // Cross out subtracted ones
              if (i >= (num1 - num2)) {
                doc.setDrawColor(220, 38, 38);
                doc.line(currentX - 2, yPosition - 2, currentX + 2, yPosition + 2);
                doc.line(currentX - 2, yPosition + 2, currentX + 2, yPosition - 2);
              }
              
              currentX += 4;
            }
            yPosition += 10;
          }
        }
      }
    }

    // Answer line
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.line(margin, yPosition + 5, margin + 60, yPosition + 5);
    doc.setFontSize(9);
    doc.text('Answer:', margin, yPosition + 3);

    yPosition += 20;
  });

  // ANSWER KEY PAGE
  doc.addPage();
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Answer Key', pageWidth / 2, 20, { align: 'center' });

  yPosition = 35;

  problems.forEach((problem, index) => {
    // Calculate space needed for answer
    const answerText = `${index + 1}. ${problem.question}`;
    const answerLines = doc.splitTextToSize(answerText, contentWidth - 30);
    const answerSpaceNeeded = Math.max(7, answerLines.length * 5) + 5;
    
    // Check if we need a new page for answer key
    if (yPosition + answerSpaceNeeded > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    doc.text(answerLines, margin, yPosition);
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(220, 38, 38);
    doc.text(`${problem.answer}`, margin + contentWidth - 25, yPosition);
    doc.setTextColor(0, 0, 0);

    yPosition += Math.max(7, answerLines.length * 5);
  });

  const filename = `${title.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(filename);
}
