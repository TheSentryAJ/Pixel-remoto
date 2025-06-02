'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant blog articles based on user inquiries.
 *
 * The flow takes a user's inquiry as input and returns a list of suggested article titles.
 * @interface SuggestArticlesInput - The input for the suggestArticles function.
 * @interface SuggestArticlesOutput - The output of the suggestArticles function.
 * @function suggestArticles - The main function to suggest articles based on user inquiry.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestArticlesInputSchema = z.object({
  inquiry: z.string().describe('The user inquiry from the contact form.'),
});
export type SuggestArticlesInput = z.infer<typeof SuggestArticlesInputSchema>;

const SuggestArticlesOutputSchema = z.object({
  articleTitles: z
    .array(z.string())
    .describe('A list of suggested blog article titles.'),
});
export type SuggestArticlesOutput = z.infer<typeof SuggestArticlesOutputSchema>;

export async function suggestArticles(input: SuggestArticlesInput): Promise<SuggestArticlesOutput> {
  return suggestArticlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestArticlesPrompt',
  input: {schema: SuggestArticlesInputSchema},
  output: {schema: SuggestArticlesOutputSchema},
  prompt: `You are an AI assistant for Alhaurín Tech Solutions, a local computer technician company. You are helping users by suggesting relevant blog articles from the company blog to help them solve their problem.
  Based on the user's inquiry, suggest relevant blog articles from the following list:

  List of Articles:
  - "Troubleshooting Common Wi-Fi Issues"
  - "Speed Up Your Slow Computer"
  - "Protecting Your Computer from Viruses"
  - "Setting Up a Home Network"
  - "Understanding Cloud Storage"
  - "Fixing Printer Problems"
  - "Data Backup and Recovery"

  Inquiry: {{{inquiry}}}

  Suggest only the article titles that are most relevant to the inquiry.
  Return the article titles in a JSON array format.
  `,
});

const suggestArticlesFlow = ai.defineFlow(
  {
    name: 'suggestArticlesFlow',
    inputSchema: SuggestArticlesInputSchema,
    outputSchema: SuggestArticlesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
