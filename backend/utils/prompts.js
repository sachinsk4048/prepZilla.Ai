

const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => (`
You are an AI trained to generate technical interview questions and answers.

Tasks:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Write ${numberOfQuestions} interview questions.
- For each question, generate a clear, beginner-friendly but technically correct answer.

Formatting Rules (VERY IMPORTANT):
1. If an answer includes code, ALWAYS write it inside a Markdown code block using triple backticks.
2. Always specify the programming language after the backticks (example: \`\`\`javascript, \`\`\`cpp, \`\`\`bash).
3. The code block must be properly formatted and readable.
4. Do NOT write code like: "cpp #include <iostream>".
5. Code blocks must be included as Markdown inside the JSON string.

Example format inside the answer:

Example:
\`\`\`cpp
#include <iostream>

int main() {
  std::cout << "Hello World";
  return 0;
}
\`\`\`

Response format:
Return ONLY a valid JSON array like this:

[
  {
    "question": "Question here?",
    "answer": "Answer here with explanation and optional Markdown code block."
  }
]

Important Rules:
- Do NOT include any text outside the JSON.
- Return ONLY valid JSON.
- Ensure formatting inside the answer string is valid Markdown.
`)


const conceptExplainPrompt = (question) => (`
You are an AI trained to generate explanations for a given interview question.

Task:
Explain the following interview question clearly for a beginner developer.

Question:
"${question}"

Instructions:
- Provide a detailed but simple explanation.
- Use headings, bullet points, or lists where helpful.
- If code examples are needed, ALWAYS include them inside Markdown code blocks using triple backticks.
- Always specify the language after the backticks.

Example code format:

\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\`

Response format:
Return ONLY a valid JSON object like this:

{
  "title": "Short concept title",
  "explanation": "Detailed explanation with optional Markdown code blocks."
}

Important Rules:
- Do NOT add text outside the JSON object.
- The explanation field may contain Markdown formatting.
- Code blocks must use triple backticks.
`)

module.exports = { questionAnswerPrompt, conceptExplainPrompt }