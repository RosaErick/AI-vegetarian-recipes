import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (prompt === randomPrompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}


