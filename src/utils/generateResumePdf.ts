import { jsPDF } from 'jspdf';

export function generateResumePdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Colors
  const primaryColor = [15, 23, 42]; // #0f172a slate-900
  const accentColor = [99, 102, 241]; // #6366f1 indigo-500
  const secondaryColor = [71, 85, 105]; // #475569 slate-600
  const lightBg = [248, 250, 252]; // #f8fafc slate-50
  const lineDividerColor = [226, 232, 240]; // #e2e8f0

  // 1. Header Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('RESHMA ANGAJALA', margin, y);
  y += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('PRODUCT ENGINEER · RESEARCH EXPERT', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const contactText = 'reshmaangjala@gmail.com   |   +91 7008762566   |   linkedin.com/in/reshma-angajala';
  doc.text(contactText, margin, y);
  y += 4;

  // Horizontal line
  doc.setDrawColor(lineDividerColor[0], lineDividerColor[1], lineDividerColor[2]);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Helper for section headings
  const addSectionHeading = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 25, y);
    doc.setDrawColor(lineDividerColor[0], lineDividerColor[1], lineDividerColor[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 25, y, pageWidth - margin, y);
    y += 5;
  };

  // 2. Summary
  addSectionHeading('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const summaryText =
    'Product engineer and research specialist with a Computer Science Engineering background. Proven expertise in conducting deep primary & secondary research, structuring taxonomy & living knowledge systems, and engineering intuitive, scalable product architectures from concept to delivery.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.2 + 4;

  // 3. Experience
  addSectionHeading('Work Experience');

  // Experience Entry 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Junior UI/UX Designer', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('JUL 2025 – DEC 2025', pageWidth - margin, y, { align: 'right' });
  y += 4.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Hanyaa Auto Technologies — Hyderabad, India', margin, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const exp1Bullets = [
    'Conducted in-person primary research including structured interviews across mechanical, electrical, AI/ML, and CS engineering students to shape a next-gen EV mobility concept for women riders.',
    'Performed comprehensive secondary research and SWOT competitive analysis across EV products and applications, identifying critical interface and functional gaps.',
    'Synthesized actionable user research and presented strategic product roadmaps to leadership and engineering teams to guide system specifications.',
  ];

  exp1Bullets.forEach((bullet) => {
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text('•', margin + 1, y);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(splitBullet, margin + 5, y);
    y += splitBullet.length * 3.8 + 1.2;
  });
  y += 2;

  // Experience Entry 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('UI/UX Design Intern', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('JAN 2025 – JUN 2025', pageWidth - margin, y, { align: 'right' });
  y += 4.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Hanyaa Auto Technologies — Hyderabad, India', margin, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const exp2Bullets = [
    'Supported end-to-end qualitative user research, survey distribution, and competitor telemetry tracking during initial discovery phase.',
    'Collaborated closely with AI/ML developers to translate user friction points into concrete product requirements.',
  ];

  exp2Bullets.forEach((bullet) => {
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text('•', margin + 1, y);
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    const splitBullet = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(splitBullet, margin + 5, y);
    y += splitBullet.length * 3.8 + 1.2;
  });
  y += 4;

  // 4. Key Projects / Case Studies
  addSectionHeading('Key Products & Case Studies');

  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Offload — AI Life Assistant & Obligation Hub', margin, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const p1Desc =
    'Conducted 120+ verified user survey analysis, created 14-competitor benchmark matrix, designed living design system, and architected automated obligation classification logic.';
  const splitP1 = doc.splitTextToSize(p1Desc, contentWidth);
  doc.text(splitP1, margin, y);
  y += splitP1.length * 3.8 + 3;

  // Project 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Reyo — Connected EV Ecosystem & Community', margin, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const p2Desc =
    'End-to-end research, user journeys, SOS telemetry alert pipeline, and battery health diagnostic architecture tailored specifically for women riders.';
  const splitP2 = doc.splitTextToSize(p2Desc, contentWidth);
  doc.text(splitP2, margin, y);
  y += splitP2.length * 3.8 + 4;

  // 5. Education & Certifications (2-column section)
  addSectionHeading('Education & Certifications');

  const colWidth = (contentWidth - 8) / 2;

  // Left col: Education
  let leftY = y;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Education', margin, leftY);
  leftY += 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('B.Tech, Computer Science & Engineering', margin, leftY);
  leftY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Centurion Univ. of Tech. & Management (2021 – 2025)', margin, leftY);
  leftY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Intermediate (Class 12)', margin, leftY);
  leftY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Narayana Junior College, Vishakapatnam (2019 – 2021)', margin, leftY);
  leftY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Class 10', margin, leftY);
  leftY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Public School, Jeypore (2018 – 2019)', margin, leftY);

  // Right col: Certifications
  let rightY = y;
  const rightColX = margin + colWidth + 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Certifications', rightColX, rightY);
  rightY += 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('UI/UX Design Internship Certificate', rightColX, rightY);
  rightY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Hanyaa Auto Technologies', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Product & Industrial Design Certification', rightColX, rightY);
  rightY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('10k Designers Cohort', rightColX, rightY);

  y = Math.max(leftY, rightY) + 6;

  // 6. Skills & Tools
  addSectionHeading('Technical & Research Competencies');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Research & Strategy:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(
    'Primary Research, User Interviews, Survey Analysis, Competitive Benchmarking, Taxonomy, Living Documentation, Information Architecture.',
    margin + 36,
    y
  );
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Tools & Engineering:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(
    'Figma, Notion, React, TypeScript, GenAI Classification, SharePoint, MS Excel, PowerPoint, Google Forms.',
    margin + 36,
    y
  );

  // Save the document
  doc.save('Reshma_Angajala_Resume.pdf');
}
